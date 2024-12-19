const { Client, IntentsBitField } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

require("dotenv").config();
const User = require("./models/User");
const generalquestions = require('./questions/questionbank');
const gcihquestions = require('./questions/gcihquestions');
const secquestions = require('./questions/secquestions');
const ccnaquestions = require('./questions/ccnaquestions');
const scheduleQuestions = require("./scheduleQuestions");
const { fetchMitreQuestion } = require("./questions/mitretcodequestions");
const multipleChoiceQuestion = require("./multipleChoiceQuestion");
const mitreQuestions = require("./questions/mitretcodequestions");

// Combine all questions into an array
let questionsArray = [
  ...Object.values(generalquestions),
  ...Object.values(gcihquestions),
  ...Object.values(secquestions),
  ...Object.values(ccnaquestions),
];





const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

async function addMitreQuestion() {
  try {
    const mitreQuestion = await mitreQuestions.fetchMitreQuestion();
    client.questionsArray.push(mitreQuestion);
    console.log("MITRE question added:", mitreQuestion);
  } catch (error) {
    console.error("Failed to fetch MITRE question:", error.message);
  }
}

// Attach questionsArray and currentQuestion to the client
client.questionsArray = questionsArray;
client.currentQuestion = null;


// Add MITRE question periodically or on-demand
addMitreQuestion(); // Add one at startup

scheduleQuestions(client);
multipleChoiceQuestion(client);

//All variables
let randomNumber = 0;
let score = 0;
let playerScore = User.score;
const channelID = process.env.CQOTD_ID;
let askedQuestions = []; // Track previously asked questions
let askingQuestion = false; // Flag to track if a question is being asked
const questionInputCommands = ["cqotd", "c", "q", "the question", "question","?"];
// who ASKED!
const alleyOOP = ["https://tenor.com/view/luka-doncic-alley-oop-lob-kristaps-porzingis-pass-gif-17653538", "https://tenor.com/view/nba-players-alleyoop-dunk-nba-gif-11453933", "https://tenor.com/view/crawford-to-griffin-dunk-basketball-nba-gif-16061160"]
let lastRandomIndex = -1;

// Attach questionsArray to the client for global access
client.questionsArray = questionsArray;

// Shuffle the questions array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(questionsArray); // Shuffle the questions array at startup

//Login
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});









// Attach currentQuestion management to the client for global access
client.currentQuestion = null;

// Function to generate a new question
function generateNewQuestion() {
  const randomIndex = Math.floor(Math.random() * client.questionsArray.length);
  client.currentQuestion = client.questionsArray[randomIndex];
}
generateNewQuestion(); // Initialize the first question

// Function to validate an answer
function validateAnswer(userAnswer) {
  if (!client.currentQuestion) return false;
  return userAnswer.trim().toLowerCase() === client.currentQuestion.answer.trim().toLowerCase();
}

// Attach these functions to the client
client.generateNewQuestion = generateNewQuestion;
client.validateAnswer = validateAnswer;




const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');



// Register the commands
(async () => {
  try {
    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('✅ Slash commands registered successfully.');
  } catch (error) {
    console.error('❌ Error registering slash commands:', error);
  }
})();










// Generate a new random question
function generatenew() {
  if (askedQuestions.length >= questionsArray.length) {
    askedQuestions = []; // Reset if all questions are used
  }

  let newRandomNumber;
  do {
    newRandomNumber = Math.floor(Math.random() * questionsArray.length);
  } while (askedQuestions.includes(newRandomNumber));

  askedQuestions.push(newRandomNumber); // Mark question as asked
  return newRandomNumber;
}

//Cqotd
client.on('messageCreate', (msg) => {
  console.log(`Received message: "${msg.content}" from ${msg.author.displayName}`);

  if (msg.author.bot || msg.channel.id !== channelID) {
    return;
  }

  if (msg.content.toLowerCase() === "who") {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * alleyOOP.length);
    } while (randomIndex === lastRandomIndex); // Ensure the new random index is different from the last one
    lastRandomIndex = randomIndex;

    const randomAlleyOOP = alleyOOP[randomIndex];
    msg.reply(`ASKED!!! \n\n ${randomAlleyOOP}`);
    return;
  }

  if (questionInputCommands.some(cmd => cmd === msg.content.trim().toLowerCase())) {
    if (client.currentQuestion) {
      // Show the current question if one exists
      msg.reply(
        `🔔 **Current Question** 🔔\n\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}`
      );
      console.log(`Answer to the current question: ${client.currentQuestion.answer}`); // Log the answer to terminal
    } else {
      // Generate a new question if none exists
      client.generateNewQuestion(); // Generate a new question
      msg.reply(
        `🔔 **New Question** 🔔\n\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}`
      );
      console.log(`Answer to the new question: ${client.currentQuestion.answer}`); // Log the answer to terminal
    }
    return; // Exit after handling the question input
  }

  if (client.currentQuestion) {
    if (msg.content.trim().toLowerCase() === client.currentQuestion.answer.trim().toLowerCase()) {
      score += 5; // Increment score
      console.log(`Correct answer received: ${client.currentQuestion.answer}`); // Log correct answer in terminal
      msg.reply(
        `✅ You got it right! 🎉 Your Score is **${score}** \n\n **REVIEW**: ${client.currentQuestion.review}`
      );

      // Generate and display a new question
      client.generateNewQuestion();
      msg.channel.send(
        `🔔 **New Question** 🔔\n\n**Category:** ${client.currentQuestion.category}\n**Question:** ${client.currentQuestion.question}`
      );
      console.log(`Answer to the new question: ${client.currentQuestion.answer}`); // Log the answer to terminal
      return;
    }

    console.log(
      `Wrong answer. Expected: ${client.currentQuestion.answer}, Received: ${msg.content}`
    );
    msg.reply(`❌ You got it WRONG!`);
  } else {
    msg.reply("Someone is talking into the void.");
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "mitre") {
    try {
      await interaction.deferReply(); // Acknowledge the interaction

      const mitreQuestion = await fetchMitreQuestion(); // Fetch a random MITRE question
      client.currentQuestion = mitreQuestion; // Set it as the current question

      await interaction.editReply(
        `🔔 **MITRE T-Code Question** 🔔\n\n**Category:** ${mitreQuestion.category}\n**Question:** ${mitreQuestion.question}`
      );

      console.log(`Fetched MITRE question: ${mitreQuestion.question}`);
      console.log(`Answer: ${mitreQuestion.answer}`); // Log the correct answer to the terminal
    } catch (error) {
      console.error('Error handling /mitre command:', error);
      await interaction.editReply('❌ An error occurred while fetching the MITRE question. Please try again later.');
    }
  }
});

//Commands for the Cyber Nerds Bot
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "question") {
    console.log(`Answer to the question: ${questionsArray[randomNumber]?.answer}`); // Log the answer
    interaction.reply({content: questionsArray[randomNumber]?.question, ephemeral: true});
  } else if (interaction.commandName === "hint") {
    interaction.reply({ content: `The hint is ${questionsArray[randomNumber]?.hint}`, ephemeral: true});
  } else if (interaction.commandName === "blank") {
    interaction.reply({ content: `The blanks are ${questions[randomNumber].blank}`, ephemeral: true});
  } else if (interaction.commandName === "score") {
    interaction.reply({ content: `Your score is ${score}`, ephemeral: true});
    console.log(playerScore)
  }
})

//Register users to roles
client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    await interaction.deferReply({ ephemeral: true });

    const role = interaction.guild.roles.cache.get(interaction.customId);
    if (!role) {
      interaction.editReply({
        content: "I couldn't find that role",
      });
      return;
    }

    const hasRole = interaction.member.roles.cache.has(role.id);

    if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply(`The role ${role} has been removed.`);
      return;
    }

    await interaction.member.roles.add(role);
    await interaction.editReply(`The role ${role} has been added.`);
  } catch (error) {
    console.log(error);
  }
});

//MongoDB
(async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_URI, { keepalive: true});
    console.log('Connected to DB.');
    eventHandler(client);
    
  } catch (error) {
    console.log(`Error ${error}`);
  }
})

client.login(process.env.TOKEN);
