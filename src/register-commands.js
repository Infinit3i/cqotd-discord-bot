require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: "mitre",
    description: "Fetch a random MITRE T-Code question",
  },
  {
    name: "score",
    description: "See someone's score.",
    options: [
      {
        name: "user",
        description: "The user whose score you want to check.",
        type: 6, // USER type
      },
    ],
  },
  {
    name: "hint",
    description: "Get a hint for the current question.",
  },
  {
    name: "blank",
    description: "Get a blank version of the question.",
  },
  {
    name: "question",
    description: "Get the current question.",
  },
];


const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Slash commands were registered successfully!')
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();
