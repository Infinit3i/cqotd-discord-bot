const User = require("../../models/User");

/**
 * Handles the /leaderboard command interaction.
 * @param {Client} client - The Discord client instance.
 * @param {Interaction} interaction - The interaction object.
 */
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
    // Fetch all guild members from Discord
    const members = await interaction.guild.members.fetch();

    // Fetch all users in the current guild from the database
    const users = await User.find({ guildId: interaction.guild.id });

    // Create a map of user scores from the database
    const userScores = new Map(users.map((user) => [user.userId, user.score || 0]));

    // Generate a complete list of users with scores (default to 0 for missing entries)
    const fullLeaderboard = members.map((member) => ({
      userId: member.id,
      username: member.user.username,
      score: userScores.get(member.id) || 0,
    }));

    // Sort by score in descending order
    fullLeaderboard.sort((a, b) => b.score - a.score);

    // Limit to top 20 users
    const topLeaderboard = fullLeaderboard.slice(0, 20);

    // Define emojis for ranks
    const rankEmojis = [
      "🥇", // 1st place
      "🥈", // 2nd place
      "🥉", // 3rd place
      "🥷", // 4th place
      "🥷", // 5th place
      ...Array(15).fill("🤖"), // 6th to 20th place
    ];

    // Format the leaderboard
    const leaderboard = topLeaderboard
      .map((entry, index) => {
        const emoji = rankEmojis[index] || ""; // Assign emoji for the rank, default to empty string
        return `${index + 1}. ${emoji} <@${entry.userId}> - **${entry.score}**`;
      })
      .join("\n");

    // Reply with the leaderboard
    interaction.editReply(`🏆 **Top 20 Leaderboard** 🏆\n\n${leaderboard}`);
  } catch (error) {
    console.error("Error retrieving leaderboard:", error);
    interaction.editReply("❌ There was an error retrieving the leaderboard. Please try again later.");
  }
}

module.exports = { handleLeaderboard };
