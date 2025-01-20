let malwareDevelopmentQuestions = [
    {
      category: "Malware Development",
      question: "What type of malware encrypts a user's files and demands payment for decryption?",
      answer: "Ransomware",
      hint: "Demands a ransom.",
      blank: "xxxxxxxxxxx",
      review: "https://www.cisa.gov/ransomware",
    },
    {
      category: "Malware Development",
      question: "What type of malware records keystrokes to capture sensitive information?",
      answer: "Keylogger",
      hint: "Records your keys.",
      blank: "xxxxxxxxx",
      review: "https://www.kaspersky.com/resource-center/definitions/keylogger",
    },
    {
      category: "Malware Development",
      question: "What term describes malware designed to disguise itself as legitimate software?",
      answer: "Trojan horse",
      hint: "Named after an ancient strategy.",
      blank: "xxxxxx xxxxx",
      review: "https://www.avast.com/c-trojan",
    },
    {
      category: "Malware Development",
      question: "What type of malware replicates itself to spread to other devices?",
      answer: "Worm",
      hint: "A self-replicating threat.",
      blank: "xxxx",
      review: "https://www.cisa.gov/worm",
    },
    {
      category: "Malware Development",
      question: "What type of malware provides unauthorized backdoor access to a system?",
      answer: "Remote Access Trojan (RAT)",
      hint: "A malicious backdoor.",
      blank: "xxxxxx xxxxxx xxxxxx (xxx)",
      review: "https://www.cisco.com/c/en/us/products/security/advanced-malware-protection/index.html",
    },
    {
      category: "Malware Development",
      question: "What technique involves injecting malicious code into legitimate processes?",
      answer: "Code injection",
      hint: "Injects into processes.",
      blank: "xxxx xxxxxxxxx",
      review: "https://owasp.org/www-community/attacks/Code_Injection",
    },
    {
      category: "Malware Development",
      question: "What type of malware modifies the boot sector of a system?",
      answer: "Bootkit",
      hint: "Targets the boot process.",
      blank: "xxxxxxx",
      review: "https://www.trendmicro.com/vinfo/us/security/definition/bootkit",
    },
    {
      category: "Malware Development",
      question: "What is the term for malware that specifically targets Android devices?",
      answer: "Android malware",
      hint: "Targets a specific mobile OS.",
      blank: "xxxxxx xxxxxxx",
      review: "https://www.mcafee.com/blogs/mobile-security/android-malware/",
    },
    {
      category: "Malware Development",
      question: "What type of malware resides entirely in system memory to evade detection?",
      answer: "Fileless malware",
      hint: "Doesn't use files.",
      blank: "xxxxxxx xxxxxxx",
      review: "https://www.malwarebytes.com/fileless-malware",
    },
    {
      category: "Malware Development",
      question: "What is the purpose of a malware dropper?",
      answer: "To deliver other malicious payloads",
      hint: "Drops something worse.",
      blank: "xx xxxxxxx xxxxx xxxxxxxxx xxxxxxx",
      review: "https://www.kaspersky.com/resource-center/threats/malware-dropper",
    },
    {
      category: "Malware Development",
      question: "What type of malware hijacks advertisements for malicious purposes?",
      answer: "Adware",
      hint: "Annoying ads.",
      blank: "xxxxxx",
      review: "https://www.malwarebytes.com/adware",
    },
    {
      category: "Malware Development",
      question: "What is the primary goal of spyware?",
      answer: "To gather sensitive information",
      hint: "Spies on users.",
      blank: "xx xxxxxx xxxxxxxxx xxxxxxxxxxx",
      review: "https://www.kaspersky.com/resource-center/threats/what-is-spyware",
    },
    {
      category: "Malware Development",
      question: "What technique does polymorphic malware use to avoid detection?",
      answer: "Code mutation",
      hint: "Constantly changes its code.",
      blank: "xxxx xxxxxxxx",
      review: "https://www.kaspersky.com/resource-center/definitions/polymorphic-malware",
    },
    {
      category: "Malware Development",
      question: "What type of malware is used to mine cryptocurrency on infected devices?",
      answer: "Cryptojacker",
      hint: "Steals your computing power.",
      blank: "xxxxxxxxxxxx",
      review: "https://www.malwarebytes.com/cryptojacking",
    },
    {
      category: "Malware Development",
      question: "What type of malware disables security controls on a system?",
      answer: "Disabler",
      hint: "Turns off protection.",
      blank: "xxxxxxxx",
      review: "https://www.symantec.com/blogs/threat-intelligence",
    },
    {
      category: "Malware Development",
      question: "What technique involves hiding malware within legitimate software?",
      answer: "Packing",
      hint: "Compress and conceal.",
      blank: "xxxxxxx",
      review: "https://www.malwarebytes.com/resources/",
    },
    {
      category: "Malware Development",
      question: "What type of malware manipulates data to cause operational issues?",
      answer: "Data wiper",
      hint: "Destroys your data.",
      blank: "xxxx xxxxx",
      review: "https://www.trendmicro.com/vinfo/us/security/definition/data-wiper",
    },
    {
      category: "Malware Development",
      question: "What is the term for malware that waits for a specific trigger to execute?",
      answer: "Logic bomb",
      hint: "Triggered by conditions.",
      blank: "xxxxx xxxx",
      review: "https://www.csoonline.com/article/3254393/what-is-a-logic-bomb.html",
    },
    {
      category: "Malware Development",
      question: "What technique is used by malware to appear as a system process?",
      answer: "Process hollowing",
      hint: "Hollows out a process.",
      blank: "xxxxxxx xxxxxxxxx",
      review: "https://www.mitre.org/cybersecurity",
    },
    {
      category: "Malware Development",
      question: "What malware exploits vulnerabilities in document macros?",
      answer: "Macro virus",
      hint: "Attaches to office documents.",
      blank: "xxxxx xxxxx",
      review: "https://www.symantec.com/security-center/macro-virus",
    },
  ];
  
  module.exports = {
    category: "Malware Development",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * malwareDevelopmentQuestions.length);
      return malwareDevelopmentQuestions[randomIndex];
    },
    getAllQuestions: async () => {
      return malwareDevelopmentQuestions;
    },
  };
  