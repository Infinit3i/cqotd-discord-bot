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

// Dynamically generate multiple-choice options
function generateMultipleChoice(questionPool, currentAnswer) {
  // Ensure `currentAnswer` is a string
  if (typeof currentAnswer !== "string") {
    console.error("generateMultipleChoice: currentAnswer is not a string:", currentAnswer);
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

  // Ensure correct type comparison
  const isCorrect =
    typeof selectedChoice === "string" &&
    typeof currentQuestion.answer === "string" &&
    selectedChoice.toLowerCase() === currentQuestion.answer.toLowerCase();

  try {
    if (isCorrect) {
      const user = await User.findOneAndUpdate(
        { userId: interaction.user.id, guildId: interaction.guildId },
        { $inc: { score: 1 } },
        { upsert: true, new: true }
      );

      await interaction.update({
        content: `✅ **Correct!** The answer was: ${currentQuestion.answer}\n🎉 **Your score is now ${user.score}.**`,
        components: [],
      });

      client.currentMultipleChoiceQuestion = null;

      // Fetch a new question
      const questionPool = [];
      for (const handler of Object.values(questionHandlers)) {
        const questions = await handler.getAllQuestions?.();
        if (questions) questionPool.push(...questions);
      }

      if (questionPool.length > 0) {
        const randomQuestion =
          questionPool[Math.floor(Math.random() * questionPool.length)];
        const choices = generateMultipleChoice(questionPool, randomQuestion.answer);

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
