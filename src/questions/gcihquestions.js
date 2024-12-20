let gcihquestions = [
  {
    category: "GCIH",
    question: "What application uses hook.js to attack victims from the browser?",
    answer: "BeEF",
    hint: "MOOOOO",
    blank: "xxxx",
    review: "<https://youtu.be/etqw6MpisYw?si=c2ae_m0xywwBGZan>"
  },
  {
    category: "GCIH",
    question: "What is the primary purpose of incident handling?",
    answer: "Minimize damage",
    hint: "Focus is on reducing harm.",
    blank: "xxxx",
    review: "Refer to incident response lifecycle documents."
  },
  {
    category: "GCIH",
    question: "Which tool is commonly used for packet sniffing in incident response?",
    answer: "Wireshark",
    hint: "Popular for network analysis.",
    blank: "xxxx",
    review: "<https://www.wireshark.org>"
  },
  {
    category: "GCIH",
    question: "What technique does Metasploit commonly use to exploit vulnerabilities?",
    answer: "Payload delivery",
    hint: "Think about how exploits are delivered.",
    blank: "xxxx",
    review: "<https://www.metasploit.com>"
  },
  {
    category: "GCIH",
    question: "What does TTP stand for in the context of threat analysis?",
    answer: "Tactics, Techniques, and Procedures",
    hint: "Three critical components of attacker behavior.",
    blank: "xxxx",
    review: "<https://attack.mitre.org>"
  },
  {
    category: "GCIH",
    question: "Which Nmap scan type is the most stealthy?",
    answer: "SYN scan",
    hint: "It’s also known as a half-open scan.",
    blank: "xxxx",
    review: "<https://nmap.org/book/man-port-scanning-techniques.html>"
  },
  {
    category: "GCIH",
    question: "What is the primary purpose of a honeypot?",
    answer: "Deception and detection",
    hint: "Used to lure attackers.",
    blank: "xxxx",
    review: "<https://www.sans.org/white-papers/honeypots-introduction/>"
  },
  {
    category: "GCIH",
    question: "What is the first phase of the incident response process?",
    answer: "Preparation",
    hint: "Think about planning and readiness.",
    blank: "xxxx",
    review: "Refer to the SANS incident response process."
  },
  {
    category: "GCIH",
    question: "What is a malicious software designed to steal passwords called?",
    answer: "Keylogger",
    hint: "Tracks keystrokes.",
    blank: "xxxx",
    review: "<https://www.sans.org/cyber-security-skills/what-are-keyloggers/>"
  },
  {
    category: "GCIH",
    question: "What type of attack involves overwhelming a target with traffic?",
    answer: "Denial of Service",
    hint: "Also known as DoS.",
    blank: "xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>"
  },
  {
    category: "GCIH",
    question: "What type of malware locks users out of their system until payment is made?",
    answer: "Ransomware",
    hint: "Encrypts your files and demands payment.",
    blank: "xxxx",
    review: "<https://www.cisa.gov/ransomware>"
  },
  {
    category: "GCIH",
    question: "What protocol analyzer is used to monitor network traffic?",
    answer: "Wireshark",
    hint: "Open-source and widely used.",
    blank: "xxxx",
    review: "<https://www.wireshark.org>"
  },
  {
    category: "GCIH",
    question: "What type of attack relies on exploiting trust in DNS?",
    answer: "DNS poisoning",
    hint: "Tampering with DNS records.",
    blank: "xxxx",
    review: "<https://www.cloudflare.com/learning/dns/dns-cache-poisoning/>"
  },
  {
    category: "GCIH",
    question: "What is the primary objective of reconnaissance in a cyberattack?",
    answer: "Gather information",
    hint: "This phase involves research and planning.",
    blank: "xxxx",
    review: "<https://attack.mitre.org/tactics/TA0043/>"
  },
  {
    category: "GCIH",
    question: "What type of fileless attack uses PowerShell for exploitation?",
    answer: "Living off the land",
    hint: "Relies on legitimate tools.",
    blank: "xxxx",
    review: "<https://www.sans.org/blog/lotl-living-off-the-land-attacks/>"
  },
  {
    category: "GCIH",
    question: "Which protocol is commonly exploited in man-in-the-middle attacks?",
    answer: "ARP",
    hint: "Related to address resolution.",
    blank: "xxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/arp.html>"
  },
  {
    category: "GCIH",
    question: "What type of attack focuses on exploiting human vulnerabilities?",
    answer: "Social engineering",
    hint: "Manipulating people.",
    blank: "xxxx",
    review: "<https://www.sans.org/cyber-security-skills/what-is-social-engineering/>"
  },
  {
    category: "GCIH",
    question: "What command-line tool can be used to check network connectivity?",
    answer: "Ping",
    hint: "ICMP echo requests.",
    blank: "xxxx",
    review: "<https://www.sans.org/tools/using-ping-for-network-diagnostics/>"
  },
  {
    category: "GCIH",
    question: "What attack method floods a target with SYN packets?",
    answer: "SYN flood",
    hint: "Denial of Service variant.",
    blank: "xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/syn-flood-ddos-attack/>"
  },
  {
    category: "GCIH",
    question: "What is the primary benefit of log aggregation in incident response?",
    answer: "Centralized analysis",
    hint: "Makes it easier to correlate events.",
    blank: "xxxx",
    review: "<https://www.splunk.com>"
  }
];

module.exports = {
  category: "GCIH",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * gcihquestions.length);
    return gcihquestions[randomIndex];
  }
};
