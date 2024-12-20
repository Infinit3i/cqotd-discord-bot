const puppeteer = require("puppeteer");
require("dotenv").config();

const sentVideos = new Set(); // Tracks already sent video links

/**
 * Fetch the latest video from a YouTube channel's page.
 * @param {string} channelUrl - The URL of the YouTube channel.
 * @returns {object|null} - An object with the video title and link, or null if no video is found.
 */
async function fetchLatestYouTubeVideo(channelUrl) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Go to the YouTube channel's page
    await page.goto(channelUrl, { waitUntil: "networkidle2" });

    // Wait for video elements to load
    await page.waitForSelector('a[href^="/watch"]');

    // Extract the latest video link and title
    const video = await page.evaluate(() => {
      const videoElement = document.querySelector('a[href^="/watch"]');
      const titleElement = videoElement.querySelector("h3");

      return {
        link: `https://www.youtube.com${videoElement.getAttribute("href")}`,
        title: titleElement ? titleElement.innerText.trim() : "New Video",
      };
    });

    await browser.close();

    return video;
  } catch (error) {
    console.error(`Error fetching video from ${channelUrl}:`, error.message);
    return null;
  }
}

/**
 * Send the latest video from YouTube channels to a Discord channel.
 * @param {object} client - The Discord client instance.
 * @param {string} discordChannelId - The ID of the Discord channel.
 * @param {string[]} youtubeChannelUrls - An array of YouTube channel URLs.
 */
async function sendLatestYouTubeVideo(client, discordChannelId, youtubeChannelUrls) {
  const discordChannel = await client.channels.fetch(discordChannelId);
  if (!discordChannel) {
    console.error(`Discord channel with ID ${discordChannelId} not found.`);
    return;
  }

  for (const channelUrl of youtubeChannelUrls) {
    const video = await fetchLatestYouTubeVideo(channelUrl);
    if (!video) continue;

    // Skip if the video has already been sent
    if (sentVideos.has(video.link)) {
      console.log(`Video already sent: ${video.title}`);
      continue;
    }

    // Send the latest video to Discord
    const content = `🎥 **New Video from ${channelUrl}**\n**${video.title}**\n${video.link}`;
    await discordChannel.send(content);

    // Mark the video as sent
    sentVideos.add(video.link);
    console.log(`Sent new video: ${video.title}`);
  }
}

module.exports = { sendLatestYouTubeVideo };
