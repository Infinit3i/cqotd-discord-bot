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
    user = await User.findOneAndUpdate(
      { userId, guildId },
      { $inc: { score: 1 } },
      { upsert: true, new: true }
    );
    console.log(`User ${userId} score updated to ${user.score}`);
  }

  return { isCorrect, user, correctAnswer: client.currentQuestion.answer };
}

async function generateNewQuestion(client, channelId) {
  const categories = Object.keys(questionHandlers);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const question = await questionHandlers[randomCategory].fetchQuestion();
  client.currentQuestion = { ...question, channelId };
  console.log(`New question generated: ${client.currentQuestion.question}`);
  console.log(`Answer: ${client.currentQuestion.answer}`);
}

module.exports = { handleQuestion, validateAnswer, generateNewQuestion };