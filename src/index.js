require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const User = require("./models/User");
const allquestions = require('./questions/questionbank');
const gcihquestions = require('./questions/gcihquestions');
const secquestions = require('./questions/secquestions');
const ccnaquestions = require('./questions/ccnaquestions');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//All variables
let randomNumber = 0;
let score = 5;
let playerScore = User.score;
const channelID = process.env.CQOTD_ID;
let askingQuestion = false; // Flag to track if a question is being asked
const questionInputCommands = ["cqotd", "c", "q", "the question", "question","?"];
let questions = {...allquestions, ...gcihquestions, ...secquestions, ...ccnaquestions};

//Login
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

//Random generator
function generatenew() {
  let keys = Object.keys(questions);
  let numofkeys = keys.length;
  return randomNumber = Math.floor(numofkeys * Math.random())
}

//Cqotd
client.on('messageCreate', (msg) => {
  console.log(`${questions[randomNumber].answer}`)
  console.log(`${msg.author.displayName} said ${msg.content}`);
  if (msg.author.bot || msg.channel.id !== channelID) {
    return;
  } else if (questionInputCommands.includes(msg.content.toLowerCase())) {
    let randomNumber = generatenew();
    msg.reply(`The category is **${questions[randomNumber].category}** \n \n ${questions[randomNumber].question}`);
    askingQuestion = true;
  } else if (
    msg.content.toLowerCase() === questions[randomNumber].answer.toLowerCase() &&
    askingQuestion
  ) {
    msg.reply(`✅ You got it right! 🎉 Your Score is **${score = 5 + score}** \n \n **REVIEW**: ${questions[randomNumber].review}`);
    askingQuestion = false;
  } else if (msg.content.toLowerCase() === "skip"){
    askingQuestion = false
    msg.reply(`The question has been skipped.`);
  } else if (
    msg.content.toLowerCase() !== questions[randomNumber].answer &&
    askingQuestion
  ){
    msg.reply(`❌ You got it WRONG!`);
  } else {
    console.log('Someone is talking into the void.')
    return;
  }
});

//Commands for the Cyber Nerds Bot
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "question") {
    interaction.reply({content: questions[randomNumber].question, ephemeral: true});
  } else if (interaction.commandName === "hint") {
    interaction.reply({ content: `They hint is ${questions[randomNumber].hint}`, ephemeral: true});
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
