const fs = require("fs");
const path = require("path");
const User = require("../models/User");

// Load all question handlers from the questions directory
const questionHandlers = {};
const questionFiles = fs
  .readdirSync(path.join(__dirname, "../questions"))
  .filter((file) => file.endsWith(".js"));

for (const file of questionFiles) {
  const handler = require(`../questions/${file}`);
  const handlerName = path.basename(file, ".js");
  questionHandlers[handlerName] = handler;
}


async function handleQuestion(client, interaction) {
  try {
    const category = interaction.options.getString("category");
    console.log(`Category received: ${category}`);

    if (!category) {
      // Generate a random question
      await generateNewQuestion(client, interaction.channelId);

      // Check and respond with the generated question
      if (client.currentRegularQuestion) {
        await interaction.reply({
          content: `📝 **Category:** ${client.currentRegularQuestion.category}\n**Blanks:** ${client.currentRegularQuestion.blank}\n${client.currentRegularQuestion.question}`,
          ephemeral: false,
        });
      } else {
        await interaction.reply({
          content: "❌ Failed to generate a new question. Please try again.",
          ephemeral: true,
        });
      }
    } else {
      // Handle specific category request
      const normalizedCategory = category.toLowerCase();
      const handler = Object.values(questionHandlers).find(
        (handler) =>
          handler.category &&
          handler.category.toLowerCase() === normalizedCategory
      );

      if (handler) {
        const question = await handler.fetchQuestion();
        console.log(
          `Question fetched for category ${category}: ${question.question}`
        );

        if (!question || !question.question || !question.answer) {
          console.error("Invalid question format:", question);
          await interaction.reply({
            content: `❌ Failed to generate a question for category '${category}'. Please try again.`,
            ephemeral: true,
          });
          return;
        }

        client.currentRegularQuestion = {
          ...question,
          channelId: interaction.channelId,
        };
        await interaction.reply({
          content: `📝 **Category:** ${category}\n**Question:** ${question.question}`,
          ephemeral: false,
        });
      } else {
        console.log(`Unsupported category: ${category}`);
        await interaction.reply({
          content: `❌ Category '${category}' is not supported yet.`,
          ephemeral: true,
        });
      }
    }
  } catch (error) {
    console.error("Error handling question command:", error);
    await interaction.reply({
      content:
        "❌ There was an error processing your request. Please try again later.",
      ephemeral: true,
    });
  }
}

async function validateAnswer(client, answer, userId, guildId, msg) {
  // Check if there is an active question (regular or special)
  const currentQuestion = client.currentSpecialQuestion || client.currentRegularQuestion;
  if (!currentQuestion) {
    await msg.reply("❌ There is no active question right now.");
    return { isCorrect: false, user: null };
  }

  const userAnswer = answer.trim().toLowerCase();
  const correctAnswers = Array.isArray(currentQuestion.answer)
    ? currentQuestion.answer.map((ans) => ans.toLowerCase())
    : [currentQuestion.answer.toLowerCase()];

  console.log(`User response: ${userAnswer}`);
  console.log(`Possible correct answers: ${correctAnswers}`);

  const isCorrect = correctAnswers.includes(userAnswer);

  let user = null;
  if (isCorrect) {
    const multiplier = currentQuestion.multiplier || 1;
    const points = 3 * multiplier;

    // Award points to the user
    user = await User.findOneAndUpdate(
      { userId, guildId },
      { $inc: { score: points } },
      { upsert: true, new: true }
    );
    console.log(`User ${userId} score updated to ${user.score}`);

    // Reply with correct answer notification and updated score
    await msg.reply(
      `✅ **Correct!**\n\n🎉 **Your score is now ${user.score}.**`
    );

    // Generate and reply with the next question
    await generateNewQuestion(client, currentQuestion.channelId);
    const nextQuestion = client.currentRegularQuestion;

    if (nextQuestion) {
      await msg.reply(
        `🔔 **New Question** 🔔\n**Category:** ${nextQuestion.category}\n**Blanks:** ${nextQuestion.blank || "N/A"}\n**Question:** ${nextQuestion.question}`
      );
    } else {
      console.error("Failed to generate a new question after correct answer.");
    }
  }

  return { isCorrect, user, correctAnswer: currentQuestion.answer };
}

async function generateNewQuestion(client, channelId, multiplier = 1) {
  const categories = Object.keys(questionHandlers);

  if (categories.length === 0) {
    console.error("No question categories available.");
    return;
  }

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  try {
    const question = await questionHandlers[randomCategory].fetchQuestion();
    console.log(`Fetched question from category ${randomCategory}:`, question);

    if (!question || !question.question || !question.answer || !question.hint) {
      console.error("Invalid question format:", question);
      return;
    }

    // Assign to regular or special depending on multiplier
    if (multiplier > 1) {
      client.currentSpecialQuestion = { ...question, channelId, multiplier };
      console.log(
        `New special question generated: ${client.currentSpecialQuestion.question}`
      );
    } else {
      client.currentRegularQuestion = { ...question, channelId, multiplier };
      console.log(
        `New regular question generated: ${client.currentRegularQuestion.question}`
      );
    }
  } catch (error) {
    console.error(
      `Error generating question for category ${randomCategory}:`,
      error
    );
  }
}


function scheduleSpecialQuestions(client, specialTimes) {
  setInterval(() => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    if (specialTimes.includes(currentTime)) {
      const channelId = process.env.CQOTD_ID;
      const channel = client.channels.cache.get(channelId);

      if (channel) {
        if (currentTime.endsWith("30")) {
          // Announce the multiplier question 15 minutes in advance
          channel.send(
            "⏰ **15-Minute Warning!** The next question will be worth **5x points**!"
          );
        } else {
          // Generate and post the multiplier question
          generateNewQuestion(client, channelId, 5);
          if (client.currentSpecialQuestion) {
            // Notify the users in the channel about the special question
            channel.send(
              `🔥 **Special Question Time!** 🔥\n\n**Category:** ${client.currentSpecialQuestion.category}\n**Question:** ${client.currentSpecialQuestion.question}\n\n🎯 **Answer correctly to earn 5x points!**`
            );
          }
        }
      }
    }
  }, 60 * 1000); // Check every minute
}

module.exports = {
  handleQuestion,
  validateAnswer,
  generateNewQuestion,
  scheduleSpecialQuestions,
};
