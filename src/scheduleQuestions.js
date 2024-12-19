const { TextChannel } = require("discord.js");

module.exports = (client) => {
  const QUESTION_INTERVAL = 60 * 60 * 1000; // 1 hour
  const CATCHPHRASES = [
    "Y'all are lame.",
    "I guess no one is smart enough.",
    "Anyone alive out there?",
    "Are we giving up that easily?",
    "Well, this is awkward...",
  ];
  const questionChannelID = process.env.CQOTD_ID;

  async function postQuestion() {
    const channel = await client.channels.fetch(questionChannelID);
    if (!(channel instanceof TextChannel)) {
      console.error("Invalid channel ID or channel is not a text channel.");
      return;
    }

    // Ensure there's a current question
    if (!client.currentQuestion) {
      client.generateNewQuestion();
    }

    const currentQuestion = client.currentQuestion;

    await channel.send(
      `🔔 **Scheduled Question** 🔔\n\n**Category:** ${currentQuestion.category}\n**Question:** ${currentQuestion.question}`
    );

    // Response timeout
    setTimeout(() => {
      if (!answered) {
        const randomCatchphrase = CATCHPHRASES[Math.floor(Math.random() * CATCHPHRASES.length)];
        channel.send(randomCatchphrase);
      }
    }, Math.random() * 0.5 * QUESTION_INTERVAL + 0.25 * QUESTION_INTERVAL);
  }

  setInterval(postQuestion, QUESTION_INTERVAL);
};
