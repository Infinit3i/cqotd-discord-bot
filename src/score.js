const { 
  Client, 
  Interaction, 
  ApplicationCommandOptionType 
} = require("discord.js");
const User = require("../models/User");

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   **/
  callback: async (client, interaction) => {
    if (!interaction.inGuild()) {
      interaction.reply({
        content: "You can only run this command inside of a server.",
        ephemeral: true,
      });
      return;
    }

    const targetUserId =
      interaction.options.get("user")?.value || interaction.member.id;

    await interaction.deferReply();

    const user = await User.findOne({
      userId: targetUserId,
      guildId: interaction.guild.id,
    });

    if (!user) {
      interaction.editReply(`<@${targetUserId}> doesn't have a profile yet.`);
      return;
    }

    interaction.editReply(
      targetUserId === interaction.member.id
        ? `Your score is **${user.score}**`
        : `<@${targetUserId}>'s score is **${user.score}**`
    );
  },

  name: "score",
  description: "See someone's score.",
  options: [
    {
      name: "user",
      description: "The user whose score you want to check.",
      type: ApplicationCommandOptionType.User,
    },
  ],
};