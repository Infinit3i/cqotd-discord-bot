const {
  Client,
  Interaction,
  ApplicationcommandOptionType,
} = require("discord.js");
const User = require("../models/User");

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaciton
   **/
  callback: async (client, interaction) => {
    if (!interaction.inGuild()) {
      interaction.reply({
        content: "You can only run this command inside of a server.",
        ephermeral: true,
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
  description: "See someones score.",
  options: [
    {
      name: "user",
      description: "Someones score.",
      type: ApplicationcommandOptionType.User,
    },
  ],
};
