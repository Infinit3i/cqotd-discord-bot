require("dotenv").config();
const User = require("../models/User");

async function assignRoles(client, guildId, userId) {
  try {
    const guild = client.guilds.cache.get(guildId);
    if (!guild) throw new Error(`Guild with ID ${guildId} not found.`);

    const roleIds = {
      topTwenty: process.env.TOP_TWENTY,
      topFive: process.env.TOP_FIVE,
      topOne: process.env.TOP_ONE,
    };

    console.log("Role IDs:", roleIds);

    // Ensure roles exist in the guild
    for (const [key, roleId] of Object.entries(roleIds)) {
      if (!guild.roles.cache.has(roleId)) {
        throw new Error(`Role ID for ${key} (${roleId}) not found in the guild.`);
      }
    }

    // Fetch all members in the guild
    const members = await guild.members.fetch();

    // Fetch top 20 users based on score
    const topUsers = await User.find({ guildId }).sort({ score: -1 }).limit(20);
    const topUserIds = topUsers.map((user) => user.userId);

    const userRank = topUserIds.indexOf(userId);

    // Check if the user is in the top 20
    if (userRank === -1) {
      console.log(`User ${userId} is not in the top 20. Removing roles if present.`);
      const member = members.get(userId);
      if (member) {
        if (member.roles.cache.has(roleIds.topOne)) await member.roles.remove(roleIds.topOne);
        if (member.roles.cache.has(roleIds.topFive)) await member.roles.remove(roleIds.topFive);
        if (member.roles.cache.has(roleIds.topTwenty)) await member.roles.remove(roleIds.topTwenty);
      }
      return;
    }

    const member = members.get(userId);
    if (!member) {
      console.warn(`Member with ID ${userId} not found in the guild.`);
      return;
    }

    // Update roles based on user rank
    console.log(`Updating roles for user ${member.user.tag} (Rank: ${userRank + 1}).`);

    if (userRank === 0) {
      if (!member.roles.cache.has(roleIds.topOne)) {
        await member.roles.add(roleIds.topOne).catch((err) =>
          console.error(`Failed to assign TOP ONE role: ${err}`)
        );
      }
    } else {
      if (member.roles.cache.has(roleIds.topOne)) {
        await member.roles.remove(roleIds.topOne).catch((err) =>
          console.error(`Failed to remove TOP ONE role: ${err}`)
        );
      }
    }

    if (userRank < 5) {
      if (!member.roles.cache.has(roleIds.topFive)) {
        await member.roles.add(roleIds.topFive).catch((err) =>
          console.error(`Failed to assign TOP FIVE role: ${err}`)
        );
      }
    } else {
      if (member.roles.cache.has(roleIds.topFive)) {
        await member.roles.remove(roleIds.topFive).catch((err) =>
          console.error(`Failed to remove TOP FIVE role: ${err}`)
        );
      }
    }

    if (userRank < 20) {
      if (!member.roles.cache.has(roleIds.topTwenty)) {
        await member.roles.add(roleIds.topTwenty).catch((err) =>
          console.error(`Failed to assign TOP TWENTY role: ${err}`)
        );
      }
    }
  } catch (error) {
    console.error("❌ Error assigning roles:", error);
  }
}

module.exports = { assignRoles };
