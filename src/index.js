require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const User = require("./models/User");

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
    review: '<https://youtu.be/etqw6MpisYw?si=c2ae_m0xywwBGZan>'
  },
  {
    category: 'General',
    question: 'What is the OSI model?',
    answer: 'Open Systems Interconnection',
    hint: 'https://aws.amazon.com/what-is/osi-model/',
    blank: 'xxxx xxxxxxx xxxxxxxxxxxxxxx',
    review: '<https://youtu.be/Ilk7UXzV_Qc?si=eFvm1JMCByP6iwJ1>',
  },
  {
    category: 'General',
    question: 'What do vlans do?',
    answer: 'logically segment',
    hint: 'physical vs logical does what?',
    blank: 'xxxxxxxxx xxxxxxx',
    review: '<https://www.techtarget.com/searchnetworking/definition/virtual-LAN>',
  },
  {
    category: 'General',
    question: 'What is Phishing?',
    answer: ['Email scam', 'email'],
    hint: 'What is it sent over?',
    blank: 'xxxxx xxxx',
    review: '<https://www.cisco.com/c/en/us/products/security/email-security/what-is-phishing.html>',
  },
  {
    category: 'General',
    question: 'What is a DOS attack',
    answer: 'Denial of service',
    hint: 'What does it stop?',
    blank: 'xxxxxx xx xxxxxxx',
    review: '<https://www.cloudflare.com/learning/ddos/glossary/denial-of-service/>',
  },
  {
    category: 'General',
    question: 'What is a botnet?',
    answer: 'Many compromised devices',
    hint: 'Controlled by attackers',
    blank: 'xxxx xxxxxxxxxxxxxx xxxxxxx',
    review: '<https://www.paloaltonetworks.com/cyberpedia/what-is-botnet>',
  },
  {
    category: 'General',
    question: 'how many USABLE hosts can fit on a /26 subnet?',
    answer: '62',
    hint: 'amount subtract 1 for network address and one for broadcast address',
    blank: 'xx',
    review: '<https://aws.amazon.com/what-is/cidr/>',
  },
  {
    category: 'General',
    question: 'What is the difference between layer 2 switch and a layer 2 switch?',
    answer: 'routing',
    hint: 'Layer 3 act similiar to a router.',
    blank: 'xxxxxxx',
    review: '<https://planetechusa.com/layer-2-vs-layer-3-switches/>',
  },
  {
    category: 'General',
    question: 'What port is RDP?',
    answer: '3389',
    hint: 'remote desktop protocol.',
    blank: 'xxxx',
    review: '<https://www.cbtnuggets.com/common-ports/what-is-port-3389>',
  },
  {
    category: 'General',
    question: 'What port is LDAP?',
    answer: '389',
    hint: 'Lightweight Directory Access Protocol.',
    blank: 'xxx',
    review: '<https://www.cbtnuggets.com/blog/technology/networking/ldap-port-389-vs-636>',
  },
  {
    category: 'General',
    question: 'What port is LDAPS?',
    answer: '636',
    hint: 'Encrypted Lightweight Directory Access Protocol.',
    blank: 'xxx',
    review: '<https://www.cbtnuggets.com/blog/technology/networking/ldap-port-389-vs-636>',
  },
  {
    category: 'CCNA',
    question: 'What model of operation does Hot Standby Router Protocol (HSRP) use?',
    answer: 'Active/passive',
    hint: 'one router is on standby while the other is working',
    blank: 'xxxxxx/xxxxxxx',
    review: '<https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/9234-hsrpguidetoc.html>',
  },
  {
    category: 'CCNA',
    question: 'What layer # is port security and dynamic ARP inspection?',
    answer: '2',
    hint: 'NOT 3',
    blank: 'x',
    review: '<https://info.pivitglobal.com/resources/port-security-layer-2-protection>',
  },
  {
    category: 'CCNA',
    question: 'Which type of message is sent by DHCP client to ask to lease a specific IP address from a DHCP server?',
    answer: 'Request',
    hint: 'DORA',
    blank: 'xxxxxxx',
    review: '<https://notes.networklessons.com/dhcp-message-types>',
  }
];

function generatenew() {
  let keys = Object.keys(questions);
  let numofkeys = keys.length;
  return randomNumber = Math.floor(numofkeys * Math.random())
}

let score = 5;
let playerScore = User.score;
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
    msg.reply(`The category is **${questions[randomNumber].category}** \n \n ${questions[randomNumber].question}`);
    askingQuestion = true;
  } else if (
    msg.content.toLowerCase() === questions[randomNumber].answer.toLowerCase() &&
    askingQuestion
  ) {
    msg.reply(`✅ You got it right! 🎉 Your Score is **${score}** \n \n **REVIEW**: ${questions[randomNumber].review}`);
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
    console.log(playerScore)
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
