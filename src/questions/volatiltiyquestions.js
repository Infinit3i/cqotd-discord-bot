let volatilityquestions = [
  {
    category: "Volatility",
    question: "What is Volatility used for?",
    answer: "Memory forensics",
    hint: "Analyzes RAM.",
    blank: "xxxxxx xxxxxxxxx",
    review: "https://www.volatilityfoundation.org/",
  },
  {
    category: "Volatility",
    question: "Who maintains Volatility?",
    answer: "Volatility Foundation",
    hint: "Nonprofit organization.",
    blank: "xxxxxxxxxx xxxxxxxxxx",
    review: "https://www.volatilityfoundation.org/",
  },
  {
    category: "Volatility",
    question: "What file type does Volatility analyze?",
    answer: "Memory dumps",
    hint: "Snapshots of RAM.",
    blank: "xxxxxx xxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin lists active processes in memory?",
    answer: "pslist",
    hint: "Processes list.",
    blank: "xxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin retrieves network connections?",
    answer: "netscan",
    hint: "Network scanner.",
    blank: "xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What is the command to specify the profile in Volatility?",
    answer: "--profile",
    hint: "Defines OS and architecture.",
    blank: "xxxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What Volatility plugin lists DLLs for a process?",
    answer: "dlllist",
    hint: "Dynamic libraries.",
    blank: "xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What does the `filescan` plugin do?",
    answer: "Scans for file objects",
    hint: "Searches memory for file-related data.",
    blank: "xxxxx xxx xxxx xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin extracts command history from memory?",
    answer: "cmdscan",
    hint: "Tracks commands.",
    blank: "xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What does the `hivelist` plugin do?",
    answer: "Lists registry hives",
    hint: "Focuses on Windows registry.",
    blank: "xxxxx xxxxxxxxx xxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin identifies active threads in a process?",
    answer: "thrdscan",
    hint: "Threads scanner.",
    blank: "xxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What is the purpose of the `dumpfiles` plugin?",
    answer: "Extract files from memory",
    hint: "Recovers data.",
    blank: "xxxxxx xxxxx xxxx xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin extracts browser history from memory?",
    answer: "chromehistory",
    hint: "Focuses on Chrome.",
    blank: "xxxxxxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin lists active handles for processes?",
    answer: "handles",
    hint: "Tracks open objects.",
    blank: "xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What command provides available plugins in Volatility?",
    answer: "--info",
    hint: "Information command.",
    blank: "xxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What does the `memdump` plugin do?",
    answer: "Dumps process memory",
    hint: "Extracts memory regions.",
    blank: "xxxxx xxxxxxx xxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What does the `malfind` plugin detect?",
    answer: "Malware",
    hint: "Focuses on suspicious activity.",
    blank: "xxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin extracts clipboard data from memory?",
    answer: "clipboards",
    hint: "Tracks copied content.",
    blank: "xxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin identifies loaded drivers in memory?",
    answer: "driverscan",
    hint: "Focuses on kernel drivers.",
    blank: "xxxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What does the `modules` plugin list?",
    answer: "Kernel modules",
    hint: "Focuses on OS components.",
    blank: "xxxxxx xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin retrieves user sessions from memory?",
    answer: "usersessions",
    hint: "Tracks logins.",
    blank: "xxxxxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What does the `timeliner` plugin generate?",
    answer: "Timeline of events",
    hint: "Chronological data.",
    blank: "xxxxxxxx xx xxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin searches for hidden processes?",
    answer: "psscan",
    hint: "Process scanner.",
    blank: "xxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin retrieves kernel debugging messages?",
    answer: "dbgprints",
    hint: "Tracks kernel messages.",
    blank: "xxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin identifies network packets in memory?",
    answer: "netscan",
    hint: "Focuses on network data.",
    blank: "xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin retrieves passwords stored in memory?",
    answer: "hashdump",
    hint: "Extracts password hashes.",
    blank: "xxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What command in Volatility specifies a memory file?",
    answer: "-f",
    hint: "Defines input file.",
    blank: "x-x",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin searches for hidden DLLs?",
    answer: "ldrmodules",
    hint: "Module loader focus.",
    blank: "xxxxxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What plugin extracts registry keys from memory?",
    answer: "regscan",
    hint: "Windows registry focus.",
    blank: "xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
  {
    category: "Volatility",
    question: "What is the purpose of Volatility Profiles?",
    answer: "Match OS version",
    hint: "Ensure compatibility.",
    blank: "xxxxx xx xxxxxxx",
    review: "https://www.volatilityfoundation.org/docs",
  },
];

module.exports = {
  category: "Volatility",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * volatilityquestions.length);
    return volatilityquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return volatilityquestions;
  },
};
