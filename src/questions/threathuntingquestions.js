const threathuntingquestions = [
    {
      category: "Threat Hunting",
      question: "What log source is commonly analyzed to identify RDP brute force attempts?",
      answer: "Windows Event Logs",
      hint: "Look for Event ID 4625.",
      blank: "xxxxxxx xxxxx xxxx",
      review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4625>",
    },
    {
      category: "Threat Hunting",
      question: "What PowerShell command can be used to decode Base64 strings?",
      answer: "ConvertFrom-Base64",
      hint: "Used to analyze encoded scripts.",
      blank: "xxxxxxxxxx-xxxxxxx",
      review: "<https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertfrom-string>",
    },
    {
      category: "Threat Hunting",
      question: "What protocol is commonly associated with lateral movement using PsExec?",
      answer: "SMB",
      hint: "Port 445.",
      blank: "xxx",
      review: "<https://attack.mitre.org/techniques/T1570/>",
    },
    {
      category: "Threat Hunting",
      question: "What tool can decode Base64 strings in suspicious PowerShell commands?",
      answer: "CyberChef",
      hint: "Known as the 'Cyber Swiss Army Knife'.",
      blank: "xxxxxxxx",
      review: "<https://gchq.github.io/CyberChef/>",
    },
    {
      category: "Threat Hunting",
      question: "What Windows Event ID indicates a successful logon?",
      answer: "4624",
      hint: "Check for suspicious accounts logging in.",
      blank: "xxxx",
      review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4624>",
    },
    {
      category: "Threat Hunting",
      question: "What PowerShell command lists scheduled tasks on a system?",
      answer: "Get-ScheduledTask",
      hint: "Used to identify persistence mechanisms.",
      blank: "xxx-xxxxxxxxxxxxxx",
      review: "<https://learn.microsoft.com/en-us/powershell/module/scheduledtasks/get-scheduledtask>",
    },
    {
      category: "Threat Hunting",
      question: "Which SIEM field is used to filter Base64-encoded content?",
      answer: "CommandLine",
      hint: "Logs command-line arguments.",
      blank: "xxxxxxxxxx",
      review: "<https://attack.mitre.org/techniques/T1059/001/>",
    },
    {
      category: "Threat Hunting",
      question: "What port is commonly scanned by attackers for RDP access?",
      answer: "3389",
      hint: "Default RDP port.",
      blank: "xxxx",
      review: "<https://attack.mitre.org/techniques/T1021/001/>",
    },
    {
      category: "Threat Hunting",
      question: "What tool is used to analyze Windows Event Logs for threat patterns?",
      answer: "LogParser",
      hint: "Microsoft tool for log analysis.",
      blank: "xxxxxxxxx",
      review: "<https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/logparser>",
    },
    {
      category: "Threat Hunting",
      question: "What is the purpose of Event ID 1102?",
      answer: "Log cleared",
      hint: "Indicates potential log tampering.",
      blank: "xxxx xxxxxxx",
      review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-1102>",
    },
    {
      category: "Threat Hunting",
      question: "What type of PowerShell activity often indicates obfuscation?",
      answer: "Base64 encoding",
      hint: "Common in malicious scripts.",
      blank: "xxxxxx xxxxxxxxx",
      review: "<https://attack.mitre.org/techniques/T1059/001/>",
    },
    {
      category: "Threat Hunting",
      question: "What tool can be used to analyze malicious Office macros?",
      answer: "oletools",
      hint: "Python library for Office analysis.",
      blank: "xxxxxxxx",
      review: "<https://github.com/decalage2/oletools>",
    },
    {
      category: "Threat Hunting",
      question: "What is a key indicator of lateral movement via PsExec?",
      answer: "Admin$ share",
      hint: "Used for remote file transfers.",
      blank: "xxxxx$ xxxxx",
      review: "<https://attack.mitre.org/techniques/T1570/>",
    },
    {
      category: "Threat Hunting",
      question: "What is the default log file for Sysmon events?",
      answer: "Microsoft-Windows-Sysmon/Operational",
      hint: "Use this log source for detailed process monitoring.",
      blank: "xxxxxxxxx-xxxxxxxx-xxxxxxxx/xxxxxxxxxxxxxxx",
      review: "<https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon>",
    },
    {
      category: "Threat Hunting",
      question: "What Event ID detects the execution of WMI commands?",
      answer: "4688",
      hint: "Look for wmiprvse.exe.",
      blank: "xxxx",
      review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4688>",
    },
    {
      category: "Threat Hunting",
      question: "What is an example of a command that enables PowerShell script block logging?",
      answer: "Set-ExecutionPolicy",
      hint: "Used to configure execution policies.",
      blank: "xxx-xxxxxxxxxxxxxx",
      review: "<https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy>",
    },
    {
      category: "Threat Hunting",
      question: "What command in Linux finds Base64-encoded strings?",
      answer: "grep -E",
      hint: "Looks for patterns.",
      blank: "xxxx -x",
      review: "<https://linux.die.net/man/1/grep>",
    },
    {
      category: "Threat Hunting",
      question: "What Event ID is generated when a new process starts on Windows?",
      answer: "4688",
      hint: "Key for process monitoring.",
      blank: "xxxx",
      review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4688>",
    },
    {
      category: "Threat Hunting",
      question: "What log source should be reviewed for credential dumping activity?",
      answer: "Security logs",
      hint: "Contains Event ID 4624.",
      blank: "xxxxxxxx xxxx",
      review: "<https://attack.mitre.org/techniques/T1003/>",
    },
    {
      category: "Threat Hunting",
      question: "What tool is used to decode obfuscated JavaScript files?",
      answer: "JSDetox",
      hint: "Specializes in malicious JS.",
      blank: "xxxxxxxx",
      review: "<https://github.com/dzzie/jsdetox>",
    },
    {
      category: "Threat Hunting",
      question: "What technique is commonly used for persistence in Windows environments?",
      answer: "Scheduled tasks",
      hint: "Often configured by attackers.",
      blank: "xxxxxxxx xxxxxx",
      review: "<https://attack.mitre.org/techniques/T1053/>",
    },
    {
      category: "Threat Hunting",
      question: "What command lists all open network connections in Windows?",
      answer: "netstat",
      hint: "Shows active TCP connections.",
      blank: "xxxxxxx",
      review: "<https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat>",
    },
    {
      category: "Threat Hunting",
      question: "What protocol is commonly abused for data exfiltration?",
      answer: "DNS",
      hint: "Used to tunnel data.",
      blank: "xxx",
      review: "<https://attack.mitre.org/techniques/T1071/004/>",
    },
    {
      category: "Threat Hunting",
      question: "What Linux command lists all cron jobs?",
      answer: "crontab -l",
      hint: "Checks for persistence.",
      blank: "xxxxxxx -x",
      review: "<https://linux.die.net/man/1/crontab>",
    },
    {
      category: "Threat Hunting",
      question: "What Event ID is associated with service creation in Windows?",
      answer: "7045",
      hint: "Used for persistence.",
      blank: "xxxx",
      review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-7045>",
    },
    {
      category: "Threat Hunting",
      question: "What log source is crucial for identifying Mimikatz activity?",
      answer: "Security logs",
      hint: "Detects credential access.",
      blank: "xxxxxxxx xxxx",
      review: "<https://attack.mitre.org/software/S0002/>",
    },
    {
      category: "Threat Hunting",
      question: "What tool can detect malicious scripts in Windows systems?",
      answer: "Sysmon",
      hint: "Provides detailed event monitoring.",
      blank: "xxxxxx",
      review: "<https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon>",
    },
    {
      category: "Threat Hunting",
      question: "What is a common TTP for lateral movement in Linux environments?",
      answer: "SSH keys",
      hint: "Uses private keys for access.",
      blank: "xxx xxxx",
      review: "<https://attack.mitre.org/techniques/T1570/>",
    },
    {
      category: "Threat Hunting",
      question: "What type of tool is used to analyze PCAP files?",
      answer: "Wireshark",
      hint: "Packet analysis tool.",
      blank: "xxxxxxxxx",
      review: "<https://www.wireshark.org/>",
    },
    {
        category: "Threat Hunting",
        question: "What Event ID indicates a change to the audit policy?",
        answer: "4719",
        hint: "Occurs during policy tampering.",
        blank: "xxxx",
        review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4719>",
      },
      {
        category: "Threat Hunting",
        question: "What command shows running processes on Linux?",
        answer: "ps aux",
        hint: "Useful for detecting suspicious processes.",
        blank: "xx xxx",
        review: "<https://linux.die.net/man/1/ps>",
      },
      {
        category: "Threat Hunting",
        question: "What Event ID is associated with group membership changes?",
        answer: "4728",
        hint: "Indicates a potential privilege escalation.",
        blank: "xxxx",
        review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4728>",
      },
      {
        category: "Threat Hunting",
        question: "What tool analyzes process creation on Windows?",
        answer: "Procmon",
        hint: "Tracks real-time system activity.",
        blank: "xxxxxxx",
        review: "<https://learn.microsoft.com/en-us/sysinternals/downloads/procmon>",
      },
      {
        category: "Threat Hunting",
        question: "What port is typically used for HTTPS communications?",
        answer: "443",
        hint: "Secure web traffic.",
        blank: "xxx",
        review: "<https://www.cloudflare.com/en-gb/learning/ddos/glossary/open-port-443/>",
      },
      {
        category: "Threat Hunting",
        question: "What command lists installed services on Windows?",
        answer: "sc query",
        hint: "Checks for suspicious services.",
        blank: "xx xxxxx",
        review: "<https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sc-query>",
      },
      {
        category: "Threat Hunting",
        question: "What PowerShell cmdlet checks file integrity?",
        answer: "Get-FileHash",
        hint: "Generates hash values.",
        blank: "xxx-xxxxxxxx",
        review: "<https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash>",
      },
      {
        category: "Threat Hunting",
        question: "What tool visualizes network traffic for anomalies?",
        answer: "Kibana",
        hint: "Used with the ELK stack.",
        blank: "xxxxxx",
        review: "<https://www.elastic.co/kibana>",
      },
      {
        category: "Threat Hunting",
        question: "What log source is critical for identifying brute-force attacks?",
        answer: "Authentication logs",
        hint: "Monitor failed login attempts.",
        blank: "xxxxxxxxxxxxxx xxxx",
        review: "<https://attack.mitre.org/techniques/T1110/>",
      },
      {
        category: "Threat Hunting",
        question: "What log source is used to detect DNS tunneling?",
        answer: "DNS logs",
        hint: "Monitors unusual DNS queries.",
        blank: "xxx xxxx",
        review: "<https://attack.mitre.org/techniques/T1071/004/>",
      },
      {
        category: "Threat Hunting",
        question: "What command finds files with specific permissions in Linux?",
        answer: "find / -perm",
        hint: "Searches for potential backdoors.",
        blank: "xxxx / -xxxx",
        review: "<https://linux.die.net/man/1/find>",
      },
      {
        category: "Threat Hunting",
        question: "What tool is used to analyze memory dumps?",
        answer: "Volatility",
        hint: "Memory forensics tool.",
        blank: "xxxxxxxxxx",
        review: "<https://www.volatilityfoundation.org/>",
      },
      {
        category: "Threat Hunting",
        question: "What Event ID detects changes to a scheduled task?",
        answer: "4698",
        hint: "Indicates persistence mechanisms.",
        blank: "xxxx",
        review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4698>",
      },
      {
        category: "Threat Hunting",
        question: "What protocol is commonly used for lateral movement?",
        answer: "RDP",
        hint: "Default port is 3389.",
        blank: "xxx",
        review: "<https://attack.mitre.org/techniques/T1021/001/>",
      },
      {
        category: "Threat Hunting",
        question: "What command lists all loaded kernel modules in Linux?",
        answer: "lsmod",
        hint: "Monitors for malicious drivers.",
        blank: "xxxxx",
        review: "<https://linux.die.net/man/8/lsmod>",
      },
      {
        category: "Threat Hunting",
        question: "What is a common indicator of a golden ticket attack?",
        answer: "krbtgt",
        hint: "Abused for domain persistence.",
        blank: "xxxxxx",
        review: "<https://attack.mitre.org/techniques/T1558/001/>",
      },
      {
        category: "Threat Hunting",
        question: "What Event ID logs attempts to clear audit logs?",
        answer: "1102",
        hint: "Potential sign of tampering.",
        blank: "xxxx",
        review: "<https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-1102>",
      },
      {
        category: "Threat Hunting",
        question: "What command in Linux searches for Base64 patterns?",
        answer: "grep -E",
        hint: "Finds encoded strings.",
        blank: "xxxx -x",
        review: "<https://linux.die.net/man/1/grep>",
      },
      {
        category: "Threat Hunting",
        question: "What log source is critical for tracking PowerShell execution?",
        answer: "Script block logging",
        hint: "Monitors for suspicious commands.",
        blank: "xxxxxx xxxxx xxxxxxx",
        review: "<https://attack.mitre.org/techniques/T1059/001/>",
      },
      {
        category: "Threat Hunting",
        question: "What is the default port for SMB?",
        answer: "445",
        hint: "Used for file sharing.",
        blank: "xxx",
        review: "<https://attack.mitre.org/techniques/T1021/002/>",
      },
  ];
  
  module.exports = {
    category: "Threat Hunting",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * threathuntingquestions.length);
      return threathuntingquestions[randomIndex];
    },
    getAllQuestions: async () => {
      return threathuntingquestions;
    },
  };
  