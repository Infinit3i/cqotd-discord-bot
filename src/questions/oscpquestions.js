let oscpQuestions = [
    {
      category: "OSCP",
      question: "What is the primary goal of penetration testing?",
      answer: "Identify vulnerabilities",
      hint: "Security weaknesses.",
      blank: "xxxxxxx xxxxxxxxxxxxxx",
      review: "<https://www.offensive-security.com>"
    },
    {
      category: "OSCP",
      question: "What is the default port for HTTP?",
      answer: "80",
      hint: "Web traffic.",
      blank: "xx",
      review: "<https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol>"
    },
    {
      category: "OSCP",
      question: "Which command-line tool is used to test open ports?",
      answer: "Nmap",
      hint: "Network scanner.",
      blank: "xxxx",
      review: "<https://nmap.org>"
    },
    {
      category: "OSCP",
      question: "What is the first step in penetration testing?",
      answer: "Reconnaissance",
      hint: "Information gathering.",
      blank: "xxxxxxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Reconnaissance>"
    },
    {
      category: "OSCP",
      question: "What type of attack sends falsified ARP messages?",
      answer: "ARP spoofing",
      hint: "Network manipulation.",
      blank: "xxx xxxxxxxxx",
      review: "<https://www.varonis.com/blog/arp-spoofing>"
    },
    {
      category: "OSCP",
      question: "Which tool is used for exploiting vulnerabilities?",
      answer: "Metasploit",
      hint: "Framework for exploits.",
      blank: "xxxxxxxxxx",
      review: "<https://www.metasploit.com>"
    },
    {
      category: "OSCP",
      question: "What type of vulnerability is exploited in SQL injection?",
      answer: "Improper input validation",
      hint: "Database attack.",
      blank: "xxxxxxxx xxxxxx xxxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/SQL_Injection>"
    },
    {
      category: "OSCP",
      question: "What protocol encrypts web traffic?",
      answer: "HTTPS",
      hint: "Secure HTTP.",
      blank: "xxxxx",
      review: "<https://en.wikipedia.org/wiki/HTTPS>"
    },
    {
      category: "OSCP",
      question: "What tool captures and analyzes network traffic?",
      answer: "Wireshark",
      hint: "Packet sniffer.",
      blank: "xxxxxxxxx",
      review: "<https://www.wireshark.org>"
    },
    {
      category: "OSCP",
      question: "What does XSS stand for?",
      answer: "Cross-site scripting",
      hint: "Injects client-side scripts.",
      blank: "xxxxxxxxxxxxxx xxxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/xss/>"
    },
    {
      category: "OSCP",
      question: "What does RFI stand for in vulnerabilities?",
      answer: "Remote file inclusion",
      hint: "Load files remotely.",
      blank: "xxxxxx xxxx xxxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/Remote_File_Inclusion>"
    },
    {
      category: "OSCP",
      question: "What tool brute-forces SSH credentials?",
      answer: "Hydra",
      hint: "Password cracker.",
      blank: "xxxxx",
      review: "<https://tools.kali.org/password-attacks/hydra>"
    },
    {
      category: "OSCP",
      question: "What type of testing involves zero knowledge of the system?",
      answer: "Black box",
      hint: "No prior information.",
      blank: "xxxxx xxx",
      review: "<https://en.wikipedia.org/wiki/Black-box_testing>"
    },
    {
      category: "OSCP",
      question: "What does TTP stand for in adversarial behavior?",
      answer: "Tactics, techniques",
      hint: "Attack behaviors.",
      blank: "xxxxxxx xxxxxxxxx",
      review: "<https://attack.mitre.org>"
    },
    {
      category: "OSCP",
      question: "What tool is used for web application testing?",
      answer: "Burp Suite",
      hint: "Intercepts traffic.",
      blank: "xxxx xxxxx",
      review: "<https://portswigger.net/burp>"
    },
    {
      category: "OSCP",
      question: "What type of malware encrypts files and demands payment?",
      answer: "Ransomware",
      hint: "Locks your data.",
      blank: "xxxxxxxxxx",
      review: "<https://www.cisa.gov/ransomware>"
    },
    {
      category: "OSCP",
      question: "What type of attack uses DNS to redirect traffic?",
      answer: "DNS spoofing",
      hint: "Tampering with DNS.",
      blank: "xxx xxxxxxxx",
      review: "<https://www.cloudflare.com/learning/dns/dns-spoofing/>"
    },
    {
      category: "OSCP",
      question: "What does OSINT stand for?",
      answer: "Open source intelligence",
      hint: "Public information.",
      blank: "xxxx xxxxxx xxxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Open-source_intelligence>"
    },
    {
      category: "OSCP",
      question: "What vulnerability involves unprotected memory allocation?",
      answer: "Buffer overflow",
      hint: "Memory corruption.",
      blank: "xxxxxx xxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/Buffer_Overflow>"
    },
    {
      category: "OSCP",
      question: "What phase follows exploitation in penetration testing?",
      answer: "Post-exploitation",
      hint: "After initial access.",
      blank: "xxxx-xxxxxxxxxxxx",
      review: "<https://www.offensive-security.com>"
    },
    {
      category: "OSCP",
      question: "What tool is used to crack hashes?",
      answer: "John the Ripper",
      hint: "Password cracking.",
      blank: "xxxx xxx xxxxxx",
      review: "<https://www.openwall.com/john/>"
    },
    {
      category: "OSCP",
      question: "What technique allows lateral movement in a network?",
      answer: "Pivoting",
      hint: "Expanding access.",
      blank: "xxxxxxxx",
      review: "<https://www.offensive-security.com>"
    },
    {
      category: "OSCP",
      question: "What type of exploit involves binary manipulation?",
      answer: "Binary exploitation",
      hint: "Code-level attack.",
      blank: "xxxxxx xxxxxxxxxxx",
      review: "<https://www.exploit-db.com>"
    },
    {
      category: "OSCP",
      question: "What process involves analyzing log files?",
      answer: "Log analysis",
      hint: "Review system logs.",
      blank: "xxx xxxxxxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "OSCP",
      question: "What port does FTP use by default?",
      answer: "21",
      hint: "File transfer.",
      blank: "xx",
      review: "<https://en.wikipedia.org/wiki/File_Transfer_Protocol>"
    },
    {
      category: "OSCP",
      question: "What protocol is used for secure shell access?",
      answer: "SSH",
      hint: "Secure remote login.",
      blank: "xxx",
      review: "<https://en.wikipedia.org/wiki/Secure_Shell>"
    },
    {
      category: "OSCP",
      question: "What attack vector exploits client-side weaknesses?",
      answer: "Client-side",
      hint: "Browser-based attacks.",
      blank: "xxxxxx-xxxx",
      review: "<https://owasp.org/www-community/attacks/>"
    },
    {
      category: "OSCP",
      question: "What phase includes creating a report for stakeholders?",
      answer: "Reporting",
      hint: "Final phase.",
      blank: "xxxxxxxxx",
      review: "<https://www.offensive-security.com>"
    },
    {
      category: "OSCP",
      question: "What type of testing simulates a real-world attacker?",
      answer: "Red teaming",
      hint: "Adversarial simulation.",
      blank: "xxx xxxxxxx",
      review: "<https://www.offensive-security.com>"
    },
    {
      category: "OSCP",
      question: "What scripting language is commonly targeted in fileless attacks?",
      answer: "PowerShell",
      hint: "Windows scripting.",
      blank: "xxxxxxxxxx",
      review: "<https://docs.microsoft.com/en-us/powershell/>"
    }
  ];
  
module.exports = {
  category: "OSCP",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * oscpQuestions.length);
    return oscpQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return oscpQuestions;
  },
};  