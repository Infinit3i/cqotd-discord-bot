let securityOnionQuestions = [
    {
      category: "Security Onion",
      question: "What is the primary purpose of Security Onion?",
      answer: "Network monitoring",
      hint: "Detects and investigates threats.",
      blank: "xxxxxx xxxxxxxxxx",
      review: "https://securityonion.net/",
    },
    {
      category: "Security Onion",
      question: "What type of logs does Zeek collect in Security Onion?",
      answer: "Network logs",
      hint: "Focuses on traffic metadata.",
      blank: "xxxxxx xxxx",
      review: "https://zeek.org/",
    },
    {
      category: "Security Onion",
      question: "What is the main purpose of Suricata in Security Onion?",
      answer: "Intrusion detection",
      hint: "Analyzes traffic for threats.",
      blank: "xxxxxxxx xxxxxxxxxx",
      review: "https://suricata.io/",
    },
    {
      category: "Security Onion",
      question: "What is Kibana used for in Security Onion?",
      answer: "Data visualization",
      hint: "Analyzes and visualizes logs.",
      blank: "xxxx xxxxxxxxxxxx",
      review: "https://www.elastic.co/kibana",
    },
    {
      category: "Security Onion",
      question: "What is ElasticSearch used for in Security Onion?",
      answer: "Log storage",
      hint: "Indexes and stores logs.",
      blank: "xxx xxxxxxx",
      review: "https://www.elastic.co/elasticsearch",
    },
    {
      category: "Security Onion",
      question: "What is the purpose of Wazuh in Security Onion?",
      answer: "Endpoint security",
      hint: "Monitors system activities.",
      blank: "xxxxxxxx xxxxxxx",
      review: "https://wazuh.com/",
    },
    {
      category: "Security Onion",
      question: "What protocol does Security Onion use for packet capture?",
      answer: "PCAP",
      hint: "Packet capture format.",
      blank: "xxxx",
      review: "https://en.wikipedia.org/wiki/Pcap",
    },
    {
      category: "Security Onion",
      question: "What command is used to configure Security Onion after installation?",
      answer: "so-setup",
      hint: "Setup wizard.",
      blank: "xx-xxxxx",
      review: "https://docs.securityonion.net/en/latest/so-setup.html",
    },
    {
      category: "Security Onion",
      question: "What component generates alerts for Security Onion?",
      answer: "Suricata",
      hint: "IDS component.",
      blank: "xxxxxxxx",
      review: "https://suricata.io/",
    },
    {
      category: "Security Onion",
      question: "What is the function of Fleet in Security Onion?",
      answer: "OSQuery management",
      hint: "Manages endpoint queries.",
      blank: "xxxxxx xxxxxxxxx",
      review: "https://fleetdm.com/",
    },
    {
      category: "Security Onion",
      question: "What framework is used for threat hunting in Security Onion?",
      answer: "Sigma",
      hint: "Standardized detection rules.",
      blank: "xxxxx",
      review: "https://sigmahq-py.readthedocs.io/en/latest/",
    },
    {
      category: "Security Onion",
      question: "What is a primary interface for analysts in Security Onion?",
      answer: "Kibana",
      hint: "Visualization tool.",
      blank: "xxxxxx",
      review: "https://www.elastic.co/kibana",
    },
    {
      category: "Security Onion",
      question: "What type of threats does Security Onion primarily monitor?",
      answer: "Network threats",
      hint: "Traffic-based analysis.",
      blank: "xxxxxx xxxxxxx",
      review: "https://securityonion.net/",
    },
    {
      category: "Security Onion",
      question: "What operating system is Security Onion based on?",
      answer: "Ubuntu",
      hint: "A Debian-based system.",
      blank: "xxxxxx",
      review: "https://ubuntu.com/",
    },
    {
      category: "Security Onion",
      question: "What is the purpose of so-status?",
      answer: "Check services",
      hint: "Monitors the health of services.",
      blank: "xxxxx xxxxxxx",
      review: "https://docs.securityonion.net/en/latest/so-status.html",
    },
    {
      category: "Security Onion",
      question: "What is the main web interface for Security Onion?",
      answer: "SO Console",
      hint: "Centralized management.",
      blank: "xx xxxxxxx",
      review: "https://docs.securityonion.net/en/latest/console.html",
    },
    {
      category: "Security Onion",
      question: "What is the default packet capture tool in Security Onion?",
      answer: "Stenographer",
      hint: "Optimized for packet storage.",
      blank: "xxxxxxxxxxxxxx",
      review: "https://github.com/google/stenographer",
    },
    {
      category: "Security Onion",
      question: "What does Sguil provide in Security Onion?",
      answer: "Alert triage",
      hint: "Investigate and manage alerts.",
      blank: "xxxxx xxxxxx",
      review: "https://sguil.sourceforge.net/",
    },
    {
      category: "Security Onion",
      question: "What tool visualizes network connections in Security Onion?",
      answer: "NetworkMiner",
      hint: "Focuses on network forensics.",
      blank: "xxxxxxxxxxxxx",
      review: "https://www.netresec.com/?page=NetworkMiner",
    },
    {
      category: "Security Onion",
      question: "What does Playbook in Security Onion help with?",
      answer: "Incident response",
      hint: "Guides investigations.",
      blank: "xxxxxxxx xxxxxxxxx",
      review: "https://docs.securityonion.net/en/latest/playbooks.html",
    },
    {
      category: "Security Onion",
      question: "What is the purpose of so-import-pcap?",
      answer: "Replay traffic",
      hint: "Re-analyze PCAP files.",
      blank: "xxxxxx xxxxxxx",
      review: "https://docs.securityonion.net/en/latest/so-import-pcap.html",
    },
    {
      category: "Security Onion",
      question: "What is Zeek's primary role in Security Onion?",
      answer: "Traffic analysis",
      hint: "Focuses on metadata.",
      blank: "xxxxxxx xxxxxxx",
      review: "https://zeek.org/",
    },
    {
      category: "Security Onion",
      question: "What scripting language does Security Onion heavily use?",
      answer: "Python",
      hint: "A versatile programming language.",
      blank: "xxxxxx",
      review: "https://www.python.org/",
    },
    {
      category: "Security Onion",
      question: "What protocol is used by ElasticSearch for log storage?",
      answer: "HTTP",
      hint: "Web-based protocol.",
      blank: "xxxx",
      review: "https://www.elastic.co/elasticsearch",
    },
    {
      category: "Security Onion",
      question: "What is the purpose of Fleet in Security Onion?",
      answer: "OSQuery management",
      hint: "Manages endpoint queries.",
      blank: "xxxxxx xxxxxxxxx",
      review: "https://fleetdm.com/",
    },
    {
      category: "Security Onion",
      question: "What is used to visualize Suricata alerts?",
      answer: "Kibana",
      hint: "Visualization tool.",
      blank: "xxxxxx",
      review: "https://www.elastic.co/kibana",
    },
    {
      category: "Security Onion",
      question: "What command is used to monitor CPU and RAM usage?",
      answer: "so-stat",
      hint: "System statistics.",
      blank: "xx-xxxx",
      review: "https://docs.securityonion.net/en/latest/so-stat.html",
    },
    {
      category: "Security Onion",
      question: "What does Security Onion primarily detect?",
      answer: "Threats",
      hint: "Focus on security events.",
      blank: "xxxxxxx",
      review: "https://securityonion.net/",
    },
    {
      category: "Security Onion",
      question: "What is the main logging mechanism in Security Onion?",
      answer: "ElasticSearch",
      hint: "Search and analyze data.",
      blank: "xxxxxxxxxxxxxxx",
      review: "https://www.elastic.co/elasticsearch",
    },
    {
      category: "Security Onion",
      question: "What is the purpose of Zeek logs?",
      answer: "Metadata",
      hint: "Focus on connection details.",
      blank: "xxxxxxxxx",
      review: "https://zeek.org/",
    },
  ];
  
  module.exports = {
    category: "Security Onion",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * securityOnionQuestions.length);
      return securityOnionQuestions[randomIndex];
    },
    getAllQuestions: async () => {
      return securityOnionQuestions;
    },
  };
  