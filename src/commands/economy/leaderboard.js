const User = require("../../models/User");

async function handleLeaderboard(client, interaction) {
  if (!interaction.inGuild()) {
    interaction.reply({
      content: "You can only use this command inside a server.",
      ephemeral: true,
    });
    return;
  }

  console.log(`Fetching leaderboard for Guild ID: ${interaction.guild.id}`);

  await interaction.deferReply();

  try {
    // Fetch all users in the current guild, sorted by score in descending order
    const users = await User.find({ guildId: interaction.guild.id }).sort({ score: -1 });

    if (users.length === 0) {
      interaction.editReply("No scores available yet. Be the first to answer a question!");
      return;
    }

    // Format leaderboard
    const leaderboard = users
      .map((user, index) => `${index + 1}. <@${user.userId}> - **${user.score}** 🏆`)
      .join("\n");

    // Reply with the leaderboard
    interaction.editReply(`🏆 **Leaderboard** 🏆\n\n${leaderboard}`);
  } catch (error) {
    console.error("Error retrieving leaderboard:", error);
    interaction.editReply("❌ There was an error retrieving the leaderboard. Please try again later.");
  }
}

module.exports = { handleLeaderboard };
