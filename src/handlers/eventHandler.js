const { handleMultipleChoiceQuestion, handleButtonInteraction } = require("./multipleChoiceHandler");
const User = require("../models/User");

function logDebug(file, functionName, message) {
  console.log(`[${file}] [${functionName}] ${message}`);
}

function eventHandler(client) {
  // Handle commands sent as messages
  client.on("messageCreate", async (msg) => {
    if (msg.author.bot || msg.channel.id !== process.env.CQOTD_ID) return;

    const content = msg.content.toLowerCase();
    logDebug("eventHandler.js", "messageCreate", `Message received: ${content}`);

    // Handle multiple-choice question commands
    if (content === "question" || content === "mcq" || content === "multiple choice") {
      try {
        await handleMultipleChoiceQuestion(client, {
          reply: (message) => msg.reply(message),
        });
        logDebug("eventHandler.js", "messageCreate", "Multiple-choice question handled successfully.");
      } catch (error) {
        console.error("Error handling multiple-choice question command:", error);
        await msg.reply("❌ An error occurred while generating the multiple-choice question.");
      }
      return;
    }
  });

  // Handle button interactions
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      try {
        await handleButtonInteraction(client, interaction);

        // Fetch user score after processing interaction
        const user = await User.findOne({ userId: interaction.user.id, guildId: interaction.guildId });

        if (!user) {
          logDebug("eventHandler.js", "interactionCreate", `User not found: ${interaction.user.id}`);
          return;
        }

        logDebug("eventHandler.js", "interactionCreate", `User score: ${user.score}`);

        // Trigger celebration for multiples of 5
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

          const randomGif = celebrationGifs[Math.floor(Math.random() * celebrationGifs.length)];
          logDebug("eventHandler.js", "interactionCreate", `Celebration triggered with GIF: ${randomGif}`);

          // Send the GIF
          if (!interaction.replied && !interaction.deferred) {
            await interaction.followUp({ content: randomGif });
          } else {
            // Fallback: Use the channel to send the GIF if interaction is already replied
            const channel = client.channels.cache.get(interaction.channelId);
            if (channel) {
              await channel.send(randomGif);
            } else {
              logDebug("eventHandler.js", "interactionCreate", "Could not find the channel to send the GIF.");
            }
          }
        }
      } catch (error) {
        console.error("[eventHandler.js] [interactionCreate] Error handling button interaction:", error);
        if (!interaction.replied && !interaction.deferred) {
          await interaction.reply({
            content: "❌ An error occurred while processing your answer.",
            ephemeral: true,
          });
        }
      }
    }
  });

  // Periodic reminder every 3 to 5 hours
  setInterval(() => {
    const reminderChannel = client.channels.cache.get(process.env.CQOTD_ID);
    const roleId = process.env.TOP_20;

    if (reminderChannel) {
      reminderChannel.send(
        `<@&${roleId}> Don't forget to answer the daily multiple-choice questions to earn more points! 🏆`
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
