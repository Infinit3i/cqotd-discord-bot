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
// [question, answer, hint, blank]
let questions = [
  [
    "What is a botnet?",
    "network of compromised devices",
    "Controlled by attackers",
    "xxxxxxxx xx xxxxxxxxxxxxxx xxxxxxx",
  ],
  [
    "What is a cybersecurity awareness?",
    "security education",
    "Promoting security knowledge",
    "xxxxxxxx xxxxxxxxx",
  ],
  [
    "What is a data breach?",
    "information exposure",
    "Unauthorized data access",
    "xxxxxxxxxxxxxxxx xxxxxxxxx",
  ],
  [
    "What is a denial-of-service attack?",
    "service disruption",
    "Overloads servers or networks",
    "xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx",
  ],
  [
    "What is a password manager?",
    "secure password storage",
    "Organizes and encrypts passwords",
    "xxxxxxxx xxxxxxxx xxxxxxxx",
  ],
  [
    "What is a phishing attack?",
    "fraudulent email scheme",
    "Deceptive email campaigns",
    "xxxxxxxxx xxxx xxxxxxxxx xxxxxxxx",
  ],
  ["What is a phishing?", "email scam", "What type of scam?", "xxxxx xxxx"],
  ["What is a rootkit?", "hidden malware", "invisible", "xxxxxx xxxxxxx"],
  [
    "What is a security incident?",
    "security breach event",
    "Violates security policies",
    "xxxxxxxx xxxxxx xxxxxx",
  ],
  [
    "What is a vulnerability assessment?",
    "security check",
    "Identifying weaknesses",
    "xxxxxxxxxx xxxxx",
  ],
  [
    "What is a vulnerability scanner?",
    "security tool",
    "Identifies system weaknesses",
    "xxxxxxxxxxxx xxxxx",
  ],
  [
    "What is a worm?",
    "self-replicating malware",
    "Replicates independently",
    "xxxxxxx xxxxxxxxxx xxxxxxxx",
  ],
  [
    "What is an intrusion detection system?",
    "network monitoring tool",
    "Alerts on suspicious activities",
    "xxxxxxxx xxxxxxxxx xxxxx",
  ],
  [
    "What is biometric authentication?",
    "unique biological identifiers",
    "Fingerprints or iris scans",
    "xxxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxxxx",
  ],
  [
    "What is cyber hygiene?",
    "security best practices",
    "Maintaining good security habits",
    "xxxxxxxxx xxxxx xxxxxxxxx",
  ],
  [
    "What is digital forensics?",
    "evidence analysis",
    "Investigating cyber incidents",
    "xxxxxxxxxxxx xxxxxxxxxxx",
  ],
  ["What is encryption?", "data protection", "", ""],
  [
    "What is malware analysis?",
    "malicious code examination",
    "Studying harmful programs",
    "xxxxxxxxxx xxxxxxxxxxxxxx",
  ],
  [
    "What is malware?",
    "malicious software",
    "What type of software?",
    "xxxxxxxxx xxxxxxxx",
  ],
  [
    "What is network segmentation?",
    "network isolation",
    "Dividing network into parts",
    "xxxxxxxxxxxxxxxx xxxxxxx",
  ],
  [
    "What is secure coding?",
    "secure software development",
    "Writing safe programs",
    "xxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxx",
  ],
  ["What is social engineering?", "manipulative tactics", "", ""],
  [
    "What is social media engineering?",
    "manipulative online tactics",
    "Deceptive online strategies",
    "xxxxxxxxxxxx xxxxxxxxxx",
  ],
  [
    "What is the OSI model?",
    "open systems interconnection",
    "CMON!?",
    "xxxx xxxxxxx xxxxxxxxxxxxxxx",
  ],
  ["What is two-factor authentication (2FA)?", "extra verification", "", ""],
  [
    "What is zero-day vulnerability?",
    "unknown exploit",
    "Unknown and unaddressed flaw",
    "xxxxxxx xxxxxxx",
  ],
  [
    "What is vlan?",
    "segments networks",
    "what does it do to networks?",
    "xxxxxxx xxxxxxxx",
  ],
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

const randomQuestion = getRandomQuestion(questions);
const channelID = "1107760560008876214";
let askingQuestion = false; // Flag to track if a question is being asked

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on("messageCreate", (msg) => {
  console.log(`${msg.author.displayName} said ${msg.content}`);
  if (msg.author.bot) {
    return;
  }

  if (
    msg.content === "cqotd" &&
    !msg.author.bot &&
    msg.channel.id == channelID
  ) {
    msg.reply(randomQuestion[0]);
    askingQuestion = true;
  } else if (
    msg.content === "help" &&
    !msg.author.bot &&
    msg.channel.id == channelID
  ) {
    msg.reply(
      "I can help you with Cyber security questions. I was made by Infinit3i to send out cyber security questions whenever you are bored. \n cqotd - (cyber question of the day). \n help - Help prompt. \n hint -   Current questions hint. \n question - What is the current question. \n blank - Blank spaces xxxxxx."
    );
  } else if (!askingQuestion || msg.channel.id !== channelID) {
    return;
  } else if (
    msg.content.toLowerCase() === randomQuestion[1] &&
    askingQuestion
  ) {
    msg.reply(`✅ You got it right! 🎉`);
    askingQuestion = false;
  } else if (msg.content === "question" && !msg.author.bot && askingQuestion) {
    msg.reply(randomQuestion[0]);
  } else if (msg.content === "hint" && !msg.author.bot && askingQuestion) {
    msg.reply(`They hint is ${randomQuestion[2]}`);
  } else if (msg.content === "blank" && !msg.author.bot && askingQuestion) {
    msg.reply(`The blanks are ${randomQuestion[3]}`);
  } else {
    msg.reply(`❌ You got it WRONG!`);
  }
});

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

client.login(process.env.TOKEN);
