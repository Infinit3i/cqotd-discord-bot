const { handleQuestion } = require("./questionHandler");
const { handleScore } = require("../commands/economy/score");
const { handleLeaderboard } = require("../commands/economy/leaderboard");

async function interactionHandler(client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "question") {
      await handleQuestion(client, interaction);
    } else if (interaction.commandName === "hint") {
      await interaction.reply({
        content: "Hints are coming soon! 🎉",
        ephemeral: true,
      });
    } else if (interaction.commandName === "score") {
      await handleScore(client, interaction);
    } else if (interaction.commandName === "leaderboard") {
      await handleLeaderboard(client, interaction);
    }
  });
}

module.exports = { interactionHandler };
