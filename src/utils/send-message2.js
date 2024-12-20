require('dotenv').config();
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
// OCO, DCO, IT, Fighter, hiker in other

const roles = [
    {
        id: '1208425301215019018',
        label: 'Cyber Nerd',
        emoji: '🥷',
    },
    {
        id: '1071284956426407997',
        label: 'Programmer',
        emoji: '👨‍💻',
    },
    {
        id: '1244664480328192102',
        label: 'CTF',
        emoji: '🏴',
    }
]
    

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('805844406920806443');
        if (!channel) return;

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setEmoji(role.emoji).setLabel(role.label).setStyle(ButtonStyle.Primary)
            );
        });

        await channel.send({
            content: 'Claim or remove a role below.',
            components: [row],
        });
        process.exit();
    } catch (error) {
        console.log(error);
    }
})

client.login(process.env.TOKEN)
