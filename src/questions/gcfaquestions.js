let gcfaquestions = [
    {
      category: "GCFA",
      question: "What is the primary purpose of a forensic write blocker?",
      answer: "Prevent data modification",
      hint: "Ensures original evidence remains intact.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/forensic-write-blockers/>"
    },
    {
      category: "GCFA",
      question: "Which tool is commonly used for memory forensics?",
      answer: "Volatility",
      hint: "A Python-based framework.",
      blank: "xxxx",
      review: "<https://www.volatilityfoundation.org/>"
    },
    {
      category: "GCFA",
      question: "What is the primary focus of disk imaging in forensics?",
      answer: "Create an exact copy",
      hint: "Preserves evidence for analysis.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/disk-imaging/>"
    },
    {
      category: "GCFA",
      question: "What type of file system metadata tracks file creation and modification times?",
      answer: "Timestamps",
      hint: "Found in NTFS and other systems.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/file-system-timestamps/>"
    },
    {
      category: "GCFA",
      question: "Which Linux command is used to display open files and processes?",
      answer: "lsof",
      hint: "Lists open files.",
      blank: "xxxx",
      review: "<https://linux.die.net/man/8/lsof>"
    },
    {
      category: "GCFA",
      question: "What is the main purpose of a hash value in digital forensics?",
      answer: "Ensure data integrity",
      hint: "Used to verify evidence remains unaltered.",
      blank: "xxxx",
      review: "<https://www.sans.org/tools/hash-values-in-forensics/>"
    },
    {
      category: "GCFA",
      question: "Which tool is often used for analyzing Windows event logs?",
      answer: "Event Viewer",
      hint: "Built into Windows systems.",
      blank: "xxxx",
      review: "<https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/event-viewer>"
    },
    {
      category: "GCFA",
      question: "What does the acronym MFT stand for in the context of NTFS?",
      answer: "Master File Table",
      hint: "Tracks all files in the file system.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/mft-analysis/>"
    },
    {
      category: "GCFA",
      question: "Which log file is critical for analyzing user authentication in Linux?",
      answer: "/var/log/auth.log",
      hint: "Tracks authentication attempts.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/linux-log-analysis/>"
    },
    {
      category: "GCFA",
      question: "What is the primary purpose of timeline analysis in digital forensics?",
      answer: "Reconstruct events",
      hint: "Helps understand sequence of actions.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/timeline-analysis/>"
    },
    {
      category: "GCFA",
      question: "Which protocol is often analyzed to detect network-based attacks?",
      answer: "HTTP",
      hint: "Used for web traffic.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/network-forensics/>"
    },
    {
      category: "GCFA",
      question: "What type of malware is designed to provide persistent unauthorized access?",
      answer: "Rootkit",
      hint: "Operates at a low level.",
      blank: "xxxx",
      review: "<https://www.sans.org/cyber-security-skills/rootkits/>"
    },
    {
      category: "GCFA",
      question: "Which forensic technique is used to recover deleted files?",
      answer: "File carving",
      hint: "Analyzes raw data blocks.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/file-carving/>"
    },
    {
      category: "GCFA",
      question: "What tool is commonly used to capture and analyze network traffic?",
      answer: "Wireshark",
      hint: "Open-source packet analyzer.",
      blank: "xxxx",
      review: "<https://www.wireshark.org/>"
    },
    {
      category: "GCFA",
      question: "What is the purpose of the chain of custody in digital forensics?",
      answer: "Maintain evidence integrity",
      hint: "Tracks who handled the evidence.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/chain-of-custody/>"
    },
    {
      category: "GCFA",
      question: "Which file system is most commonly used in Windows systems?",
      answer: "NTFS",
      hint: "Supports large files and metadata.",
      blank: "xxxx",
      review: "<https://www.sans.org/cyber-security-skills/ntfs/>"
    },
    {
      category: "GCFA",
      question: "What is the purpose of volatile memory acquisition?",
      answer: "Capture data in RAM",
      hint: "Critical for live analysis.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/memory-forensics/>"
    },
    {
      category: "GCFA",
      question: "What type of evidence includes logs, emails, and documents?",
      answer: "Digital evidence",
      hint: "Anything stored electronically.",
      blank: "xxxx",
      review: "<https://www.sans.org/tools/digital-evidence/>"
    },
    {
      category: "GCFA",
      question: "What forensic technique focuses on identifying patterns of network traffic?",
      answer: "Traffic analysis",
      hint: "Looks at data flow.",
      blank: "xxxx",
      review: "<https://www.sans.org/white-papers/traffic-analysis/>"
    },
    {
      category: "GCFA",
      question: "Which Windows utility is used to analyze disk usage?",
      answer: "Disk Management",
      hint: "Manages partitions and volumes.",
      blank: "xxxx",
      review: "<https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/disk-management>"
    }
  ];
  
module.exports = {
  category: "GCFA",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * gcfaquestions.length);
    return gcfaquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return gcfaquestions;
  },
};