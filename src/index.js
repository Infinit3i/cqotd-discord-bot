const { Client, IntentsBitField } = require("discord.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const { assignRoles } = require("./utils/addroles");

// Import Handlers
const {
  scheduleSpecialQuestions,
} = require("./handlers/multipleChoiceHandler");
const { eventHandler } = require("./handlers/eventHandler");
const { interactionHandler } = require("./handlers/interactionHandler");
const registerCommands = require("./commands/register-commands");
const { sendNewRSS } = require("./content/sendrss");
const { celebrateHoliday } = require("./content/celebrateHolidays");

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

// leaderboard update handler
client.once("ready", async () => {
  const guildId = process.env.GUILD_ID;
  await assignRoles(client, guildId);
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

const specialTimes = [
  "1400",
  "1430",
  "1500",
  "1530",
  "1800",
  "1830",
  "1900",
  "1930",
  "2000",
  "2030",
];
scheduleSpecialQuestions(client, specialTimes);

// Inside the ready event
client.once("ready", async () => {
  console.log("✅ Holiday Celebrator Ready!");

  // Check for holidays immediately on startup
  await celebrateHoliday(client);

  // Check for holidays every day at midnight
  setInterval(async () => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      await celebrateHoliday(client);
    }
  }, 60 * 1000); // Check every minute
});

// Login Bot
client.login(process.env.TOKEN);
