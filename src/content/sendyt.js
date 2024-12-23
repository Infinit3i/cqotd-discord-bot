const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const { videoCategories } = require("./ytcategories");
require("dotenv").config();

const sentVideos = new Set(); // Tracks already sent video links

/**
 * Fetch the latest video from a YouTube channel's page.
 * @param {string} channelUrl - The URL of the YouTube channel.
 * @returns {object|null} - An object with the video title, link, and posted date, or null if no video is found.
 */
async function fetchLatestYouTubeVideo(channelUrl) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(60000);

    console.log(`Navigating to ${channelUrl}...`);
    await page.goto(channelUrl, { waitUntil: "networkidle2" });

    // Wait for video elements to load and give YouTube additional time to render
    await page.waitForSelector('a[href^="/watch"]', { timeout: 60000 });
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Introduce delay

    // Fetch page content and load into Cheerio
    const html = await page.content();
    const $ = cheerio.load(html);

    // Parse title and date using Cheerio
    const videoElement = $('a[href^="/watch"]').first();
    const titleElement = $("#video-title, yt-formatted-string.style-scope.ytd-watch-metadata").first();
    const dateElement = $("#metadata-line span:nth-child(2)").first();

    const video = {
      link: videoElement.length ? `https://www.youtube.com${videoElement.attr("href")}` : null,
      title: titleElement.length ? titleElement.text().trim() : "Unknown Title",
      postedDate: dateElement.length ? dateElement.text().trim() : "Unknown Date",
    };

    console.log("Extracted video:", video);

    // Retry fetching posted date if it’s "Unknown Date"
    if (video.postedDate === "Unknown Date") {
      console.log("Retrying to fetch posted date...");
      await page.reload({ waitUntil: "networkidle2" });
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const retriedHtml = await page.content();
      const $retry = cheerio.load(retriedHtml);

      const retriedDateElement = $retry("#metadata-line span:nth-child(2)").first();
      if (retriedDateElement.length) {
        video.postedDate = retriedDateElement.text().trim();
      }
    }

    await browser.close();
    return video;
  } catch (error) {
    console.error(`Error fetching video from ${channelUrl}:`, error.message);
    return null;
  }
}

/**
 * Check if the video was posted recently (today, yesterday, or within hours).
 * @param {string} postedDate - The posted date string extracted from YouTube.
 * @returns {boolean} - Returns true if the video was posted recently.
 */
function isVideoPostedRecently(postedDate) {
  if (!postedDate || postedDate === "Unknown Date") {
    console.warn(`Unrecognized posted date: "${postedDate}". Assuming not recent.`);
    return false;
  }

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const formattedToday = today.toDateString();
  const formattedYesterday = yesterday.toDateString();

  console.log(`Evaluating posted date: "${postedDate}"`);

  // Check for relative terms
  const relativeTerms = ["today", "yesterday", "hour ago", "hours ago", "minutes ago"];
  for (const term of relativeTerms) {
    if (postedDate.toLowerCase().includes(term)) return true;
  }

  // Attempt to parse exact date formats
  const dateMatch = postedDate.match(/\b(\w+ \d{1,2}, \d{4})\b|\b(\d+ hours? ago)\b/); // Match formats like "Dec 23, 2024" or "5 hours ago"
  if (dateMatch) {
    if (dateMatch[1]) {
      const videoDate = new Date(dateMatch[1]);
      return (
        videoDate.toDateString() === formattedToday ||
        videoDate.toDateString() === formattedYesterday
      );
    }
    if (dateMatch[2]) return true; // Handle "X hours ago" explicitly
  }

  console.warn(`Posted date "${postedDate}" could not be evaluated. Assuming not recent.`);
  return false;
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
    if (!video) {
      console.log(`No video data found for channel: ${channelUrl}`);
      continue;
    }

    console.log(`Checking if video "${video.title}" is recent with date "${video.postedDate}"...`);
    if (!isVideoPostedRecently(video.postedDate)) {
      console.log(`No recent video found for channel: ${channelUrl}`);
      continue;
    }

    // Skip if the video has already been sent
    if (sentVideos.has(video.link)) {
      console.log(`Video already sent: ${video.title}`);
      continue;
    }

    // Extract the channel name from the URL
    const channelName = channelUrl.split('/').pop().replace('@', '');

    // Send the latest video to Discord
    const content = `🎥 **New Video from [${channelName}](${channelUrl})**\n**${video.title}**\n${video.link}`;
    await discordChannel.send(content);

    // Mark the video as sent
    sentVideos.add(video.link);
    console.log(`Sent new video: ${video.title}`);
  }
}


module.exports = { sendLatestYouTubeVideo };
