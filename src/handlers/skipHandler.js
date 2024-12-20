const { generateNewQuestion } = require("./questionHandler");

async function handleSkip(client, interaction) {
  try {
    // Ensure there is a current question to skip
    if (!client.currentQuestion) {
      await interaction.reply({
        content: "❌ No question is currently active to skip. Try requesting a question first.",
        ephemeral: true,
      });
      return;
    }

    const previousQuestion = client.currentQuestion;

    console.log(`Skipping question: ${previousQuestion.question}`);
    console.log(`Previous answer: ${previousQuestion.answer}`);

    // Generate a new question
    await generateNewQuestion(client, interaction.channelId);

    // Ensure a new question was generated
    if (client.currentQuestion) {
      await interaction.reply({
        content: `⏭️ **Skipped the Current Question!**\n\n🔙 **Previous Answer:** ${previousQuestion.answer}\n\n🔔 **New Question:**\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}`,
        ephemeral: true,
      });

      console.log(`New question generated: ${client.currentQuestion.question}`);
    } else {
      await interaction.reply({
        content: "❌ Failed to generate a new question. Please try again.",
        ephemeral: true,
      });
    }
  } catch (error) {
    console.error("Error skipping question:", error);
    await interaction.reply({
      content: "❌ There was an error skipping the question. Please try again later.",
      ephemeral: true,
    });
  }
}

module.exports = { handleSkip };
