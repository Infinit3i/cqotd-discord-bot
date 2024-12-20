const axios = require("axios");
const RSSParser = require("rss-parser");
require("dotenv").config();

const parser = new RSSParser();
const channels = {}; // Tracks the latest published timestamps for each RSS feed
const sentLinks = new Set(); // Tracks already sent links to prevent duplicates

async function fetchRSSFeed(feedUrl) {
  try {
    const response = await axios.get(feedUrl, {
      headers: { "User-Agent": "DiscordRSSBot" },
    });
    const feed = await parser.parseString(response.data);
    return feed;
  } catch (error) {
    console.error(`Error fetching RSS feed from ${feedUrl}:`, error.message);
    return null;
  }
}

async function sendNewRSS(client, channelId, feedUrls) {
  const channel = await client.channels.fetch(channelId);
  if (!channel) {
    console.error(`Channel with ID ${channelId} not found.`);
    return;
  }

  for (const feedUrl of feedUrls) {
    const feed = await fetchRSSFeed(feedUrl);
    if (!feed) continue;

    // Ensure the feed is being tracked
    if (!channels[feedUrl]) channels[feedUrl] = 0;

    for (const item of feed.items) {
      const itemLink = item.link; // Unique identifier for each post
      const itemPublished = new Date(item.pubDate || item.isoDate).getTime();

      // Skip already sent posts
      if (sentLinks.has(itemLink)) continue;

      // Only process new items
      if (itemPublished > channels[feedUrl]) {
        const content = `📢 **New Post from ${feed.title}**\n\n**${item.title}**\n${item.link}`;

        // Check if the same content exists in the channel
        const messages = await channel.messages.fetch({ limit: 100 });
        const exists = messages.some((msg) => msg.content.includes(itemLink));

        if (!exists) {
          await channel.send(content);
          sentLinks.add(itemLink); // Mark as sent
          channels[feedUrl] = Math.max(channels[feedUrl], itemPublished); // Update timestamp
        }
      }
    }
  }
}

module.exports = { sendNewRSS };
