const { Client, Interaction, ApplicationCommandOptionType } = require("discord.js");
const User = require("../../models/User");

module.exports = {
  /**
   * @param {Client} client
   * @param {Interaction} interaction
   **/
  callback: async (client, interaction) => {
    if (!interaction.inGuild()) {
      interaction.reply({
        content: "You can only use this command inside a server.",
        ephemeral: true,
      });
      return;
    }

    const targetUserId = interaction.options.get("user")?.value || interaction.member.id;
    const guildId = interaction.guild.id;

    console.log(`Querying score for User ID: ${targetUserId}, Guild ID: ${guildId}`);

    await interaction.deferReply();

    try {
      // Fetch the user's score from the database
      const user = await User.findOne({ userId: targetUserId, guildId });

      if (!user) {
        // If user doesn't exist, default score to 0
        console.log(`User not found in database: ${targetUserId}`);
        interaction.editReply(
          targetUserId === interaction.member.id
            ? `Your current score is **0** 🏆`
            : `<@${targetUserId}>'s current score is **0** 🏆`
        );
        return;
      }

      // Reply with the user's current score
      console.log(`Current score for User ID: ${targetUserId} is ${user.score}`);
      interaction.editReply(
        targetUserId === interaction.member.id
          ? `Your current score is **${user.score}** 🏆`
          : `<@${targetUserId}>'s current score is **${user.score}** 🏆`
      );
    } catch (error) {
      console.error("Error retrieving score:", error);
      interaction.editReply("❌ There was an error retrieving your score. Please try again later.");
    }
  },

  name: "score",
  description: "Displays your current score.",
  options: [
    {
      name: "user",
      description: "The user whose score you want to check.",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],
};
