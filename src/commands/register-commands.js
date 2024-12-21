require("dotenv").config();
const { REST, Routes } = require("discord.js");

// Define the commands
const commands = [
  {
    name: "score",
    description: "See someone's score.",
    options: [
      {
        name: "user",
        description: "The user whose score you want to check.",
        type: 6, // USER type
        required: false,
      },
    ],
  },
  {
    name: "hint",
    description: "Get a hint for the current question.",
  },
  {
    name: "skip",
    description: "Skip the current question.",
  },
  {
    name: "new", // Alias for "skip"
    description: "Gets a new question.",
  },
  {
    name: "blank",
    description: "Get a blank version of the question.",
  },
  {
    name: "leaderboard",
    description: "Displays the top scores in the server.",
  },
  {
    name: "question",
    description: "Get a question from a specific category or a random one.",
    options: [
      {
        name: "category",
        description: "The category of the question (e.g., CompTIA CASP+, CCNA, CISSP, Net+, Event Logs, Firewall).",
        type: 3, // STRING type
        required: false,
      },
    ],
  },
];

// Function to register commands
async function registerCommands() {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log("✅ Slash commands were registered successfully!");
  } catch (error) {
    console.error("❌ Error registering slash commands:", error);
  }
}

module.exports = registerCommands; // Export the registerCommands function
