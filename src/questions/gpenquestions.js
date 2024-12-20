let gpenQuestions = [
    {
      category: "SANS GPEN",
      question: "What is the primary purpose of penetration testing?",
      answer: "Find vulnerabilities",
      hint: "Identify weaknesses.",
      blank: "xxxx xxxxxxxxxxxxxx",
      review: "<https://www.sans.org/cyber-security-skills/penetration-testing/>"
    },
    {
      category: "SANS GPEN",
      question: "What command-line tool is used to discover live hosts on a network?",
      answer: "Nmap",
      hint: "Network mapper.",
      blank: "xxxx",
      review: "<https://nmap.org>"
    },
    {
      category: "SANS GPEN",
      question: "What type of testing involves mimicking an insider threat?",
      answer: "Gray box",
      hint: "Limited information.",
      blank: "xxxx xxx",
      review: "<https://www.imperva.com/learn/application-security/gray-box-testing/>"
    },
    {
      category: "SANS GPEN",
      question: "What Metasploit component is used to execute an attack?",
      answer: "Payload",
      hint: "Delivered by exploit.",
      blank: "xxxxxxx",
      review: "<https://www.metasploit.com>"
    },
    {
      category: "SANS GPEN",
      question: "What technique involves sending falsified emails to trick users?",
      answer: "Phishing",
      hint: "Email-based attack.",
      blank: "xxxxxxxx",
      review: "<https://www.cisa.gov/phishing>"
    },
    {
      category: "SANS GPEN",
      question: "What is a tool for brute-forcing SSH credentials?",
      answer: "Hydra",
      hint: "Password cracker.",
      blank: "xxxxx",
      review: "<https://tools.kali.org/password-attacks/hydra>"
    },
    {
      category: "SANS GPEN",
      question: "What framework is used to simulate and test cyberattacks?",
      answer: "MITRE ATT&CK",
      hint: "Adversarial tactics.",
      blank: "xxxxx xxxxxx",
      review: "<https://attack.mitre.org>"
    },
    {
      category: "SANS GPEN",
      question: "What does C2 stand for in penetration testing?",
      answer: "Command and control",
      hint: "Remote management.",
      blank: "xxxxxxx xxx xxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Command_and_control_(malware)>"
    },
    {
      category: "SANS GPEN",
      question: "What port does SSH use by default?",
      answer: "22",
      hint: "Remote login.",
      blank: "xx",
      review: "<https://en.wikipedia.org/wiki/Secure_Shell>"
    },
    {
      category: "SANS GPEN",
      question: "What tool is commonly used for packet capture?",
      answer: "Wireshark",
      hint: "Network analysis.",
      blank: "xxxxxxxxx",
      review: "<https://www.wireshark.org>"
    },
    {
      category: "SANS GPEN",
      question: "What is the first phase of a penetration test?",
      answer: "Reconnaissance",
      hint: "Gather information.",
      blank: "xxxxxxxxxxxxxx",
      review: "<https://owasp.org/www-community/Reconnaissance_Phase>"
    },
    {
      category: "SANS GPEN",
      question: "What attack exploits DNS vulnerabilities?",
      answer: "DNS poisoning",
      hint: "Cache manipulation.",
      blank: "xxx xxxxxxxxxx",
      review: "<https://www.cloudflare.com/learning/dns/dns-cache-poisoning/>"
    },
    {
      category: "SANS GPEN",
      question: "What is the process of escalating user permissions?",
      answer: "Privilege escalation",
      hint: "Gain higher access.",
      blank: "xxxxxxxx xxxxxxxxxx",
      review: "<https://www.acunetix.com/blog/articles/privilege-escalation/>"
    },
    {
      category: "SANS GPEN",
      question: "What framework helps assess the effectiveness of security?",
      answer: "OSSTMM",
      hint: "Testing methodology.",
      blank: "xxxxxxx",
      review: "<https://www.isecom.org/OSSTMM>"
    },
    {
      category: "SANS GPEN",
      question: "What is the primary function of a vulnerability scanner?",
      answer: "Find weaknesses",
      hint: "Identify vulnerabilities.",
      blank: "xxxx xxxxxxxxxx",
      review: "<https://www.tenable.com/products/nessus>"
    },
    {
      category: "SANS GPEN",
      question: "What type of scan identifies open ports?",
      answer: "Port scan",
      hint: "Enumerates services.",
      blank: "xxxx xxxx",
      review: "<https://nmap.org/book/man-port-scanning-basics.html>"
    },
    {
      category: "SANS GPEN",
      question: "What type of malware encrypts data and demands payment?",
      answer: "Ransomware",
      hint: "Locks files.",
      blank: "xxxxxxxxxx",
      review: "<https://www.cisa.gov/ransomware>"
    },
    {
      category: "SANS GPEN",
      question: "What attack sends numerous SYN packets to exhaust resources?",
      answer: "SYN flood",
      hint: "Denial of Service.",
      blank: "xxx xxxxx",
      review: "<https://www.cloudflare.com/learning/ddos/syn-flood-ddos-attack/>"
    },
    {
      category: "SANS GPEN",
      question: "What tool is used to crack password hashes?",
      answer: "Hashcat",
      hint: "GPU-based cracker.",
      blank: "xxxxxxx",
      review: "<https://hashcat.net/hashcat/>"
    },
    {
      category: "SANS GPEN",
      question: "What is the final phase of penetration testing?",
      answer: "Reporting",
      hint: "Summarize findings.",
      blank: "xxxxxxxx",
      review: "<https://www.sans.org/white-papers/penetration-testing-reporting/>"
    },
    {
      category: "SANS GPEN",
      question: "What protocol is used to secure web traffic?",
      answer: "HTTPS",
      hint: "Encrypted HTTP.",
      blank: "xxxxx",
      review: "<https://en.wikipedia.org/wiki/HTTPS>"
    },
    {
      category: "SANS GPEN",
      question: "What does RFI stand for in web vulnerabilities?",
      answer: "Remote file inclusion",
      hint: "Load remote files.",
      blank: "xxxxxx xxxx xxxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/Remote_File_Inclusion>"
    },
    {
      category: "SANS GPEN",
      question: "What does XSS stand for?",
      answer: "Cross-site scripting",
      hint: "Inject client-side code.",
      blank: "xxxxxxxxxxx xxxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/xss/>"
    },
    {
      category: "SANS GPEN",
      question: "What type of testing simulates a real-world attacker?",
      answer: "Red teaming",
      hint: "Adversarial simulation.",
      blank: "xxx xxxxxxx",
      review: "<https://www.sans.org/cyber-security-skills/red-teaming/>"
    },
    {
      category: "SANS GPEN",
      question: "What vulnerability involves unsanitized user input?",
      answer: "Injection",
      hint: "Unvalidated input.",
      blank: "xxxxxxxxx",
      review: "<https://owasp.org/www-community/attacks/Injection>"
    },
    {
      category: "SANS GPEN",
      question: "What tool is commonly used to intercept web traffic?",
      answer: "Burp Suite",
      hint: "Web application testing.",
      blank: "xxxx xxxxx",
      review: "<https://portswigger.net/burp>"
    },
    {
      category: "SANS GPEN",
      question: "What port is used by RDP by default?",
      answer: "3389",
      hint: "Remote desktop.",
      blank: "xxxx",
      review: "<https://en.wikipedia.org/wiki/Remote_Desktop_Protocol>"
    },
    {
      category: "SANS GPEN",
      question: "What type of attack involves tricking DNS resolution?",
      answer: "DNS spoofing",
      hint: "Tamper with DNS.",
      blank: "xxx xxxxxxxx",
      review: "<https://www.cloudflare.com/learning/dns/dns-spoofing/>"
    },
    {
      category: "SANS GPEN",
      question: "What term refers to passive information gathering?",
      answer: "OSINT",
      hint: "Open-source intelligence.",
      blank: "xxxxx",
      review: "<https://www.sans.org/cyber-security-skills/open-source-intelligence-osint/>"
    },
    {
      category: "SANS GPEN",
      question: "What is the process of identifying and exploiting trust relationships?",
      answer: "Pivoting",
      hint: "Move through network.",
      blank: "xxxxxxxx",
      review: "<https://www.metasploit.com/what-is-pivoting>"
    }
  ];
  
  module.exports = {
    category: "SANS GPEN",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * gpenQuestions.length);
      return gpenQuestions[randomIndex];
    }
  };
  