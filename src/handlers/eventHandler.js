const { generateNewQuestion, validateAnswer } = require("./questionHandler");

function eventHandler(client) {
  client.on("messageCreate", async (msg) => {
    if (msg.author.bot || msg.channel.id !== process.env.CQOTD_ID) return;

    const content = msg.content.toLowerCase();
    const showQuestionCommands = ["cqotd", "question", "question of the day", "?"];

    // Generate or display question
    if (showQuestionCommands.includes(content)) {
      if (!client.currentQuestion) {
        await generateNewQuestion(client, msg.channel.id);
      }
      if (client.currentQuestion) {
        msg.reply(
          `🔔 **Question** 🔔\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}`
        );
      } else {
        msg.reply("❌ Failed to generate a new question. Please try again.");
      }
      return;
    }

    // Validate answer
    console.log(`User response: ${msg.content}`);
    const { isCorrect, user, correctAnswer } = await validateAnswer(client, msg.content, msg.author.id, msg.guild.id);
    if (isCorrect) {
      msg.reply(`✅ Correct answer! Your score is now **${user.score}**.`);

      // Check if the score is a multiple of 5
      if (user.score % 5 === 0) {
        const celebrationGifs = [
          "https://tenor.com/view/lilpotate-lil-potate-lilpotates-lil-potates-potate-gif-4155638923629851536",
          "https://tenor.com/view/baby-yoda-babyyoda-gif-906250813013085097",
          "https://tenor.com/view/awesome-gif-12345678",
        ];

        // Pick a random celebration gif
        const randomGif = celebrationGifs[Math.floor(Math.random() * celebrationGifs.length)];

        msg.channel.send(`${randomGif}`);
      }

      await generateNewQuestion(client, msg.channel.id);
      if (client.currentQuestion) {
        msg.reply(
          `🔔 **New Question** 🔔\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}`
        );
      }
    } else {
      msg.reply("❌ Wrong answer! Keep trying.");
    }
  });
}

module.exports = { eventHandler };
