const fs = require("fs");
const path = require("path");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const User = require("../models/User");
const { assignRoles } = require("../utils/addroles");

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

// Dynamically generate multiple-choice options
function generateMultipleChoice(questionPool, currentAnswer) {
  // Ensure `currentAnswer` is a string
  if (typeof currentAnswer !== "string") {
    console.error(
      "generateMultipleChoice: currentAnswer is not a string:",
      currentAnswer
    );
    currentAnswer = String(currentAnswer); // Convert it to a string as a fallback
  }

  // Collect all valid string answers from the question pool
  const allAnswers = questionPool
    .map((q) => {
      if (typeof q.answer !== "string") {
        console.warn("Non-string answer found in question pool:", q.answer);
        return String(q.answer); // Convert non-strings to strings
      }
      return q.answer;
    })
    .filter((ans) => ans && ans.toLowerCase() !== currentAnswer.toLowerCase());

  // Shuffle and pick four random incorrect answers
  const incorrectAnswers = allAnswers
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Combine correct and incorrect answers and shuffle them
  const choices = [...incorrectAnswers, currentAnswer].sort(
    () => 0.5 - Math.random()
  );

  return choices;
}

// Generate new question
function generateNewQuestion(client, channelId, multiplier = 1) {
  const categories = Object.keys(questionHandlers);

  if (categories.length === 0) {
    console.error("No question categories available.");
    return;
  }

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  try {
    const question = questionHandlers[randomCategory]?.fetchQuestion?.();
    if (!question) {
      console.error("Failed to fetch question.");
      return;
    }

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

// Handle multiple-choice question
async function handleMultipleChoiceQuestion(client, interaction) {
  try {
    const questionPool = [];
    for (const handler of Object.values(questionHandlers)) {
      const questions = await handler.getAllQuestions?.();
      if (questions) questionPool.push(...questions);
    }

    if (questionPool.length === 0) {
      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content: "❌ No questions available for multiple choice.",
          ephemeral: true,
        });
      }
      return;
    }

    const randomQuestion =
      questionPool[Math.floor(Math.random() * questionPool.length)];
    const choices = generateMultipleChoice(questionPool, randomQuestion.answer);

    client.currentMultipleChoiceQuestion = {
      ...randomQuestion,
      choices,
    };

    const buttons = choices.map((choice, index) =>
      new ButtonBuilder()
        .setCustomId(`choice_${index}`)
        .setLabel(choice)
        .setStyle(ButtonStyle.Primary)
    );

    const actionRow = new ActionRowBuilder().addComponents(buttons);

    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: `🔔 **Multiple-Choice Question** 🔔\n**Category:** ${randomQuestion.category}\n**Question:** ${randomQuestion.question}`,
        components: [actionRow],
      });
    }
  } catch (error) {
    console.error("Error handling multiple-choice question:", error);
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content:
          "❌ There was an error generating the question. Please try again later.",
        ephemeral: true,
      });
    }
  }
}

async function handleButtonInteraction(client, interaction) {
  if (!interaction.isButton()) return { isCorrect: false };

  const isSpecial = interaction.customId.startsWith("special_choice");
  const currentQuestion = isSpecial
    ? client.currentSpecialQuestion
    : client.currentMultipleChoiceQuestion;

  if (!currentQuestion) {
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content:
          "❌ No active multiple-choice question. Try requesting a question first.",
        ephemeral: true,
      });
    }
    return { isCorrect: false };
  }

  const choiceIndex = parseInt(
    interaction.customId.split("_")[2] || interaction.customId.split("_")[1],
    10
  );
  const selectedChoice = currentQuestion.choices[choiceIndex];

  const isCorrect =
    typeof selectedChoice === "string" &&
    typeof currentQuestion.answer === "string" &&
    selectedChoice.trim().toLowerCase() ===
      currentQuestion.answer.trim().toLowerCase();

  console.log(
    `[handleButtonInteraction] Is Correct: ${isCorrect} (Special: ${
      isSpecial ? "Yes" : "No"
    })`
  );

  try {
    if (isCorrect) {
      const multiplier = isSpecial ? currentQuestion.multiplier || 1 : 1;
      const pointsEarned = 1 * multiplier;

      const user = await User.findOneAndUpdate(
        { userId: interaction.user.id, guildId: interaction.guildId },
        { $inc: { score: pointsEarned } },
        { upsert: true, new: true }
      );

      const isValidUrl = (url) => {
        try {
          new URL(url);
          return true;
        } catch {
          return false;
        }
      };

      const reviewUrl = isValidUrl(currentQuestion.review)
        ? currentQuestion.review
        : "https://example.com";

      await interaction.update({
        content: `🎉 **${interaction.user.username}'s** score is now **${user.score}** (Earned ${pointsEarned}) 🎉\n\n${currentQuestion.question}`,
        components: [
          {
            type: 1, // Action Row
            components: [
              {
                type: 2, // Button
                label: currentQuestion.answer, // Set the button label to the correct answer
                style: 5, // Link style
                url: reviewUrl, // Link to the review or fallback URL
              },
            ],
          },
        ],
      });

      // Update user roles if their rank has changed
      const guildId = interaction.guildId;
      await assignRoles(client, guildId);

      if (isSpecial) {
        client.currentSpecialQuestion = null; // Clear the special question
      } else {
        client.currentMultipleChoiceQuestion = null; // Clear the regular question
      }
    } else {
      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content: "❌ Wrong answer! Keep trying.",
          ephemeral: true,
        });
      }
    }

    if (isCorrect) {
      // Push a new regular question after every interaction
      const questionPool = [];
      for (const handler of Object.values(questionHandlers)) {
        const questions = await handler.getAllQuestions?.();
        if (questions) questionPool.push(...questions);
      }

      if (questionPool.length > 0) {
        const randomQuestion =
          questionPool[Math.floor(Math.random() * questionPool.length)];
        const choices = generateMultipleChoice(
          questionPool,
          randomQuestion.answer
        );

        client.currentMultipleChoiceQuestion = { ...randomQuestion, choices };

        const buttons = choices.map((choice, index) =>
          new ButtonBuilder()
            .setCustomId(`choice_${index}`)
            .setLabel(choice)
            .setStyle(ButtonStyle.Primary)
        );

        const actionRow = new ActionRowBuilder().addComponents(buttons);

        await interaction.followUp({
          content: `🔔 **New Multiple-Choice Question** 🔔\n**Category:** ${randomQuestion.category}\n**Question:** ${randomQuestion.question}`,
          components: [actionRow],
        });
      } else {
        console.error("No questions available for the next round.");
        await interaction.followUp({
          content: "❌ No more questions available at the moment.",
          ephemeral: true,
        });
      }
    }
  } catch (error) {
    console.error("Error handling button interaction:", error);

    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "❌ An error occurred while processing your answer.",
        ephemeral: true,
      });
    }
  }

  return { isCorrect };
}

// Schedule special questions
function scheduleSpecialQuestions(client, specialTimes) {
  setInterval(async () => {
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
            "⏰ **30-Minute Warning!** The next question will be worth **10x points**!"
          );
        } else {
          const questionPool = [];
          for (const handler of Object.values(questionHandlers)) {
            const questions = await handler.getAllQuestions?.();
            if (questions) questionPool.push(...questions);
          }

          if (questionPool.length === 0) {
            channel.send("❌ No questions available for the special round.");
            return;
          }

          // Generate a random question with 5x multiplier
          const randomQuestion =
            questionPool[Math.floor(Math.random() * questionPool.length)];
          const choices = generateMultipleChoice(
            questionPool,
            randomQuestion.answer
          );

          client.currentSpecialQuestion = {
            ...randomQuestion,
            choices,
            multiplier: 10,
          };

          const buttons = choices.map((choice, index) =>
            new ButtonBuilder()
              .setCustomId(`special_choice_${index}`)
              .setLabel(choice)
              .setStyle(ButtonStyle.Primary)
          );

          const actionRow = new ActionRowBuilder().addComponents(buttons);
          const cyberpunkRoleId = process.env.TOP_TWENTY;

          channel.send({
            content: `🔥 **Special Question Time!** <@&${cyberpunkRoleId}> 🔥\n\n**Category:** ${randomQuestion.category}\n**Question:** ${randomQuestion.question}\n\n🎯 **Answer correctly to earn **10x points**!`,
            components: [actionRow],
          });
        }
      }
    }
  }, 60 * 1000); // Check every minute
}

module.exports = {
  scheduleSpecialQuestions,
  handleMultipleChoiceQuestion,
  handleButtonInteraction,
};
