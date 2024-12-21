let sysinternalsquestions = [
    {
      category: "Sysinternals",
      question: "What is the purpose of Process Explorer?",
      answer: "Monitor processes",
      hint: "It provides a detailed view of running processes.",
      blank: "xxxxxxx xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer>",
    },
    {
      category: "Sysinternals",
      question: "What tool is used to capture and analyze file system activity?",
      answer: "Procmon",
      hint: "Short for Process Monitor.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/procmon>",
    },
    {
      category: "Sysinternals",
      question: "What tool is used to monitor network activity in real time?",
      answer: "TCPView",
      hint: "Tracks TCP connections.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview>",
    },
    {
      category: "Sysinternals",
      question: "Which tool provides detailed system and kernel debugging?",
      answer: "WinDbg",
      hint: "Windows debugger.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/>",
    },
    {
      category: "Sysinternals",
      question: "What tool is used for viewing and managing autostart entries?",
      answer: "Autoruns",
      hint: "Shows startup programs.",
      blank: "xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of BgInfo?",
      answer: "Display system information",
      hint: "Shows system details on the desktop.",
      blank: "xxxxxxx xxxxxx xxxxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/bginfo>",
    },
    {
      category: "Sysinternals",
      question: "What tool analyzes and displays hard drive usage?",
      answer: "Disk Usage (DU)",
      hint: "Shows directory sizes.",
      blank: "xxxx xxxxx (xx)",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/du>",
    },
    {
      category: "Sysinternals",
      question: "Which tool provides a command-line utility for process management?",
      answer: "PsExec",
      hint: "Execute processes remotely.",
      blank: "xxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/psexec>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of AccessChk?",
      answer: "View permissions",
      hint: "Checks access rights for files, folders, and registry keys.",
      blank: "xxxx xxxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/accesschk>",
    },
    {
      category: "Sysinternals",
      question: "What tool can reveal hidden files and directories on NTFS?",
      answer: "NTFSInfo",
      hint: "Provides details on NTFS metadata.",
      blank: "xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/ntfsinfo>",
    },
    {
      category: "Sysinternals",
      question: "What tool provides insight into DLL usage by applications?",
      answer: "ListDLLs",
      hint: "Lists loaded DLLs.",
      blank: "xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/listdlls>",
    },
    {
      category: "Sysinternals",
      question: "What tool identifies which process has a file open?",
      answer: "Handle",
      hint: "Checks file handles.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/handle>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of SDelete?",
      answer: "Securely delete files",
      hint: "Overwrites data for secure removal.",
      blank: "xxxxxxx xxxxxx xxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/sdelete>",
    },
    {
      category: "Sysinternals",
      question: "What tool is used to monitor Windows services in real time?",
      answer: "PsService",
      hint: "Manages services.",
      blank: "xxxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/psservice>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of ZoomIt?",
      answer: "Screen zooming",
      hint: "Great for presentations.",
      blank: "xxxxxx xxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit>",
    },
    {
      category: "Sysinternals",
      question: "What tool provides detailed information about active handles?",
      answer: "Handle",
      hint: "Tracks handle usage.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/handle>",
    },
    {
      category: "Sysinternals",
      question: "What does RAMMap analyze?",
      answer: "Memory usage",
      hint: "Details physical memory allocation.",
      blank: "xxxxxx xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/rammap>",
    },
    {
      category: "Sysinternals",
      question: "What tool helps identify CPU and memory usage per process?",
      answer: "VMMap",
      hint: "Memory usage analysis.",
      blank: "xxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/vmmap>",
    },
    {
      category: "Sysinternals",
      question: "What tool tracks active TCP connections on a system?",
      answer: "TCPView",
      hint: "Tracks network traffic.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview>",
    },
    {
      category: "Sysinternals",
      question: "Which tool checks registry keys for startup items?",
      answer: "Autoruns",
      hint: "Startup program analysis.",
      blank: "xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns>",
    },
    {
      category: "Sysinternals",
      question: "What does Process Monitor primarily track?",
      answer: "File and registry activity",
      hint: "Real-time system activity.",
      blank: "xxxx xxx xxxxxxxxx xxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/procmon>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of SigCheck?",
      answer: "Verify file signatures",
      hint: "Checks digital signatures.",
      blank: "xxxxxx xxxx xxxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/sigcheck>",
    },
    {
      category: "Sysinternals",
      question: "Which tool provides a graphical overview of disk space usage?",
      answer: "Disk2vhd",
      hint: "Graphical disk visualization.",
      blank: "xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/disk2vhd>",
    },
    {
      category: "Sysinternals",
      question: "What tool helps with remote system management?",
      answer: "PsTools",
      hint: "Collection of remote utilities.",
      blank: "xxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/pstools>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of Coreinfo?",
      answer: "Display CPU information",
      hint: "Shows processor features.",
      blank: "xxxxxx xxx xxxxxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/coreinfo>",
    },
    {
      category: "Sysinternals",
      question: "What tool is used to analyze threads in a process?",
      answer: "ProcDump",
      hint: "Debugging crashes.",
      blank: "xxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/procdump>",
    },
    {
      category: "Sysinternals",
      question: "What tool generates system memory dumps?",
      answer: "DumpIt",
      hint: "Memory analysis.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/procdump>",
    },
    {
      category: "Sysinternals",
      question: "Which tool identifies Windows kernel drivers?",
      answer: "LiveKd",
      hint: "Analyzes kernel dumps.",
      blank: "xxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/livekd>",
    },
    {
      category: "Sysinternals",
      question: "What tool identifies duplicate files in storage?",
      answer: "DupFinder",
      hint: "Finds duplicate files.",
      blank: "xxxxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/dupfinder>",
    },
    {
      category: "Sysinternals",
      question: "What is the purpose of Sync?",
      answer: "Flush file system buffers",
      hint: "Writes all buffers to disk.",
      blank: "xxxxx xxxx xxxxxx xxxxxxx",
      review:
        "<https://learn.microsoft.com/en-us/sysinternals/downloads/sync>",
    },
  ];
  
  module.exports = {
    category: "Sysinternals",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * sysinternalsquestions.length);
      return sysinternalsquestions[randomIndex];
    },
    getAllQuestions: async () => {
      return sysinternalsquestions;
    },
  };
  