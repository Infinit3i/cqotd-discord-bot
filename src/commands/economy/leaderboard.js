const { Client, Interaction } = require("discord.js");
const User = require("../../models/User");

module.exports = {
  /**
   * Handles the leaderboard command.
   * @param {Client} client
   * @param {Interaction} interaction
   */
  callback: async (client, interaction) => {
    if (!interaction.inGuild()) {
      interaction.reply({
        content: "You can only run this command inside of a server.",
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply(); // Acknowledge interaction immediately

    try {
      const guild = interaction.guild;

      // Fetch all members of the guild
      const members = await guild.members.fetch();

      // Fetch all users with scores in the database
      const usersInDatabase = await User.find({ guildId: guild.id });

      // Create a map of user IDs to scores
      const userScores = new Map();
      usersInDatabase.forEach((user) => {
        userScores.set(user.userId, user.score);
      });

      // Build the leaderboard message
      let leaderboard = "🏆 **Leaderboard** 🏆\n\n";
      members.forEach((member) => {
        const score = userScores.get(member.user.id) || 0; // Default to 0 if not in the database
        leaderboard += `**${member.displayName}** - **${score}** points\n`;
      });

      // Limit the message length to prevent hitting Discord's character limit
      if (leaderboard.length > 2000) {
        leaderboard = leaderboard.substring(0, 1990) + "\n...and more!";
      }

      interaction.editReply(leaderboard); // Send the leaderboard
    } catch (error) {
      console.error(error); // Log the error
      interaction.editReply("An error occurred while fetching the leaderboard. Please try again later.");
    }
  },

  name: "leaderboard",
  description: "View the scores of all users, even those with 0 points.",
  options: [],
};
