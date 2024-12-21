let sysmonquestions = [
  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 1?",
    answer: "Process Creation",
    hint: "This event monitors process creation.",
    blank: "xxxxxxx xxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-1",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 2?",
    answer: "File Creation Time Changed",
    hint: "This event tracks changes to file creation timestamps.",
    blank: "xxxx xxxxxxxx xxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-2",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 3?",
    answer: "Network Connection",
    hint: "This event records network connections initiated by a process.",
    blank: "xxxxxxx xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-3",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 4?",
    answer: "Sysmon Configuration Change",
    hint: "This event captures changes to the Sysmon configuration.",
    blank: "xxxxxx xxxxxxxxxxxxx xxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-4",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 5?",
    answer: "Process Terminated",
    hint: "This event logs process termination.",
    blank: "xxxxxxx xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-5",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 6?",
    answer: "Driver Loaded",
    hint: "This event reports when a driver is loaded into the system.",
    blank: "xxxxxx xxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-6",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 7?",
    answer: "Image Loaded",
    hint: "This event tracks image (DLL/PE) loads.",
    blank: "xxxxx xxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-7",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 8?",
    answer: "CreateRemoteThread Detected",
    hint: "This event detects remote thread creation.",
    blank: "xxxxxxxxxxxxxxxxxx xxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-8",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 9?",
    answer: "Raw Access to Disk",
    hint: "This event identifies raw access to disk.",
    blank: "xxx xxxxxx xx xxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-9",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 10?",
    answer: "Process Access",
    hint: "This event monitors access to processes.",
    blank: "xxxxxxx xxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-10",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 11?",
    answer: "File Created",
    hint: "This event logs file creation events.",
    blank: "xxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-11",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 12?",
    answer: "Registry Object Added or Modified",
    hint: "This event records registry modifications.",
    blank: "xxxxxxxx xxxxxx xxxxx xx xxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-12",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 13?",
    answer: "Registry Object Deleted",
    hint: "This event logs deleted registry objects.",
    blank: "xxxxxxxx xxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-13",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 14?",
    answer: "Registry Key and Value Queried",
    hint: "This event tracks registry queries.",
    blank: "xxxxxxxx xxx xxx xxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-14",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 15?",
    answer: "File Stream Created",
    hint: "This event logs alternate data stream (ADS) creation.",
    blank: "xxxx xxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-15",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 16?",
    answer: "Sysmon Service State Changed",
    hint: "This event monitors changes to the Sysmon service state.",
    blank: "xxxxxx xxxxxxx xxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-16",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 17?",
    answer: "Pipe Created",
    hint: "This event captures the creation of named pipes.",
    blank: "xxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-17",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 18?",
    answer: "Pipe Connected",
    hint: "This event logs connections to named pipes.",
    blank: "xxxx xxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-18",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 19?",
    answer: "WMI Filter Created",
    hint: "This event tracks WMI filter creation.",
    blank: "xxx xxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-19",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 20?",
    answer: "WMI Filter Deleted",
    hint: "This event logs deleted WMI filters.",
    blank: "xxx xxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-20",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 21?",
    answer: "WMI Consumer Created",
    hint: "This event monitors WMI consumer creation.",
    blank: "xxx xxxxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-21",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 22?",
    answer: "WMI Consumer Deleted",
    hint: "This event logs deleted WMI consumers.",
    blank: "xxx xxxxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-22",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 23?",
    answer: "WMI Binding Created",
    hint: "This event tracks the creation of WMI bindings.",
    blank: "xxx xxxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-23",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 24?",
    answer: "WMI Binding Deleted",
    hint: "This event logs deleted WMI bindings.",
    blank: "xxx xxxxxxx xxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-24",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 25?",
    answer: "DNS Query",
    hint: "This event monitors DNS query activity.",
    blank: "xxx xxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-25",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 26?",
    answer: "File Delete Detected",
    hint: "This event logs file deletions.",
    blank: "xxxx xxxxxx xxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-26",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 27?",
    answer: "File Delete Logged",
    hint: "This event logs when file deletions are recorded.",
    blank: "xxxx xxxxxx xxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-27",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 28?",
    answer: "File System Operation",
    hint: "This event monitors file system operations.",
    blank: "xxxx xxxxxx xxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-28",
  },

  {
    category: "Sysmon Event IDs",
    question: "What is the Sysmon EventID 29?",
    answer: "Error",
    hint: "This event records Sysmon errors.",
    blank: "xxxxx",
    review:
      "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-29",
  },
];

module.exports = {
  category: "Sysmon",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * sysmonquestions.length);
    return sysmonquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return sysmonquestions;
  },
};
