const { Client, Interaction, ApplicationcommandOptionType } = require('discord.js');
const User = require('../models/User')

module.exports = {
        /**
         * 
         * @param {Client} client 
         * @param {Interaction} interaciton
         **/
        callback: async (client, interaction) => {
            if (!interaction.inGuild()) {
                interaction.reply({
                    content: 'You can only run this command inside of a server.',
                    ephermeral: true,
                });
                return;
            }
            const targetUserId = interaction.options.get('user')?.value || interaction.member.id;

            await interaction.deferReply();
        },

    name: 'score',
    description: "See someones score.",
    options: [
        {
            name: 'user',
            description: 'Someones score.',
            type: ApplicationcommandOptionType.User,
        }
    ]
}