require("dotenv").config();
const User = require("../models/User");

let rolesInitialized = false; // Tracks if roles have been initialized

async function assignRoles(client, guildId, userId = null) {
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

    if (!rolesInitialized) {
      console.log("Initializing leaderboard roles...");
      // Remove leaderboard roles from all members (first-time initialization)
      for (const member of members.values()) {
        await removeRoles(member, roleIds);
      }
      rolesInitialized = true;
    }

    // Fetch top 20 users from the database
    const topUsers = await User.find({ guildId }).sort({ score: -1 }).limit(20);
    const topUserIds = topUsers.map((user) => user.userId);

    // Track current role holders to handle dynamic updates
    const currentRoleHolders = {
      topOne: null,
      topFive: [],
      topTwenty: [],
    };

    for (const member of members.values()) {
      if (member.roles.cache.has(roleIds.topOne)) currentRoleHolders.topOne = member.id;
      if (member.roles.cache.has(roleIds.topFive)) currentRoleHolders.topFive.push(member.id);
      if (member.roles.cache.has(roleIds.topTwenty)) currentRoleHolders.topTwenty.push(member.id);
    }

    // Handle role updates dynamically for a specific user
    if (userId) {
      const currentUserRank = topUserIds.indexOf(userId);
      if (currentUserRank === -1) {
        console.warn(`User ${userId} is not in the top 20.`);
        return;
      }

      const currentUser = members.get(userId);
      if (!currentUser) {
        console.warn(`Member with ID ${userId} not found.`);
        return;
      }

      const previousRank = getPreviousRank(currentUser, roleIds);

      if (previousRank !== currentUserRank) {
        console.log(
          `User ${currentUser.user.tag} moved from rank ${previousRank + 1} to ${
            currentUserRank + 1
          }.`
        );

        // Handle the user they surpassed
        const surpassedRank = currentUserRank - 1;
        if (surpassedRank >= 0) {
          const surpassedUserId = topUserIds[surpassedRank];
          const surpassedUser = members.get(surpassedUserId);

          if (surpassedUser) {
            console.log(
              `User ${userId} surpassed user ${surpassedUser.user.tag}.`
            );

            // Update the surpassed user's roles
            await updateRolesForRank(
              surpassedUser,
              surpassedRank + 1,
              roleIds,
              currentRoleHolders
            ); // Adjust rank since they were pushed down
          }
        }

        // Update roles for the current user
        await updateRolesForRank(
          currentUser,
          currentUserRank,
          roleIds,
          currentRoleHolders
        );
      }
      return;
    }

    console.log("Assigning roles based on the leaderboard...");

    // Assign roles to the top 20 users
    for (let i = 0; i < topUsers.length; i++) {
      const userId = topUsers[i].userId;
      const member = members.get(userId);

      if (!member) {
        console.warn(`Member with ID ${userId} not found in the guild.`);
        continue;
      }

      await updateRolesForRank(member, i, roleIds, currentRoleHolders);
    }

    console.log("✅ Leaderboard roles updated successfully.");
  } catch (error) {
    console.error("❌ Error assigning roles dynamically:", error);
  }
}

// Helper function to remove roles
async function removeRoles(member, roleIds) {
  try {
    if (member.roles.cache.has(roleIds.topOne)) {
      console.log(`Removing TOP ONE role from ${member.user.tag}`);
      await member.roles.remove(roleIds.topOne);
    }
    if (member.roles.cache.has(roleIds.topFive)) {
      console.log(`Removing TOP FIVE role from ${member.user.tag}`);
      await member.roles.remove(roleIds.topFive);
    }
    if (member.roles.cache.has(roleIds.topTwenty)) {
      console.log(`Removing TOP TWENTY role from ${member.user.tag}`);
      await member.roles.remove(roleIds.topTwenty);
    }
  } catch (err) {
    console.error(`Failed to remove roles for ${member.user.tag}: ${err}`);
  }
}

// Helper function to update roles dynamically based on rank
async function updateRolesForRank(member, rank, roleIds, currentRoleHolders) {
  try {
    if (rank === 0) {
      if (!member.roles.cache.has(roleIds.topOne) && currentRoleHolders.topOne !== member.id) {
        console.log(`Assigning TOP ONE role to ${member.user.tag}`);
        await member.roles.add(roleIds.topOne);
        currentRoleHolders.topOne = member.id;
      }
    } else if (rank !== 0 && member.roles.cache.has(roleIds.topOne)) {
      console.log(`Removing TOP ONE role from ${member.user.tag}`);
      await member.roles.remove(roleIds.topOne);
    }

    if (rank < 5) {
      if (
        !member.roles.cache.has(roleIds.topFive) &&
        !currentRoleHolders.topFive.includes(member.id)
      ) {
        console.log(`Assigning TOP FIVE role to ${member.user.tag}`);
        await member.roles.add(roleIds.topFive);
        currentRoleHolders.topFive.push(member.id);
      }
    } else if (rank >= 5 && member.roles.cache.has(roleIds.topFive)) {
      console.log(`Removing TOP FIVE role from ${member.user.tag}`);
      await member.roles.remove(roleIds.topFive);
    }

    if (rank < 20) {
      if (
        !member.roles.cache.has(roleIds.topTwenty) &&
        !currentRoleHolders.topTwenty.includes(member.id)
      ) {
        console.log(`Assigning TOP TWENTY role to ${member.user.tag}`);
        await member.roles.add(roleIds.topTwenty);
        currentRoleHolders.topTwenty.push(member.id);
      }
    } else if (rank >= 20 && member.roles.cache.has(roleIds.topTwenty)) {
      console.log(`Removing TOP TWENTY role from ${member.user.tag}`);
      await member.roles.remove(roleIds.topTwenty);
    }
  } catch (err) {
    console.error(`Failed to update roles for ${member.user.tag}: ${err}`);
  }
}

// Helper function to determine the previous rank
function getPreviousRank(member, roleIds) {
  if (member.roles.cache.has(roleIds.topOne)) return 0;
  if (member.roles.cache.has(roleIds.topFive)) return 1;
  if (member.roles.cache.has(roleIds.topTwenty)) return 2;
  return -1;
}

module.exports = { assignRoles };
