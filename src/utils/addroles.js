require("dotenv").config();
const User = require("../models/User");

async function assignRoles(client, guildId) {
  try {
    const guild = client.guilds.cache.get(guildId);
    if (!guild) throw new Error(`Guild with ID ${guildId} not found.`);

    const roleIds = {
        top20: process.env.TOP_20,
        top5: process.env.TOP_5,
        top1: process.env.TOP_1,
      };

    // Fetch top 20 users based on score
    const topUsers = await User.find({ guildId }).sort({ score: -1 }).limit(20);
    const members = await guild.members.fetch();
    const topUserIds = topUsers.map(user => user.userId);

    for (let i = 0; i < topUsers.length; i++) {
      const userId = topUsers[i].userId;
      const member = members.get(userId);

      if (member) {
        // Assign roles based on position
        if (i === 0) await member.roles.add(roleIds.top1);
        else if (i < 5) await member.roles.add(roleIds.top5);
        if (i < 20) await member.roles.add(roleIds.top20);
      }
    }

    // Remove roles from users not in the top 20
    for (const member of members.values()) {
      if (!topUserIds.includes(member.id)) {
        if (member.roles.cache.has(roleIds.top1)) await member.roles.remove(roleIds.top1);
        if (member.roles.cache.has(roleIds.top5)) await member.roles.remove(roleIds.top5);
        if (member.roles.cache.has(roleIds.top20)) await member.roles.remove(roleIds.top20);
      }
    }
  } catch (error) {
    console.error("Error assigning roles:", error);
  }
}

module.exports = { assignRoles };