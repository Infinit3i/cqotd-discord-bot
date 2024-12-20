const axios = require("axios");
const RSSParser = require("rss-parser");
require("dotenv").config();

const parser = new RSSParser();
const channels = {}; // Tracks the latest published timestamps for each RSS feed

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
      const itemPublished = new Date(item.pubDate || item.isoDate).getTime();
      if (itemPublished > channels[feedUrl]) {
        // Send the new RSS entry to the channel
        const content = `📢 **New Post from ${feed.title}**\n\n**${item.title}**\n${item.link}`;
        await channel.send(content);

        // Update the latest published timestamp for this feed
        channels[feedUrl] = Math.max(channels[feedUrl], itemPublished);
      }
    }
  }
}

module.exports = { sendNewRSS };
