const { generateNewQuestion, validateAnswer } = require("./questionHandler");

function eventHandler(client) {
  client.on("messageCreate", async (msg) => {
    if (msg.author.bot || msg.channel.id !== process.env.CQOTD_ID) return;

    const content = msg.content.toLowerCase();
    const showQuestionCommands = [
      "cqotd",
      "question",
      "question of the day",
      "?",
    ];

    // Generate or display question
    if (showQuestionCommands.includes(content)) {
      if (msg.author.bot || msg.channel.id !== process.env.CQOTD_ID) return;
      else if (!client.currentQuestion) {
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
    const { isCorrect, user, correctAnswer } = await validateAnswer(
      client,
      msg.content,
      msg.author.id,
      msg.guild.id,
      msg
    );
    if (isCorrect) {

      // Check if the score is a multiple of 5
      if (user.score % 5 === 0) {
        const celebrationGifs = [
          "https://tenor.com/view/lilpotate-lil-potate-lilpotates-lil-potates-potate-gif-4155638923629851536",
          "https://tenor.com/view/baby-yoda-babyyoda-gif-906250813013085097",
          "https://tenor.com/view/awesome-gif-12345678",
          "https://tenor.com/view/bwd-waddle-dee-kirby-celebrate-cute-gif-22246612",
          "https://tenor.com/view/happy-dancing-celebrate-excited-gif-23223956",
          "https://tenor.com/view/deadpool-dance-bye-bye-bye-deadpool-dancing-deadpool-and-wolverine-nsync-gif-574902272552011427",
          "https://tenor.com/view/kirb-kirby-gif-6194484891581978780",
          "https://tenor.com/view/dhmis-dont-hug-me-im-gif-23391946",
          "https://tenor.com/view/jax-dance-animiniz-celebrate-the-amazing-digital-circus-gif-13094019645236533904",
          "https://tenor.com/view/funny-dance-pomni-the-amazing-pomni-digital-circus-dancing-pomni-pomni-and-the-witch-eyebrows-gif-12820093209985177039",
          "https://tenor.com/view/eddie-birthday-gif-8810857366549109289",
          "https://tenor.com/view/eddie-birthday-gif-8810857366549109289",
          "https://tenor.com/view/bubble-the-amazing-digital-circus-the-amazing-digital-circus-bubble-dance-gif-10373237877753609843",
          "https://tenor.com/view/the-amazing-digital-circus-tadc-pomni-ragatha-jax-gif-15752491151097277968",
        ];

        // Pick a random celebration gif
        const randomGif =
          celebrationGifs[Math.floor(Math.random() * celebrationGifs.length)];

        msg.channel.send(`${randomGif}`);
      }

      // Generate and display the next question
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

  // Periodic reminder every 3 to 5 hours
  setInterval(() => {
    const reminderChannel = client.channels.cache.get(process.env.CQOTD_ID);
    const roleId = process.env.TOP_20;
    if (reminderChannel) {
      reminderChannel.send(
        `<@&${roleId}> Don't forget to answer the daily questions to earn more points! 🏆`
      );
    }
  }, getRandomInterval(3, 5)); // Random interval between 3 to 5 hours
}

// Helper function to get a random interval between min and max hours
function getRandomInterval(minHours, maxHours) {
  const minMilliseconds = minHours * 60 * 60 * 1000;
  const maxMilliseconds = maxHours * 60 * 60 * 1000;
  return Math.random() * (maxMilliseconds - minMilliseconds) + minMilliseconds;
}

module.exports = { eventHandler };