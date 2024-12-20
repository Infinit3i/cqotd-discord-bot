const { Client, IntentsBitField } = require("discord.js");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Handlers
const { eventHandler } = require("./handlers/eventHandler");
const { interactionHandler } = require("./handlers/interactionHandler");
const registerCommands = require("./commands/register-commands");

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

// MongoDB Connection
(async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to DB.");
  } catch (error) {
    console.error(`❌ Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
})();

// Schedule Questions and Register Events
client.once("ready", () => {
  console.log(`✅ ${client.user.tag} is online.`);
  registerCommands(); // Remove client argument
});

// Attach Handlers
eventHandler(client);
interactionHandler(client);

// Login Bot
client.login(process.env.TOKEN);