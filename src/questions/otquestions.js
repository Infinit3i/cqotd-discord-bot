let otquestions = [
    {
      category: "Operational Technology (OT)",
      question: "What does OT stand for?",
      answer: "Operational Technology",
      hint: "Focuses on hardware and software for physical processes.",
      blank: "xxxxxxxxxx xxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Operational_technology>",
    },
    {
      category: "OT",
      question: "What protocol is widely used in OT for real-time industrial control?",
      answer: "Modbus",
      hint: "Commonly used in SCADA systems.",
      blank: "xxxxxx",
      review: "<https://www.modbus.org/>",
    },
    {
      category: "OT",
      question: "What is the purpose of a SCADA system?",
      answer: "Monitor and control industrial processes",
      hint: "Supervisory control and data acquisition.",
      blank: "xxxxxxx xxx xxxxxxx xxxxxxxxx xxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/SCADA>",
    },
    {
      category: "OT",
      question: "Which OT protocol uses object-oriented data modeling?",
      answer: "OPC UA",
      hint: "Open Platform Communications Unified Architecture.",
      blank: "xxx xx",
      review: "<https://opcfoundation.org/about/opc-technologies/opc-ua/>",
    },
    {
      category: "OT",
      question: "What type of network is used to connect OT devices?",
      answer: "Industrial control network",
      hint: "Networks in manufacturing and utilities.",
      blank: "xxxxxxxxxx xxxxxxx xxxxxxx",
      review: "<https://www.cisco.com/c/en/us/solutions/industrial-automation.html>",
    },
    {
      category: "OT",
      question: "What is the main security challenge for OT systems?",
      answer: "Legacy systems",
      hint: "Old infrastructure with minimal security.",
      blank: "xxxxxx xxxxxxx",
      review: "<https://www.cisa.gov/critical-infrastructure-sector>",
    },
    {
      category: "OT",
      question: "What does ICS stand for?",
      answer: "Industrial Control Systems",
      hint: "Includes SCADA, PLCs, and DCS.",
      blank: "xxxxxxxxxx xxxxxxx xxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Industrial_control_system>",
    },
    {
      category: "OT",
      question: "What type of device is a PLC?",
      answer: "Programmable Logic Controller",
      hint: "Used for automation.",
      blank: "xxxxxxxxxxxx xxxxx xxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Programmable_logic_controller>",
    },
    {
      category: "OT",
      question: "What is the primary function of a DCS?",
      answer: "Distributed control",
      hint: "Manages processes across multiple locations.",
      blank: "xxxxxxxxxx xxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Distributed_control_system>",
    },
    {
      category: "OT",
      question: "What standard focuses on securing OT systems?",
      answer: "IEC 62443",
      hint: "Global standard for OT security.",
      blank: "xxx xxxxx",
      review: "<https://iec62443.com/>",
    },
    {
      category: "OT",
      question: "Which tool monitors network traffic in OT environments?",
      answer: "Network intrusion detection systems",
      hint: "Monitors OT networks for threats.",
      blank: "xxxxxxx xxxxxxx xxxxxxxxx xxxxxxx",
      review: "<https://www.sans.org/tools/ot-nids>",
    },
    {
      category: "OT",
      question: "What does HMI stand for?",
      answer: "Human Machine Interface",
      hint: "Provides operators with process control interfaces.",
      blank: "xxxxx xxxxxxx xxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Human%E2%80%93machine_interface>",
    },
    {
      category: "OT",
      question: "What does IIoT stand for?",
      answer: "Industrial Internet of Things",
      hint: "Enables connected industrial devices.",
      blank: "xxxxxxxxxx xxxxxxx xx xxxxxx",
      review: "<https://www.ibm.com/topics/iiot>",
    },
    {
      category: "OT",
      question: "Which OT protocol is used for Ethernet-based industrial communication?",
      answer: "Profinet",
      hint: "Designed for automation systems.",
      blank: "xxxxxxxx",
      review: "<https://profinet.com/>",
    },
    {
      category: "OT",
      question: "What is the function of an RTU in OT?",
      answer: "Remote Terminal Unit",
      hint: "Used for remote monitoring and control.",
      blank: "xxxxxx xxxxxxx xxxx",
      review: "<https://en.wikipedia.org/wiki/Remote_terminal_unit>",
    },
    {
      category: "OT",
      question: "What is a common attack vector in OT environments?",
      answer: "Phishing",
      hint: "Exploits human behavior.",
      blank: "xxxxxxxx",
      review: "<https://www.cisa.gov/phishing-awareness>",
    },
    {
      category: "OT",
      question: "Which malware targeted OT systems in the Ukraine power grid?",
      answer: "Industroyer",
      hint: "Also known as CrashOverride.",
      blank: "xxxxxxxxxxx",
      review: "<https://www.welivesecurity.com/industroyer>",
    },
    {
      category: "OT",
      question: "What type of risk assessment focuses on OT-specific threats?",
      answer: "Cyber-physical risk assessment",
      hint: "Targets both IT and OT systems.",
      blank: "xxxxx xxxxxxxx xxxx xxxxxxxxxx",
      review: "<https://www.sans.org/tools/ot-risk-assessment>",
    },
    {
      category: "OT",
      question: "What framework provides guidelines for OT cybersecurity?",
      answer: "NIST Cybersecurity Framework",
      hint: "Developed by the U.S. Department of Commerce.",
      blank: "xxxx xxxxxxxxxxxxx xxxxxxxxx",
      review: "<https://www.nist.gov/cyberframework>",
    },
    {
      category: "OT",
      question: "What term describes the convergence of IT and OT systems?",
      answer: "IT/OT integration",
      hint: "Combines enterprise and industrial networks.",
      blank: "xx/xx xxxxxxxxxx",
      review: "<https://www.cisco.com/c/en/us/solutions/it-ot-convergence.html>",
    },
    {
      category: "OT",
      question: "What is the purpose of patch management in OT systems?",
      answer: "Update software",
      hint: "Addresses vulnerabilities.",
      blank: "xxxxxx xxxxxxx",
      review: "<https://www.cisa.gov/patch-management>",
    },
    {
      category: "OT",
      question: "What is a critical consideration when designing OT networks?",
      answer: "Availability",
      hint: "Ensures uninterrupted operations.",
      blank: "xxxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Availability>",
    },
    {
      category: "OT",
      question: "Which OT attack disrupted Iran's nuclear centrifuges?",
      answer: "Stuxnet",
      hint: "A famous cyber-physical attack.",
      blank: "xxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Stuxnet>",
    },
    {
      category: "OT",
      question: "What protocol is used for time synchronization in OT systems?",
      answer: "NTP",
      hint: "Network Time Protocol.",
      blank: "xxx",
      review: "<https://en.wikipedia.org/wiki/Network_Time_Protocol>",
    },
    {
      category: "OT",
      question: "Which OT protocol supports interoperable data exchange?",
      answer: "BACnet",
      hint: "Used in building automation systems.",
      blank: "xxxxxx",
      review: "<https://www.bacnet.org/>",
    },
    {
      category: "OT",
      question: "What is a common method to isolate OT networks from IT networks?",
      answer: "Air gap",
      hint: "Physical separation.",
      blank: "xxx xxx",
      review: "<https://www.kaspersky.com/resource-center/definitions/air-gap>",
    },
    {
      category: "OT",
      question: "What is the focus of the Purdue Enterprise Reference Architecture (PERA)?",
      answer: "Layered network model",
      hint: "Segments OT networks by function.",
      blank: "xxxxxx xxxxxxx xxxxx",
      review: "<https://en.wikipedia.org/wiki/Purdue_Enterprise_Reference_Architecture>",
    },
    {
      category: "OT",
      question: "What is the main goal of ICS cybersecurity?",
      answer: "Protect industrial processes",
      hint: "Safeguards OT operations.",
      blank: "xxxxxxx xxxxxxxxx xxxxxxxxxx",
      review: "<https://www.cisa.gov/ics>",
    },
    {
      category: "OT",
      question: "What OT attack was used against Saudi oil infrastructure in 2017?",
      answer: "TRITON",
      hint: "Targeted safety instrumented systems (SIS).",
      blank: "xxxxxx",
      review: "<https://www.cisa.gov/news-events/triton-malware-analysis>",
    },
    {
      category: "OT",
      question: "What is the purpose of segmentation in OT networks?",
      answer: "Limit threat propagation",
      hint: "Contains incidents.",
      blank: "xxxxx xxxxxx xxxxxxxxxxxx",
      review: "<https://www.cisco.com/c/en/us/solutions/industrial-automation/segmentation.html>",
    },
  ];
  
  module.exports = {
    category: "Operational Technology (OT)",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * otquestions.length);
      return otquestions[randomIndex];
    },
    getAllQuestions: async () => {
      return otquestions;
    },
  };
  