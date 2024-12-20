const videoCategories = [
  {
    category: "blue",
    discordChannelId: process.env.DISCORD_CHANNEL_BLUE,
    youtubeChannelIds: [
      "UCgTNupxATBfWmfehv21ym-g", // 13Cubed
      "UCOa7rYj90JxKD7bDgv06SHQ", // TrustedSecTV
      "UCwR-9FwpVDz0qeMQl4d9hIQ", // BlackHillsInformationSecurity
    ],
  },
  {
    category: "red",
    discordChannelId: process.env.DISCORD_CHANNEL_RED,
    youtubeChannelIds: [
      "UCVCTAfYT5ODQI_6Sb6e8JdA", // LowLevelTV
      "UCq21WgV9a2T3Erxy45qAOpA", // IppSec
      "UClcE-kVhqyiHCcjYwcpfj9w", // _JohnHammond
    ],
  },
  {
    category: "it",
    discordChannelId: process.env.DISCORD_CHANNEL_IT,
    youtubeChannelIds: [
      "UCR1D15p_vdP3HkrH8wgjQRw", // NetworkChuck
      "UC2aU4hUmoA2-qx3PppE3LzQ", // stuffy24
    ],
  },
];

// Check for new videos periodically
setInterval(async () => {
  for (const categoryConfig of videoCategories) {
    if (categoryConfig.youtubeChannelIds.length) {
      await sendNewVideos(
        client,
        categoryConfig.category,
        categoryConfig.youtubeChannelIds
      );
    } else {
      console.log(`No YouTube channels configured for category '${categoryConfig.category}'.`);
    }
  }
}, 10 * 60 * 1000); // Run every 10 minutes
