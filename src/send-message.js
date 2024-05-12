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

const roles = [
    {
        id: '1214649494700818442', //OCO
        label: 'OCO',
        emoji: '🥷'
    },
    {
        id: '1214649312189874186', //DCO
        label: 'DCO',
        emoji: '🛠️'
    },
    {
        id: '1078464137065136249', //IT
        label: 'IT',
        emoji: '👾'
    },
    {
        id: '1071284956426407997', //Programmer
        label: 'CODER',
        emoji: '🧑‍💻'
    },
    {
        id: '1238652920510025778', //Hiker
        label: 'Hiker',
        emoji: '🥾'
    },
    {
        id: '1238652791711596565', //Fighter
        label: 'Fighter',
        emoji: '🥊'
    }
]
    

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1148717658905264258');
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
