async function handleBlank(client, interaction) {
    try {
      // Ensure the current question exists
      if (!client.currentQuestion) {
        await interaction.reply({
          content: "❌ No question is currently active. Try requesting a question first.",
          ephemeral: true,
        });
        return;
      }
  
      // Fetch the blank from the current question
      const blank = client.currentQuestion.blank;
  
      if (!blank || blank.trim() === "") {
        await interaction.reply({
          content: "❌ No blank version is available for this question.",
          ephemeral: true,
        });
        return;
      }
  
      // Reply with the blank version
      await interaction.reply({
        content: `📝 **Blank Version of the Current Question:**\n${blank}`,
        ephemeral: true,
      });
  
      console.log(`Blank provided for question: ${client.currentQuestion.question}`);
    } catch (error) {
      console.error("Error fetching blank:", error);
      await interaction.reply({
        content: "❌ There was an error retrieving the blank version. Please try again later.",
        ephemeral: true,
      });
    }
  }
  
  module.exports = { handleBlank };
  