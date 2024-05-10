require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hint',
        description: 'Gives a hint for the current question.'
    },
    {
        name: 'blank',
        description: 'Shows the spaces for the answer.'
    },
    {
        name: 'question',
        description: 'Shows the current question again.'
    },
    {
        name: 'score',
        description: 'Shows your score.'
    },
    {
        name: 'leaderboard',
        description: 'Shows the leaderboard.'
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
