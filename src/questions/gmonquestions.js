let gmonQuestions = [
    {
      category: "GMON",
      question: "What is the primary goal of continuous monitoring?",
      answer: "Detect threats",
      hint: "Focus on threats.",
      blank: "xxxxxx xxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What type of attack does IDS monitor for?",
      answer: "Intrusion",
      hint: "Unauthorized access.",
      blank: "xxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Intrusion_detection_system>"
    },
    {
      category: "GMON",
      question: "What protocol is used for secure web traffic?",
      answer: "HTTPS",
      hint: "Secure HTTP.",
      blank: "xxxxx",
      review: "<https://en.wikipedia.org/wiki/HTTPS>"
    },
    {
      category: "GMON",
      question: "What does SIEM stand for?",
      answer: "Security information",
      hint: "Log management.",
      blank: "xxxxxxxx xxxxxxxxxxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "GMON",
      question: "What does SOC stand for?",
      answer: "Security operations",
      hint: "Incident response team.",
      blank: "xxxxxxxx xxxxxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What does EDR stand for?",
      answer: "Endpoint detection",
      hint: "Focus on endpoints.",
      blank: "xxxxxxxx xxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Endpoint_detection_and_response>"
    },
    {
      category: "GMON",
      question: "What is used to monitor network traffic?",
      answer: "Packet sniffer",
      hint: "Wireshark is one.",
      blank: "xxxxxx xxxxxxx",
      review: "<https://www.wireshark.org>"
    },
    {
      category: "GMON",
      question: "What type of monitoring focuses on internal systems?",
      answer: "Host-based",
      hint: "Runs on endpoints.",
      blank: "xxxx-xxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What is a primary function of log aggregation?",
      answer: "Correlation",
      hint: "Combines data.",
      blank: "xxxxxxxxxxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "GMON",
      question: "What tool is commonly used for analyzing logs?",
      answer: "Splunk",
      hint: "Popular SIEM tool.",
      blank: "xxxxxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "GMON",
      question: "What does NIST stand for?",
      answer: "National standards",
      hint: "Focus on frameworks.",
      blank: "xxxxxxxx xxxxxxxxx",
      review: "<https://www.nist.gov>"
    },
    {
      category: "GMON",
      question: "What does TTP stand for?",
      answer: "Tactics techniques",
      hint: "Adversarial behavior.",
      blank: "xxxxxxx xxxxxxxxx",
      review: "<https://attack.mitre.org>"
    },
    {
      category: "GMON",
      question: "What tool is used for analyzing memory dumps?",
      answer: "Volatility",
      hint: "Memory forensics.",
      blank: "xxxxxxxxxxx",
      review: "<https://www.volatilityfoundation.org>"
    },
    {
      category: "GMON",
      question: "What does IOC stand for?",
      answer: "Indicator compromise",
      hint: "Detect signs of attack.",
      blank: "xxxxxxxxx xxxxxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What is the primary focus of threat hunting?",
      answer: "Proactive detection",
      hint: "Search for threats.",
      blank: "xxxxxxxx xxxxxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What does SOAR stand for?",
      answer: "Security automation",
      hint: "Focus on response.",
      blank: "xxxxxxxxx xxxxxxxxxxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "GMON",
      question: "What is the primary purpose of baselining?",
      answer: "Normal behavior",
      hint: "Detect anomalies.",
      blank: "xxxxxx xxxxxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What is the focus of anomaly detection?",
      answer: "Unusual patterns",
      hint: "Behavior deviation.",
      blank: "xxxxxxx xxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Anomaly_detection>"
    },
    {
      category: "GMON",
      question: "What is the first phase of incident response?",
      answer: "Preparation",
      hint: "Plan ahead.",
      blank: "xxxxxxxxxxx",
      review: "<https://www.nist.gov>"
    },
    {
      category: "GMON",
      question: "What is the focus of asset discovery?",
      answer: "Identify assets",
      hint: "Know your inventory.",
      blank: "xxxxxxx xxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What protocol is used for remote system monitoring?",
      answer: "SNMP",
      hint: "Network management.",
      blank: "xxxxx",
      review: "<https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol>"
    },
    {
      category: "GMON",
      question: "What type of logs contain system activity information?",
      answer: "Syslog",
      hint: "Standard log format.",
      blank: "xxxxxx",
      review: "<https://en.wikipedia.org/wiki/Syslog>"
    },
    {
      category: "GMON",
      question: "What does APT stand for?",
      answer: "Advanced persistent",
      hint: "Sophisticated attackers.",
      blank: "xxxxxxxx xxxxxxxxx",
      review: "<https://attack.mitre.org>"
    },
    {
      category: "GMON",
      question: "What does DNS stand for?",
      answer: "Domain system",
      hint: "Resolves URLs.",
      blank: "xxxxxx xxxxxx",
      review: "<https://en.wikipedia.org/wiki/Domain_Name_System>"
    },
    {
      category: "GMON",
      question: "What is the focus of behavioral analytics?",
      answer: "User actions",
      hint: "Behavior insights.",
      blank: "xxxx xxxxxxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "GMON",
      question: "What is the purpose of log rotation?",
      answer: "Manage storage",
      hint: "Control space usage.",
      blank: "xxxxxx xxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Log_rotation>"
    },
    {
      category: "GMON",
      question: "What does the acronym CVE stand for?",
      answer: "Common vulnerabilities",
      hint: "Standard identifier.",
      blank: "xxxxxx xxxxxxxxxxxxxx",
      review: "<https://cve.mitre.org>"
    },
    {
      category: "GMON",
      question: "What tool is used to aggregate endpoint data?",
      answer: "EDR",
      hint: "Focus on endpoints.",
      blank: "xxx",
      review: "<https://www.splunk.com>"
    },
    {
      category: "GMON",
      question: "What does TCP stand for?",
      answer: "Transmission control",
      hint: "Internet protocol.",
      blank: "xxxxxxxxxxx xxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Transmission_Control_Protocol>"
    },
    {
      category: "GMON",
      question: "What is the focus of vulnerability scanning?",
      answer: "Find weaknesses",
      hint: "Identify vulnerabilities.",
      blank: "xxxx xxxxxxxxxxx",
      review: "<https://www.sans.org/cyber-security-certification/gmon>"
    },
    {
      category: "GMON",
      question: "What is the function of a honeypot?",
      answer: "Deception",
      hint: "Attract attackers.",
      blank: "xxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Honeypot_(computing)>"
    }
  ];
  
  module.exports = {
    category: "GMON",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * gmonQuestions.length);
      return gmonQuestions[randomIndex];
    }
  };
  