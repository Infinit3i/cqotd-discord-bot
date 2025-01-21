const { ChannelType } = require("discord.js");

async function scheduleLeaderboardPing(client, times) {
  setInterval(async () => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    if (times.includes(currentTime)) {
      const channelId = process.env.LEADERBOARD_CHANNEL_ID; // Define the channel ID in your .env file
      const channel = client.channels.cache.get(channelId);

      if (channel && channel.type === ChannelType.GuildText) {
        try {
          await channel.send("📊 **Stay up to date! Check out the `/leaderboard` to see who's leading the charge!**");
          console.log(`Leaderboard ping sent at ${currentTime}`);
        } catch (error) {
          console.error("❌ Error sending leaderboard ping:", error.message);
        }
      } else {
        console.error("❌ Leaderboard channel not found or is not a text channel.");
      }
    }
  }, 60 * 1000); // Check every minute
}

module.exports = { scheduleLeaderboardPing };
