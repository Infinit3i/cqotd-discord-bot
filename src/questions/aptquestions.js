let aptquestions = [
    {
      category: "Advanced Persistent Threats (APTs)",
      question: "Which APT group is associated with North Korea and uses Lazarus as an alias?",
      answer: "APT38",
      hint: "Focuses on financial theft.",
      blank: "xxxx",
      review: "https://www.mandiant.com/resources/lazarus-group",
    },
    {
      category: "APTs",
      question: "Which Russian APT group is known for using the BlackEnergy malware?",
      answer: "Sandworm",
      hint: "Linked to attacks on Ukraine's power grid.",
      blank: "xxxxxxxx",
      review: "https://www.wired.com/story/sandworm-russia-cyberwar-unit-74455/",
    },
    {
      category: "APTs",
      question: "What malware is commonly associated with APT29, also known as Cozy Bear?",
      answer: "WellMess",
      hint: "Targets healthcare and research sectors.",
      blank: "xxxxxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt29.html",
    },
    {
      category: "APTs",
      question: "Which Chinese APT group is known for targeting aerospace and defense industries?",
      answer: "APT41",
      hint: "Also known as Winnti Group.",
      blank: "xxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt41.html",
    },
    {
      category: "APTs",
      question: "Which APT is associated with the NotPetya malware?",
      answer: "Sandworm",
      hint: "A Russian group targeting global industries.",
      blank: "xxxxxxxx",
      review: "https://www.wired.com/story/notpetya-cyberattack/",
    },
    {
      category: "APTs",
      question: "What North Korean APT group uses the Trojan FASTCash for ATM attacks?",
      answer: "APT38",
      hint: "Focuses on financial systems.",
      blank: "xxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt38.html",
    },
    {
      category: "APTs",
      question: "Which Chinese APT is linked to the SolarWinds supply chain attack?",
      answer: "APT10",
      hint: "Also known as Stone Panda.",
      blank: "xxxxx",
      review: "https://www.cisa.gov/news/solarwinds-supply-chain-attack",
    },
    {
      category: "APTs",
      question: "What malware is associated with Fancy Bear, a Russian APT group?",
      answer: "X-Agent",
      hint: "Used for espionage and cyberattacks.",
      blank: "xxxxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt28.html",
    },
    {
      category: "APTs",
      question: "Which APT group is known for using the BADCALL malware?",
      answer: "APT37",
      hint: "A North Korean group targeting telecommunications.",
      blank: "xxxxx",
      review: "https://www.mandiant.com/resources/apt37",
    },
    {
      category: "APTs",
      question: "Which Chinese APT group is associated with PlugX malware?",
      answer: "APT27",
      hint: "Targets defense contractors.",
      blank: "xxxxx",
      review: "https://unit42.paloaltonetworks.com/plugx-malware-analysis/",
    },
    {
      category: "APTs",
      question: "What malware is commonly associated with Turla, a Russian APT group?",
      answer: "Snake",
      hint: "Also known as Uroburos.",
      blank: "xxxxx",
      review: "https://www.kaspersky.com/resource-center/threats/turla-group",
    },
    {
      category: "APTs",
      question: "Which APT group is associated with Operation Aurora?",
      answer: "APT17",
      hint: "A Chinese group targeting intellectual property.",
      blank: "xxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt17.html",
    },
    {
      category: "APTs",
      question: "Which North Korean APT uses the malware KONNI for espionage?",
      answer: "APT37",
      hint: "Focuses on South Korean targets.",
      blank: "xxxxx",
      review: "https://securelist.com/konnis-unusual-activity/87991/",
    },
    {
      category: "APTs",
      question: "What malware is linked to the Chinese APT group Leviathan?",
      answer: "Ladon",
      hint: "Targets maritime and aerospace sectors.",
      blank: "xxxxx",
      review: "https://unit42.paloaltonetworks.com/leviathan-apt-group/",
    },
    {
      category: "APTs",
      question: "What malware is commonly used by the Russian APT group Gamaredon?",
      answer: "Pteranodon",
      hint: "Focuses on Ukrainian entities.",
      blank: "xxxxxxxxx",
      review: "https://www.recordedfuture.com/gamaredon-group-analysis",
    },
    {
      category: "APTs",
      question: "Which Chinese APT is associated with the malware ShadowPad?",
      answer: "APT41",
      hint: "Targets supply chain networks.",
      blank: "xxxxx",
      review: "https://securelist.com/shadowpad-in-corporate-networks/81732/",
    },
    {
      category: "APTs",
      question: "Which Russian APT is known for the Olympic Destroyer malware?",
      answer: "Sandworm",
      hint: "Targeted the 2018 Winter Olympics.",
      blank: "xxxxxxxx",
      review: "https://www.kaspersky.com/resource-center/threats/olympic-destroyer",
    },
    {
      category: "APTs",
      question: "What North Korean APT uses the malware Brambul for SMB attacks?",
      answer: "Lazarus Group",
      hint: "Focuses on network exploitation.",
      blank: "xxxxxxxx xxxxx",
      review: "https://www.sans.org/white-papers/brambul-malware-analysis/",
    },
    {
      category: "APTs",
      question: "What malware is linked to the Russian APT group Nobelium?",
      answer: "Sunburst",
      hint: "Part of the SolarWinds attack.",
      blank: "xxxxxxxx",
      review: "https://www.microsoft.com/security/blog/2020/12/13/nobelium-apt",
    },
    {
      category: "APTs",
      question: "Which APT group uses the malware Stonedrill for espionage?",
      answer: "APT33",
      hint: "An Iranian group targeting energy sectors.",
      blank: "xxxxx",
      review: "https://www.secureworks.com/research/apt33",
    },
    {
      category: "APTs",
      question: "Which Chinese APT group is linked to the malware RedLeaves?",
      answer: "APT10",
      hint: "Targets Japanese industries.",
      blank: "xxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt10.html",
    },
    {
      category: "APTs",
      question: "Which APT group uses the malware KillDisk?",
      answer: "Sandworm",
      hint: "Known for destructive attacks.",
      blank: "xxxxxxxx",
      review: "https://securelist.com/killdisk-analysis/76510/",
    },
    {
      category: "APTs",
      question: "What malware is associated with the Lazarus Group for financial attacks?",
      answer: "SWIFT",
      hint: "Targets banking systems.",
      blank: "xxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/lazarus.html",
    },
    {
      category: "APTs",
      question: "What is the focus of the Russian APT group Energetic Bear?",
      answer: "Energy sector espionage",
      hint: "Targets industrial control systems.",
      blank: "xxxxxx xxxxx xxxxxxxxxx",
      review: "https://www.symantec.com/blogs/energetic-bear-analysis",
    },
    {
      category: "APTs",
      question: "What Chinese APT is associated with targeting Uyghur communities?",
      answer: "APT15",
      hint: "Also known as Ke3chang.",
      blank: "xxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt15.html",
    },
    {
      category: "APTs",
      question: "Which APT group uses the malware WhisperGate for data destruction?",
      answer: "Sandworm",
      hint: "Targets Ukrainian organizations.",
      blank: "xxxxxxxx",
      review: "https://www.microsoft.com/security/blog/2022/01/15/whispergate",
    },
    {
      category: "APTs",
      question: "Which APT group is known for the malware Crimson RAT?",
      answer: "APT36",
      hint: "Targets Indian defense and government entities.",
      blank: "xxxxx",
      review: "https://www.unit42.paloaltonetworks.com/crimson-rat-analysis",
    },
    {
      category: "APTs",
      question: "Which Russian APT uses the malware Zebrocy for espionage?",
      answer: "APT28",
      hint: "Also known as Fancy Bear.",
      blank: "xxxxx",
      review: "https://www.fireeye.com/current-threats/apt-groups/apt28.html",
    },
    {
      category: "APTs",
      question: "Which North Korean APT uses the malware Manuscrypt for cyber espionage?",
      answer: "Lazarus Group",
      hint: "Targets critical infrastructure.",
      blank: "xxxxxxxx xxxxx",
      review: "https://securelist.com/manuscrypt-analysis/91510/",
    },
  ];
  
  module.exports = {
    category: "Advanced Persistent Threats",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * aptquestions.length);
      return aptquestions[randomIndex];
    },
    getAllQuestions: async () => {
      return aptquestions;
    },
  };
  