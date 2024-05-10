require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//Question Bank
/*
  {
    category: '',
    question: '',
    answer: '',
    hint: '',
    blank: '',
    review: '',
  },
*/
let questions = [
  {
    category: 'GCIH',
    question: 'What application uses hook.js to attack victims from the browser?',
    answer: 'BeEF',
    hint: 'MOOOOO',
    blank: 'xxxx',
    review: 'https://youtu.be/etqw6MpisYw?si=c2ae_m0xywwBGZan'
  },
  {
    category: 'General',
    question: 'What is the OSI model?',
    answer: 'Open Systems Interconnection',
    hint: 'https://aws.amazon.com/what-is/osi-model/',
    blank: 'xxxx xxxxxxx xxxxxxxxxxxxxxx',
    review: 'https://youtu.be/Ilk7UXzV_Qc?si=eFvm1JMCByP6iwJ1',
  },
  {
    category: 'General',
    question: 'What do vlans do?',
    answer: 'logically segment',
    hint: 'physical vs logical does what?',
    blank: 'xxxxxxxxx xxxxxxx',
    review: 'https://www.google.com',
  },
  {
    category: 'General',
    question: 'What is Phishing?',
    answer: 'Email scam',
    hint: 'What is it sent over?',
    blank: 'xxxxx xxxx',
    review: 'https://www.google.com',
  },
  {
    category: 'General',
    question: 'What is a DOS attack',
    answer: 'Denial of service',
    hint: 'What does it stop?',
    blank: 'xxxxxx xx xxxxxxx',
    review: 'https://www.google.com',
  },
  {
    category: 'General',
    question: 'What is a botnet?',
    answer: 'Many compromised devices',
    hint: 'Controlled by attackers',
    blank: 'xxxx xxxxxxxxxxxxxx xxxxxxx',
    review: 'https://www.google.com',
  },
];

function generatenew() {
  let keys = Object.keys(questions);
  let numofkeys = keys.length;
  return randomNumber = Math.floor(numofkeys * Math.random())
}

let score = 0;
const channelID = process.env.CQOTD_ID;
let askingQuestion = false; // Flag to track if a question is being asked

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

//cqotd
client.on('messageCreate', (msg) => {
  console.log(`${msg.author.displayName} said ${msg.content}`);
  if (msg.author.bot || msg.channel.id !== channelID) {
    return;
  } else if (
    msg.content.toLowerCase() === "cqotd"
  ) {
    let randomNumber = generatenew();
    msg.reply(questions[randomNumber].question);
    askingQuestion = true;
  } else if (
    msg.content.toLowerCase() === questions[randomNumber].answer.toLowerCase() &&
    askingQuestion
  ) {
    msg.reply(`✅ You got it right! 🎉 \n \n Your Score is **${score}** \n ${questions[randomNumber].review}`);
    console.log(user);
    askingQuestion = false;
  } else {
    msg.reply(`❌ You got it WRONG!`);
  }
});

//commands for the Cyber Nerds Bot
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
  }
})

//registering users to roles
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

