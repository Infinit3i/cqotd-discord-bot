const fs = require("fs");
const path = require("path");
const User = require("../models/User");

// Load all question handlers from the questions directory
const questionHandlers = {};
const questionFiles = fs.readdirSync(path.join(__dirname, "../questions")).filter(file => file.endsWith(".js"));

for (const file of questionFiles) {
  const handler = require(`../questions/${file}`);
  const handlerName = path.basename(file, ".js");
  questionHandlers[handlerName] = handler;
}

console.log("Available categories:", Object.values(questionHandlers).map(handler => handler.category));

async function handleQuestion(client, interaction) {
  try {
    const category = interaction.options.getString("category");
    console.log(`Category received: ${category}`);

    if (!category) {
      await generateNewQuestion(client, interaction.channelId);
      if (client.currentQuestion) {
        await interaction.reply({
          content: `Random question: ${client.currentQuestion.question}`,
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "❌ Failed to generate a new question. Please try again.",
          ephemeral: true,
        });
      }
    } else {
      // Handle specific category
      const normalizedCategory = category.toLowerCase();
      const handler = Object.values(questionHandlers).find(handler => handler.category && handler.category.toLowerCase() === normalizedCategory);
      if (handler) {
        const question = await handler.fetchQuestion();
        console.log(`Question fetched for category ${category}: ${question.question}`);
        console.log(`Answer: ${question.answer}`);
        client.currentQuestion = { ...question, channelId: interaction.channelId };
        await interaction.reply({
          content: `Question from ${category}: ${question.question}`,
          ephemeral: true,
        });
      } else {
        console.log(`Unsupported category: ${category}`);
        await interaction.reply({
          content: `Category ${category} is not supported yet.`,
          ephemeral: true,
        });
      }
    }
  } catch (error) {
    console.error("Error handling question command:", error);
    await interaction.reply({
      content: "There was an error processing your request. Please try again later.",
      ephemeral: true,
    });
  }
}

async function validateAnswer(client, answer, userId, guildId) {
  if (!client.currentQuestion) return { isCorrect: false, user: null };

  const userAnswer = answer.trim().toLowerCase();
  const correctAnswers = Array.isArray(client.currentQuestion.answer)
    ? client.currentQuestion.answer.map((ans) => ans.toLowerCase())
    : [client.currentQuestion.answer.toLowerCase()];

  console.log(`User response: ${userAnswer}`);
  console.log(`Possible correct answers: ${correctAnswers}`);

  const isCorrect = correctAnswers.includes(userAnswer);

  let user = null;
  if (isCorrect) {
    const multiplier = client.currentQuestion.multiplier || 1;
    const points = 3 * multiplier;

    user = await User.findOneAndUpdate(
      { userId, guildId },
      { $inc: { score: points } },
      { upsert: true, new: true }
    );
    console.log(`User ${userId} score updated to ${user.score}`);
  }

  return { isCorrect, user, correctAnswer: client.currentQuestion.answer };
}

async function generateNewQuestion(client, channelId, multiplier = 1) {
  const categories = Object.keys(questionHandlers);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const question = await questionHandlers[randomCategory].fetchQuestion();
  client.currentQuestion = { ...question, channelId, multiplier };
  console.log(`New question generated: ${client.currentQuestion.question}`);
  console.log(`Answer: ${client.currentQuestion.answer}`);
}

// Schedule special question times
function scheduleSpecialQuestions(client, specialTimes) {
  setInterval(() => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;

    if (specialTimes.includes(currentTime)) {
      const channelId = process.env.CQOTD_ID;
      const channel = client.channels.cache.get(channelId);

      if (channel) {
        if (currentTime.endsWith("30")) {
          // Announce the multiplier question 15 minutes in advance
          channel.send("⏰ **15-Minute Warning!** The next question will be worth **5x points**!");
        } else {
          // Generate and post the multiplier question
          generateNewQuestion(client, channelId, 5);
          if (client.currentQuestion) {
            // Notify the users in the channel about the special question
            channel.send(
              `🔥 **Special Question Time!** 🔥\n\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}\n\n🎯 **Answer correctly to earn 5x points!**`
            );
          }
        }
      }
    }
  }, 60 * 1000); // Check every minute
}


module.exports = { handleQuestion, validateAnswer, generateNewQuestion, scheduleSpecialQuestions };
