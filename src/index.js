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

const videoCategories = [
  {
    category: "Lifting",
    discordChannelId: process.env.DISCORD_CHANNEL_LIFTING,
    youtubeChannelUrls: [
      "https://www.youtube.com/@JeffNippard",
      "https://www.youtube.com/@ChrisBumstead",
      "https://www.youtube.com/@LiftingVault",
    ],
  },
  {
    category: "blue",
    discordChannelId: process.env.DISCORD_CHANNEL_BLUE,
    youtubeChannelUrls: [
      "https://www.youtube.com/@13Cubed",
      "https://www.youtube.com/@TrustedSecTV",
      "https://www.youtube.com/@BlackHillsInformationSecurity",
      "https://www.youtube.com/@USENIXEnigmaConference",
      "https://www.youtube.com/@pcsecuritychannel",
      "https://www.youtube.com/@EricParker",
      "https://www.youtube.com/@jbravovideos",
      "https://www.youtube.com/@SANSCyberDefense",
      "https://www.youtube.com/@TrustedSecTV",
      "https://www.youtube.com/@sonianuj",
    ],
  },
  {
    category: "red",
    discordChannelId: process.env.DISCORD_CHANNEL_RED,
    youtubeChannelUrls: [
      "https://www.youtube.com/@LowLevelTV",
      "https://www.youtube.com/@IppSec",
      "https://www.youtube.com/@_JohnHammond",
      "https://www.youtube.com/@HackerSploit",
      "https://www.youtube.com/@MotasemHamdan",
      "https://www.youtube.com/@crr0ww",
      "https://www.youtube.com/@Incodenito",
      "https://www.youtube.com/@LeetCipher",
    ],
  },
  {
    category: "it",
    discordChannelId: process.env.DISCORD_CHANNEL_IT,
    youtubeChannelUrls: [
      "https://www.youtube.com/@NetworkChuck",
      "https://www.youtube.com/@stuffy24",
      "https://www.youtube.com/@derekbanas",
      "https://www.youtube.com/@DavesGarage",
      "https://www.youtube.com/@PirateSoftware",
      "https://www.youtube.com/@letsgetrusty",
      "https://www.youtube.com/@lamecreations_guides",
      "https://www.youtube.com/@NoBoilerplate",
      "https://www.youtube.com/@CoreDumpped",
      "https://www.youtube.com/@codetothemoon",
      "https://www.youtube.com/@ThePrimeagen",
    ],
  },
  {
    category: "psych-videos",
    discordChannelId: process.env.DISCORD_CHANNEL_PSYCH_VIDEOS,
    youtubeChannelUrls: [
      "https://www.youtube.com/@Dr.Explainer-zt2xj",
      "https://www.youtube.com/@MillenniaThinker",
      "https://www.youtube.com/@GLITCH",
      "https://www.youtube.com/@thedarkneedle",
      "https://www.youtube.com/@donthugmeimscared",
      "https://www.youtube.com/@savbrown",
    ],
  },
  {
    category: "Gaming",
    discordChannelId: process.env.DISCORD_CHANNEL_GAMING,
    youtubeChannelUrls: ["https://www.youtube.com/@lllonilll"],
  },
  {
    category: "Guns",
    discordChannelId: process.env.DISCORD_CHANNEL_GUNS,
    youtubeChannelUrls: [
      "https://www.youtube.com/@ForwardObservations",
      "https://www.youtube.com/@TacticalForge1",
    ],
  },
  {
    category: "Unraid",
    discordChannelId: process.env.DISCORD_CHANNEL_UNRAID,
    youtubeChannelUrls: [
      "https://www.youtube.com/@IBRACORP",
      "https://www.youtube.com/@SpaceinvaderOne",
    ],
  },
];

client.once("ready", async () => {
  console.log(
    `${client.user.tag} is ready and checking for new YouTube videos!`
  );

  // Function to process video categories
  const processVideos = async () => {
    for (const categoryConfig of videoCategories) {
      if (categoryConfig.youtubeChannelUrls.length) {
        await sendLatestYouTubeVideo(
          client,
          categoryConfig.discordChannelId,
          categoryConfig.youtubeChannelUrls
        );
      } else {
        console.log(
          `No YouTube channels configured for category '${categoryConfig.category}'.`
        );
      }
    }
  };

  // Check immediately after the bot starts
  await processVideos();

  // Schedule checks every 6 hours
  setInterval(async () => {
    console.log("Checking for new YouTube videos...");
    await processVideos();
  }, 12 * 60 * 60 * 1000); // Run every 12 hours
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

// Login Bot
client.login(process.env.TOKEN);
