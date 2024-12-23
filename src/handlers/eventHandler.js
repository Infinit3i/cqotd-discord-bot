const {
  handleMultipleChoiceQuestion,
  handleButtonInteraction,
} = require("./multipleChoiceHandler");
const User = require("../models/User");

function eventHandler(client) {
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      try {
        // Handle button interaction and get correctness result
        const { isCorrect } = await handleButtonInteraction(
          client,
          interaction
        );

        if (isCorrect) {
          let user = await User.findOne({
            userId: interaction.user.id,
            guildId: interaction.guildId,
          });

          if (!user) {
            console.log(`User not found: ${interaction.user.id}`);
            return;
          }

          if (!user.celebratedScores) {
            user.celebratedScores = [];
          }

          // Trigger celebration for multiples of 5
          if (
            user.score % 5 === 0 &&
            !user.celebratedScores.includes(user.score)
          ) {
            const celebrationGifs = [
              "https://tenor.com/view/lilpotate-lil-potate-lilpotates-lil-potates-potate-gif-4155638923629851536",
              "https://tenor.com/view/baby-yoda-babyyoda-gif-906250813013085097",
              "https://tenor.com/view/bwd-waddle-dee-kirby-celebrate-cute-gif-22246612",
              "https://tenor.com/view/happy-dancing-celebrate-excited-gif-23223956",
              "https://tenor.com/view/deadpool-dance-bye-bye-bye-deadpool-dancing-deadpool-and-wolverine-nsync-gif-574902272552011427",
              "https://tenor.com/view/kirb-kirby-gif-6194484891581978780",
              "https://tenor.com/view/dhmis-dont-hug-me-im-gif-23391946",
              "https://tenor.com/view/jax-dance-animiniz-celebrate-the-amazing-digital-circus-gif-13094019645236533904",
              "https://tenor.com/view/funny-dance-pomni-the-amazing-pomni-digital-circus-dancing-pomni-pomni-and-the-witch-eyebrows-gif-12820093209985177039",
              "https://tenor.com/view/eddie-birthday-gif-8810857366549109289",
              "https://tenor.com/view/bubble-the-amazing-digital-circus-the-amazing-digital-circus-bubble-dance-gif-10373237877753609843",
              "https://tenor.com/view/the-amazing-digital-circus-tadc-pomni-ragatha-jax-gif-15752491151097277968",
              "https://tenor.com/view/gangle-shocked-animiniz-the-amazing-digital-circus-amazing-digital-circus-gif-6973185610776859373",
              "https://tenor.com/view/pomni-digital-circus-the-amazing-digital-circus-dance-dancing-gif-12321434623242918249",
              "https://tenor.com/view/family-guy-fortnite-funny-dance-cute-dancing-gif-17604243445811723948",
              "https://tenor.com/view/pomni-dance-arona-the-amazing-digital-circus-digital-circus-gif-16384496640624745766",
              "https://tenor.com/view/ghostly-gets-sucked-by-jax-ghostly-jax-the-mystery-of-mildenhall-manor-gets-sucked-gif-1481279982557143807",
              "https://tenor.com/view/ragatha-you%27re-amazing-animiniz-the-amazing-digital-circus-amazing-digital-circus-gif-106114250208511676",
              "https://tenor.com/view/dance-dancing-dhmis-celebrate-excited-gif-5635527",
              "https://tenor.com/view/dance-party-moves-happy-dancing-gif-5635537",
              "https://tenor.com/view/dhmis-dont-hug-me-im-scared-tv-show-series-trumpet-gif-26836277",
              "https://tenor.com/view/anime-seven-deadly-sins-sds-meliodas-gif-11807110373346520576",
              "https://tenor.com/view/escanor-seven-deadly-sins-anime-sun-sin-of-pride-gif-17314284",
              "https://tenor.com/view/rage-anger-the-rage-consumes-me-the-anger-consumes-me-escanor-gif-4679885792700076152",
              "https://tenor.com/view/wegoskee-gif-20436192",
              "https://tenor.com/view/chevy-chevrolet-corvette-sanat1ve-corvette-corvette-gif-25056708",
              "https://tenor.com/view/cars-fast-car-and-furious-gif-16827910",
              "https://tenor.com/view/gtr-r35-gtr35-gtrrari-gif-24979183",
              "https://tenor.com/view/nissan-gtr-r35-gtr-r35gtr-r35-gtr-backfire-gif-23170757",
            ];

            const catchPhrases = [
              "Congrats!",
              "Way to go!",
              "Awesome work!",
              "Keep it up!",
              "You are doing great!",
              "Don't stop now!",
              "Fantastic!",
              "Well done!",
              "Great job!",
              "You nailed it!",
            ];

            const randomGif =
              celebrationGifs[
                Math.floor(Math.random() * celebrationGifs.length)
              ];
            const randomPhrase =
              catchPhrases[Math.floor(Math.random() * catchPhrases.length)];

            try {
              await interaction.followUp({
                content: `**${randomPhrase}**\n\n${randomGif}`,
                ephemeral: true,
              });

              user.celebratedScores.push(user.score);
              await user.save();
            } catch (error) {
              console.error("Error during celebration:", error);
            }
          }
        }
      } catch (error) {
        console.error(
          "[eventHandler.js] [interactionCreate] Error handling button interaction:",
          error
        );
        if (!interaction.replied && !interaction.deferred) {
          await interaction.reply({
            content: "❌ An error occurred while processing your answer.",
            ephemeral: true,
          });
        }
      }
    }
  });
}

module.exports = { eventHandler };
