const { handleQuestion } = require("./questionHandler");

async function interactionHandler(client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "question") {
      await handleQuestion(client, interaction); // Pass the client variable
    } else if (interaction.commandName === "hint") {
      await interaction.reply({
        content: "Hints are coming soon! 🎉",
        ephemeral: true,
      });
    } else if (interaction.commandName === "score") {
      await interaction.reply({
        content: `Your current score is 0. 🏆`,
        ephemeral: true,
      });
    }
  });
}

module.exports = { interactionHandler };