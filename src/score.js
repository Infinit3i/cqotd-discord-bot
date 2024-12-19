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

    // Retrieve the target user (default to the command user if none is provided)
    const targetUserId =
      interaction.options.get("user")?.value || interaction.member.id;

    await interaction.deferReply();

    // Find or create a user tied to their Discord ID and guild ID
    const user = await User.findOneAndUpdate(
      { userId: targetUserId, guildId: interaction.guild.id },
      { $setOnInsert: { userId: targetUserId, guildId: interaction.guild.id, score: 0 } },
      { upsert: true, new: true }
    );

    // Respond with the user's score
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
