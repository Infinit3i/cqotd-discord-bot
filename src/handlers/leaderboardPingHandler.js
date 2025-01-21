async function scheduleLeaderboardPing(client, times) {
    setInterval(async () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, "0")}${String(
        now.getMinutes()
      ).padStart(2, "0")}`;
  
      if (times.includes(currentTime)) {
        const channelId = process.env.CQOTD_ID; // Define the channel ID in your .env file
        const channel = client.channels.cache.get(channelId);
  
        if (channel) {
          try {
            // Find the `/leaderboard` command
            const leaderboardCommand = client.application.commands.cache.find(
              (cmd) => cmd.name === "leaderboard"
            );
  
            if (!leaderboardCommand) {
              console.error("❌ Leaderboard command not found.");
              return;
            }
  
            // Simulate the `/leaderboard` command in the specified channel
            await client.application.commands.execute(
              leaderboardCommand,
              { channel },
              channel.guild
            );
            console.log(`Leaderboard command executed at ${currentTime}`);
          } catch (error) {
            console.error("❌ Error executing leaderboard command:", error.message);
          }
        } else {
          console.error("❌ Leaderboard channel not found.");
        }
      }
    }, 60 * 1000); // Check every minute
  }
  
  module.exports = { scheduleLeaderboardPing };
  