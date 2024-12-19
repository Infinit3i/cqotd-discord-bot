const { TextChannel } = require("discord.js");

module.exports = (client) => {
  // Configuration
  const QUESTION_INTERVAL = 60 * 60 * 1000; // 1 minute for testing (set to 60 * 60 * 1000 for production)
  const CATCHPHRASES = [
    "Y'all are lame.",
    "I guess no one is smart enough.",
    "Anyone alive out there?",
    "Are we giving up that easily?",
    "Well, this is awkward...",
  ];
  const questionChannelID = process.env.CQOTD_ID;

  let currentQuestion = null;
  let answered = false;
  let remainingTime = QUESTION_INTERVAL; // Initialize remaining time

  // Function to post a new question
  async function postQuestion() {
    let channel;
    try {
      channel = await client.channels.fetch(questionChannelID); // Fetch channel from API
    } catch (error) {
      console.error("Failed to fetch the channel:", error);
      return;
    }

    if (!(channel instanceof TextChannel)) {
      console.error("Invalid channel ID or channel is not a text channel.");
      return;
    }

    // Pick a random question
    const randomIndex = Math.floor(Math.random() * client.questionsArray.length);
    currentQuestion = client.questionsArray[randomIndex];

    // Post the question
    await channel.send(
      `🔔 **Question of the Hour** 🔔\n\n**Category:** ${currentQuestion.category}\n**Question:** ${currentQuestion.question}`
    );

    // Reset the answered flag and timer
    answered = false;
    remainingTime = QUESTION_INTERVAL;

    // Calculate the dynamic response window (25% to 75% of QUESTION_INTERVAL)
    const RESPONSE_WINDOW =
      Math.random() * (0.75 - 0.25) * QUESTION_INTERVAL + 0.25 * QUESTION_INTERVAL;

    console.log(`Response window: ${Math.ceil(RESPONSE_WINDOW / 1000)} seconds`);

    // Start the timer for the response window
    setTimeout(() => {
      if (!answered) {
        const randomCatchphrase =
          CATCHPHRASES[Math.floor(Math.random() * CATCHPHRASES.length)];
        channel.send(randomCatchphrase); // Send catchphrase to the specific channel
      }
    }, RESPONSE_WINDOW);
  }

  // Schedule the question posting
  setInterval(postQuestion, QUESTION_INTERVAL);

  // Timer display in the command line
  setInterval(() => {
    remainingTime -= 60000; // Decrement remaining time by 15 seconds
    if (remainingTime >= 0) {
      console.log(`Next question in: ${Math.ceil(remainingTime / 60000)} minutes`);
    }
  }, 60000); // Update every 15 seconds

  // Listen for responses
  client.on("messageCreate", (msg) => {
    if (
      msg.channel.id === questionChannelID &&
      currentQuestion &&
      !msg.author.bot
    ) {
      // Check if the response is correct
      if (
        msg.content.trim().toLowerCase() ===
        currentQuestion.answer.trim().toLowerCase()
      ) {
        msg.reply(`✅ Correct! Great job, ${msg.author.username}!`);
        answered = true; // Mark as answered
        currentQuestion = null; // Clear the current question
      }
    }
  });
};
