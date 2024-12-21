const fs = require("fs");
const path = require("path");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
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

console.log(
  "Available categories:",
  Object.values(questionHandlers).map((handler) => handler.category)
);

// Dynamically generate multiple-choice options
function generateMultipleChoice(questionPool, currentAnswer) {
  // Collect all valid string answers from the question pool
  const allAnswers = questionPool
    .map((q) => (typeof q.answer === "string" ? q.answer : null)) // Ensure answers are strings
    .filter((ans) => ans && ans.toLowerCase() !== currentAnswer.toLowerCase()); // Remove null/undefined and the current answer

  // Shuffle and pick three random incorrect answers
  const incorrectAnswers = allAnswers
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Combine correct and incorrect answers and shuffle them
  const choices = [...incorrectAnswers, currentAnswer].sort(() => 0.5 - Math.random());

  return choices;
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
        content: "❌ There was an error generating the question. Please try again later.",
        ephemeral: true,
      });
    }
  }
}

async function handleButtonInteraction(client, interaction) {
  if (!interaction.isButton()) return;

  const currentQuestion = client.currentMultipleChoiceQuestion;
  if (!currentQuestion) {
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "❌ No active multiple-choice question. Try requesting a question first.",
        ephemeral: true,
      });
    }
    return;
  }

  const choiceIndex = parseInt(interaction.customId.split("_")[1], 10);
  const selectedChoice = currentQuestion.choices[choiceIndex];
  const isCorrect = selectedChoice.toLowerCase() === currentQuestion.answer.toLowerCase();

  try {
    if (isCorrect) {
      const user = await User.findOneAndUpdate(
        { userId: interaction.user.id, guildId: interaction.guildId },
        { $inc: { score: 1 } },
        { upsert: true, new: true }
      );

      // Update the interaction with a "Correct" message
      await interaction.update({
        content: `✅ **Correct!** The answer was: ${currentQuestion.answer}\n🎉 **Your score is now ${user.score}.**`,
        components: [], // Remove buttons
      });

      // Clear the current question
      client.currentMultipleChoiceQuestion = null;

      // Generate a new question and send it
      const questionPool = [];
      for (const handler of Object.values(questionHandlers)) {
        const questions = await handler.getAllQuestions?.();
        if (questions) questionPool.push(...questions);
      }

      if (questionPool.length > 0) {
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
    } else {
      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content: "❌ Wrong answer! Keep trying.",
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
}


module.exports = {
  handleMultipleChoiceQuestion,
  handleButtonInteraction,
};
