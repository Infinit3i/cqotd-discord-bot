const { handleMultipleChoiceQuestion } = require("./multipleChoiceHandler");
const { handleScore } = require("../commands/economy/score");
const { handleLeaderboard } = require("../commands/economy/leaderboard");
const { handleHint } = require("./hintHandler");
const { handleBlank } = require("./blankHandler");
const { assignRoles } = require("../utils/addroles");

async function interactionHandler(client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const guildId = interaction.guild?.id;
    const cqotdChannelId = process.env.CQOTD_ID;

    // Restrict commands to the CQOTD_ID channel
    if (interaction.channelId !== cqotdChannelId) {
      await interaction.reply({
        content: `❌ This command can only be used in the <#${cqotdChannelId}>`,
        ephemeral: true,
      });
      return;
    }

    if (interaction.commandName === "question") {
      await handleMultipleChoiceQuestion(client, interaction);
      if (guildId) await assignRoles(client, guildId);
    } else if (interaction.commandName === "hint") {
      await handleHint(client, interaction);
    } else if (interaction.commandName === "blank") {
      await handleBlank(client, interaction);
    } else if (interaction.commandName === "score") {
      await handleScore(client, interaction);
      if (guildId) await assignRoles(client, guildId);
    } else if (interaction.commandName === "leaderboard") {
      await handleLeaderboard(client, interaction);
    } else if (interaction.commandName === "skip") {
      await handleSkip(client, interaction);
      if (guildId) await assignRoles(client, guildId);
    }
  });
}

module.exports = { interactionHandler };
