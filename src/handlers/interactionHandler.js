const { handleQuestion } = require("./questionHandler");
const { handleScore } = require("../commands/economy/score");
const { handleLeaderboard } = require("../commands/economy/leaderboard");
const { handleHint } = require("./hintHandler");
const { handleBlank } = require("./blankHandler");
const { handleSkip } = require("./skipHandler");

async function interactionHandler(client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "question") {
      await handleQuestion(client, interaction);
    } else if (interaction.commandName === "hint") {
      await handleHint(client, interaction);
    } else if (interaction.commandName === "blank") {
      await handleBlank(client, interaction);
    } else if (interaction.commandName === "score") {
      await handleScore(client, interaction);
    } else if (interaction.commandName === "leaderboard") {
      await handleLeaderboard(client, interaction);
    } else if (interaction.commandName === "skip") {
      await handleSkip(client, interaction);
    }
  });
}

module.exports = { interactionHandler };
