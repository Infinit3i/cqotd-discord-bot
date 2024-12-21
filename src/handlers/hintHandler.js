async function handleHint(client, interaction) {
  try {
    // Ensure the current question exists
    const currentQuestion = client.currentSpecialQuestion || client.currentRegularQuestion;
    if (!currentQuestion) {
      await interaction.reply({
        content: "❌ No question is currently active. Try requesting a question first.",
        ephemeral: true,
      });
      return;
    }

    // Fetch the hint from the current question
    const hint = currentQuestion.hint;

    if (!hint || hint.trim() === "") {
      await interaction.reply({
        content: "❌ No hint is available for this question.",
        ephemeral: true,
      });
      return;
    }

    // Reply with the hint
    await interaction.reply({
      content: `💡 **Hint for the Current Question:**\n${hint}`,
      ephemeral: true,
    });

    console.log(`Hint provided for question: ${currentQuestion.question}`);
  } catch (error) {
    console.error("Error fetching hint:", error);
    await interaction.reply({
      content: "❌ There was an error retrieving the hint. Please try again later.",
      ephemeral: true,
    });
  }
}

module.exports = { handleHint };
