const { Client, IntentsBitField } = require("discord.js");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Handlers
const { eventHandler } = require("./handlers/eventHandler");
const { interactionHandler } = require("./handlers/interactionHandler");
const registerCommands = require("./commands/register-commands");
const { sendNewRSS } = require("./content/sendrss");
// const { sendNewVideos } = require("./content/sendvideos");
const {
  scheduleSpecialQuestions,
  logSpecialQuestionTimes,
} = require("./handlers/questionHandler");

const { sendLatestYouTubeVideo } = require("./content/sendyt");

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("❌ MongoDB URI is not defined.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 15000, // Adjust timeout
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Error connecting to DB:", err.message);
    process.exit(1);
  });


// Initialize Client
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Attach State and Methods to the Client
client.questionsArray = [];
client.currentQuestion = null;

client.login(process.env.TOKEN).catch((err) => {
  console.error("❌ Error logging in Discord bot:", err.message);
  process.exit(1);
});

// Schedule Questions and Register Events
client.once("ready", () => {
  console.log(`✅ ${client.user.tag} Registered Commands.`);
  registerCommands(); // Remove client argument
});

// Attach Handlers
eventHandler(client);
interactionHandler(client);

client.once("ready", async () => {
  console.log(`✅ ${client.user.tag} is read to push RSS!`);

  // Provide RSS feed URLs and channel ID
  const feedUrls = [
    "https://www.bleepingcomputer.com/feed/",
    "https://www.cisa.gov/blog.xml",
    "https://www.blackhillsinfosec.com/feed/",
    "https://www.cisa.gov/news.xml",
    "https://feedpress.me/CiscoSecurity",
    "https://feeds.feedburner.com/cyber-security-news",
    "https://feeds.feedburner.com/TroyHunt",
    "https://feeds.feedburner.com/TheHackersNews",
    "https://krebsonsecurity.com/feed/",
    "https://isc.sans.edu/rssfeed_full.xml",
    "https://news.sophos.com/en-us/category/security-operations/feed/",
    "https://www.usom.gov.tr/rss/duyuru.rss",
    "https://grahamcluley.com/feed/",
    "https://feeds.feedburner.com/eset/blog",
    "https://podcast.darknetdiaries.com/",
  ];
  const discordChannelId = process.env.NEWS_ID;

  // Check RSS feeds periodically
  setInterval(async () => {
    console.log("Tried to grab RSS feeds.");
    await sendNewRSS(client, discordChannelId, feedUrls);
  }, 30 * 60 * 1000); // Run every 30 minutes
});

// SEND 1 VIDEO
client.once("ready", async () => {
  console.log(`✅ ${client.user.tag} is ready to push a few youtube videos!`);

  // Define YouTube channels to monitor
  const youtubeChannelUrls = [
    "https://www.youtube.com/@13Cubed",
    "https://www.youtube.com/@ippsec",
    "https://www.youtube.com/@LowLevelTV",
  ];

  const discordChannelId = process.env.DISCORD_CHANNEL_BLUE;

  // Check for new videos periodically
  setInterval(async () => {
    console.log("Checking for new YouTube videos...");
    await sendLatestYouTubeVideo(client, discordChannelId, youtubeChannelUrls);
  }, 60 * 60 * 1000); // Run every 1 hour
});

/*

const videoCategories = [
  {
    category: "blue",
    discordChannelId: process.env.DISCORD_CHANNEL_BLUE,
    youtubeChannelIds: [
      "UCgTNupxATBfWmfehv21ym-g", // 13Cubed
      "UCOa7rYj90JxKD7bDgv06SHQ", // TrustedSecTV
      "UCwR-9FwpVDz0qeMQl4d9hIQ", // BlackHillsInformationSecurity
    ],
  },
  {
    category: "red",
    discordChannelId: process.env.DISCORD_CHANNEL_RED,
    youtubeChannelIds: [
      "UCVCTAfYT5ODQI_6Sb6e8JdA", // LowLevelTV
      "UCq21WgV9a2T3Erxy45qAOpA", // IppSec
      "UClcE-kVhqyiHCcjYwcpfj9w", // _JohnHammond
    ],
  },
  {
    category: "it",
    discordChannelId: process.env.DISCORD_CHANNEL_IT,
    youtubeChannelIds: [
      "UCR1D15p_vdP3HkrH8wgjQRw", // NetworkChuck
      "UC2aU4hUmoA2-qx3PppE3LzQ", // stuffy24
    ],
  },
];

// Check for new videos periodically
setInterval(async () => {
  for (const categoryConfig of videoCategories) {
    if (categoryConfig.youtubeChannelIds.length) {
      await sendNewVideos(
        client,
        categoryConfig.category,
        categoryConfig.youtubeChannelIds
      );
    } else {
      console.log(`No YouTube channels configured for category '${categoryConfig.category}'.`);
    }
  }
}, 100000 * 60 * 1000); // Run every 10 minutes

*/

client.once("ready", async () => {
  // Define special question times
  const specialTimes = ["0900", "1000", "1200", "1300", "1400", "2000"];
  // Log special times for debugging purposes
  console.log("Special question times scheduled:");
  specialTimes.forEach((time) => console.log(`- ${time}`));

  // Schedule special questions
  scheduleSpecialQuestions(client, specialTimes);
});

// Login Bot
client.login(process.env.TOKEN);
