let gmonQuestions = [
  {
    category: "GMON",
    question: "What is the primary goal of continuous monitoring?",
    answer: "Detect threats",
    hint: "Focus on threats.",
    blank: "xxxxxx xxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What type of attack does IDS monitor for?",
    answer: "Intrusion",
    hint: "Unauthorized access.",
    blank: "xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What protocol is used for secure web traffic?",
    answer: "HTTPS",
    hint: "Secure HTTP.",
    blank: "xxxxx",
    review: "https://en.wikipedia.org/wiki/HTTPS",
  },
  {
    category: "GMON",
    question: "What does SIEM stand for?",
    answer: "Security information",
    hint: "Log management.",
    blank: "xxxxxxxx xxxxxxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What does SOC stand for?",
    answer: "Security operations",
    hint: "Incident response team.",
    blank: "xxxxxxxx xxxxxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What does EDR stand for?",
    answer: "Endpoint detection",
    hint: "Focus on endpoints.",
    blank: "xxxxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Endpoint_detection_and_response",
  },
  {
    category: "GMON",
    question: "What is used to monitor network traffic?",
    answer: "Packet sniffer",
    hint: "Wireshark is one.",
    blank: "xxxxxx xxxxxxx",
    review: "https://www.wireshark.org",
  },
  {
    category: "GMON",
    question: "What type of monitoring focuses on internal systems?",
    answer: "Host-based",
    hint: "Runs on endpoints.",
    blank: "xxxx-xxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What is a primary function of log aggregation?",
    answer: "Correlation",
    hint: "Combines data.",
    blank: "xxxxxxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What tool is commonly used for analyzing logs?",
    answer: "Splunk",
    hint: "Popular SIEM tool.",
    blank: "xxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What does NIST stand for?",
    answer: "National standards",
    hint: "Focus on frameworks.",
    blank: "xxxxxxxx xxxxxxxxx",
    review: "https://www.nist.gov",
  },
  {
    category: "GMON",
    question: "What does TTP stand for?",
    answer: "Tactics techniques",
    hint: "Adversarial behavior.",
    blank: "xxxxxxx xxxxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What tool is used for analyzing memory dumps?",
    answer: "Volatility",
    hint: "Memory forensics.",
    blank: "xxxxxxxxxxx",
    review: "https://www.volatilityfoundation.org",
  },
  {
    category: "GMON",
    question: "What does IOC stand for?",
    answer: "Indicator compromise",
    hint: "Detect signs of attack.",
    blank: "xxxxxxxxx xxxxxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What is the primary focus of threat hunting?",
    answer: "Proactive detection",
    hint: "Search for threats.",
    blank: "xxxxxxxx xxxxxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What does SOAR stand for?",
    answer: "Security automation",
    hint: "Focus on response.",
    blank: "xxxxxxxxx xxxxxxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What is the primary purpose of baselining?",
    answer: "Normal behavior",
    hint: "Detect anomalies.",
    blank: "xxxxxx xxxxxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What is the focus of anomaly detection?",
    answer: "Unusual patterns",
    hint: "Behavior deviation.",
    blank: "xxxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Anomaly_detection",
  },
  {
    category: "GMON",
    question: "What is the first phase of incident response?",
    answer: "Preparation",
    hint: "Plan ahead.",
    blank: "xxxxxxxxxxx",
    review: "https://www.nist.gov",
  },
  {
    category: "GMON",
    question: "What is the focus of asset discovery?",
    answer: "Identify assets",
    hint: "Know your inventory.",
    blank: "xxxxxxx xxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What protocol is used for remote system monitoring?",
    answer: "SNMP",
    hint: "Network management.",
    blank: "xxxxx",
    review:
      "https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol",
  },
  {
    category: "GMON",
    question: "What type of logs contain system activity information?",
    answer: "Syslog",
    hint: "Standard log format.",
    blank: "xxxxxx",
    review: "https://en.wikipedia.org/wiki/Syslog",
  },
  {
    category: "GMON",
    question: "What does APT stand for?",
    answer: "Advanced persistent",
    hint: "Sophisticated attackers.",
    blank: "xxxxxxxx xxxxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What does DNS stand for?",
    answer: "Domain system",
    hint: "Resolves URLs.",
    blank: "xxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Domain_Name_System",
  },
  {
    category: "GMON",
    question: "What is the focus of behavioral analytics?",
    answer: "User actions",
    hint: "Behavior insights.",
    blank: "xxxx xxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What is the purpose of log rotation?",
    answer: "Manage storage",
    hint: "Control space usage.",
    blank: "xxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Log_rotation",
  },
  {
    category: "GMON",
    question: "What does the acronym CVE stand for?",
    answer: "Common vulnerabilities",
    hint: "Standard identifier.",
    blank: "xxxxxx xxxxxxxxxxxxxx",
    review: "https://cve.mitre.org",
  },
  {
    category: "GMON",
    question: "What tool is used to aggregate endpoint data?",
    answer: "EDR",
    hint: "Focus on endpoints.",
    blank: "xxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What does TCP stand for?",
    answer: "Transmission control",
    hint: "Internet protocol.",
    blank: "xxxxxxxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol",
  },
  {
    category: "GMON",
    question: "What is the focus of vulnerability scanning?",
    answer: "Find weaknesses",
    hint: "Identify vulnerabilities.",
    blank: "xxxx xxxxxxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What is the function of a honeypot?",
    answer: "Deception",
    hint: "Attract attackers.",
    blank: "xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Honeypot_(computing)",
  },
  {
    category: "GMON",
    question: "What is the principle of least privilege?",
    answer: "Minimal access required",
    hint: "Restrict user permissions.",
    blank: "xxxxxx xxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Principle_of_least_privilege",
  },
  {
    category: "GMON",
    question: "What is the purpose of RBAC?",
    answer: "Access control",
    hint: "Based on roles.",
    blank: "xxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Role-based_access_control",
  },
  {
    category: "GMON",
    question: "What is a fileless attack?",
    answer: "No files used",
    hint: "Memory-based execution.",
    blank: "xx xxxxxx xxxxx",
    review: "https://en.wikipedia.org/wiki/Fileless_malware",
  },
  {
    category: "GMON",
    question: "What is lateral movement?",
    answer: "Spread inside network",
    hint: "Move between systems.",
    blank: "xxxxxx xxxxxx xxxxxxx",
    review: "https://www.crowdstrike.com",
  },
  {
    category: "GMON",
    question: "What is configuration drift?",
    answer: "Unplanned changes",
    hint: "Deviates from standard.",
    blank: "xxxxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Configuration_management",
  },
  {
    category: "GMON",
    question: "What is defense-in-depth?",
    answer: "Layered security",
    hint: "Multiple protective measures.",
    blank: "xxxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Defense_in_depth_(computing)",
  },
  {
    category: "GMON",
    question: "What is EDR used for?",
    answer: "Endpoint monitoring",
    hint: "Tracks device activity.",
    blank: "xxxxxxxx xxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Endpoint_detection_and_response",
  },
  {
    category: "GMON",
    question: "What does Nmap do?",
    answer: "Network scanning",
    hint: "Find active hosts.",
    blank: "xxxxxxx xxxxxxxxx",
    review: "https://nmap.org",
  },
  {
    category: "GMON",
    question: "What does Nessus scan for?",
    answer: "Vulnerabilities",
    hint: "Weakness detection.",
    blank: "xxxxxxxxxxxxxxxxx",
    review: "https://www.tenable.com/products/nessus",
  },
  {
    category: "GMON",
    question: "What does Wireshark analyze?",
    answer: "Network packets",
    hint: "Traffic inspection.",
    blank: "xxxxxxx xxxxxxx",
    review: "https://www.wireshark.org",
  },
  {
    category: "GMON",
    question: "What does MFA stand for?",
    answer: "Multi-factor authentication",
    hint: "Uses multiple methods.",
    blank: "xxxx-xxxxxx xxxxxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Multi-factor_authentication",
  },
  {
    category: "GMON",
    question: "What is zero trust?",
    answer: "No implicit trust",
    hint: "Verify every access.",
    blank: "xx xxxxxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Zero_trust",
  },
  {
    category: "GMON",
    question: "What is a SIEM tool?",
    answer: "Log analysis",
    hint: "Monitors events.",
    blank: "xxx xxxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What is a port scan?",
    answer: "Check open ports",
    hint: "Service discovery.",
    blank: "xxxxx xxxx xxxxx",
    review: "https://en.wikipedia.org/wiki/Port_scanner",
  },
  {
    category: "GMON",
    question: "What does IDS monitor?",
    answer: "Intrusions",
    hint: "Unauthorized access.",
    blank: "xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What is Ansible used for?",
    answer: "Configuration automation",
    hint: "Manages systems.",
    blank: "xxxxxxxxxxx xxxxxxxxx",
    review: "https://www.ansible.com",
  },
  {
    category: "GMON",
    question: "What is LotL?",
    answer: "Native tools used",
    hint: "No additional software.",
    blank: "xxxx xxxxx xxxx",
    review:
      "https://en.wikipedia.org/wiki/Living_off_the_land_(computer_security)",
  },
  {
    category: "GMON",
    question: "What is threat intelligence?",
    answer: "Attack data",
    hint: "Predict threats.",
    blank: "xxxxxx xxxx",
    review: "https://en.wikipedia.org/wiki/Threat_intelligence",
  },
  {
    category: "GMON",
    question: "What is Sysmon?",
    answer: "System monitor",
    hint: "Logs system events.",
    blank: "xxxxxx xxxxxxx",
    review: "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",
  },
  {
    category: "GMON",
    question: "What does a honeypot do?",
    answer: "Lures attackers",
    hint: "Decoy system.",
    blank: "xxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Honeypot_(computing)",
  },
  {
    category: "GMON",
    question: "What is the purpose of PAM?",
    answer: "Manage privileges",
    hint: "Focus on admin accounts.",
    blank: "xxxxxx xxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Privileged_access_management",
  },
  {
    category: "GMON",
    question: "What does SSO stand for?",
    answer: "Single sign-on",
    hint: "One login for many.",
    blank: "xxxxxx xxxx-xx",
    review: "https://en.wikipedia.org/wiki/Single_sign-on",
  },
  {
    category: "GMON",
    question: "What is spear phishing?",
    answer: "Targeted email attack",
    hint: "Specific recipient focus.",
    blank: "xxxxxxxx xxxxxx xxxxx",
    review: "https://en.wikipedia.org/wiki/Spear_phishing",
  },
  {
    category: "GMON",
    question: "What is a watering hole attack?",
    answer: "Compromised websites",
    hint: "Targets popular sites.",
    blank: "xxxxxxxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Watering_hole_attack",
  },
  {
    category: "GMON",
    question: "What is the role of CI/CD?",
    answer: "Automate deployments",
    hint: "Focus on integration.",
    blank: "xxxxxxxxx xxxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/CI/CD",
  },
  {
    category: "GMON",
    question: "What does a checksum verify?",
    answer: "File integrity",
    hint: "Detect changes.",
    blank: "xxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Checksum",
  },
  {
    category: "GMON",
    question: "What is the CIA triad?",
    answer: "Confidentiality, integrity, availability",
    hint: "Core security principles.",
    blank: "xxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Information_security",
  },
  {
    category: "GMON",
    question: "What is a SOC?",
    answer: "Security operations center",
    hint: "Monitors and responds.",
    blank: "xxxxxxxx xxxxxxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Security_operations_center",
  },
  {
    category: "GMON",
    question: "What is syslog used for?",
    answer: "Log storage",
    hint: "System log format.",
    blank: "xxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Syslog",
  },
  {
    category: "GMON",
    question: "What does WMI stand for?",
    answer: "Windows Management Instrumentation",
    hint: "Monitors Windows systems.",
    blank: "xxxxxxx xxxxxxxxx xxxxxxxxxxxxxx",
    review:
      "https://en.wikipedia.org/wiki/Windows_Management_Instrumentation",
  },
  {
    category: "GMON",
    question: "What is the purpose of asset inventory?",
    answer: "Track resources",
    hint: "Identify devices.",
    blank: "xxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Asset_management_(IT)",
  },
  {
    category: "GMON",
    question: "What is ARP used for?",
    answer: "Resolve IP addresses",
    hint: "Maps to MAC addresses.",
    blank: "xxxxxx xx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Address_Resolution_Protocol",
  },
  {
    category: "GMON",
    question: "What is OpenVAS?",
    answer: "Vulnerability scanner",
    hint: "Open-source tool.",
    blank: "xxxxxxxxxxxxx xxxxxxxxx",
    review: "https://www.openvas.org",
  },
  {
    category: "GMON",
    question: "What does PCAP stand for?",
    answer: "Packet capture",
    hint: "Network traffic analysis.",
    blank: "xxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Pcap",
  },
  {
    category: "GMON",
    question: "What is biometric authentication?",
    answer: "Use physical traits",
    hint: "Fingerprint, iris scan.",
    blank: "xxx xxxxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Biometric_authentication",
  },
  {
    category: "GMON",
    question: "What is privilege escalation?",
    answer: "Gain higher access",
    hint: "Abuse admin privileges.",
    blank: "xxxx xxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Privilege_escalation",
  },
  {
    category: "GMON",
    question: "What is the MITRE ATT&CK?",
    answer: "Adversary tactics",
    hint: "Threat framework.",
    blank: "xxxxxxxx xxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What does DNS do?",
    answer: "Resolves domain names",
    hint: "Maps URLs to IPs.",
    blank: "xxxxxxxxxx xxxxxx xxxxx",
    review: "https://en.wikipedia.org/wiki/Domain_Name_System",
  },
  {
    category: "GMON",
    question: "What is a honeypot?",
    answer: "Deceptive system",
    hint: "Attracts attackers.",
    blank: "xxxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Honeypot_(computing)",
  },
  {
    category: "GMON",
    question: "What does HIDS stand for?",
    answer: "Host intrusion detection",
    hint: "Monitors individual hosts.",
    blank: "xxxx xxxxxxxxx xxxxxxxxx",
    review:
      "https://en.wikipedia.org/wiki/Host-based_intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What is the primary function of HIPS?",
    answer: "Prevent intrusions",
    hint: "Stops unauthorized actions.",
    blank: "xxxxxx xxxxxxxxxx",
    review:
      "https://en.wikipedia.org/wiki/Host-based_intrusion_prevention_system",
  },
  {
    category: "GMON",
    question: "What is an endpoint firewall?",
    answer: "Filters traffic",
    hint: "Protects individual devices.",
    blank: "xxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Firewall_(computing)",
  },
  {
    category: "GMON",
    question: "What does TLS encrypt?",
    answer: "Network traffic",
    hint: "Secures data in transit.",
    blank: "xxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Transport_Layer_Security",
  },
  {
    category: "GMON",
    question: "What is the purpose of a VPN?",
    answer: "Secure connections",
    hint: "Encrypts remote access.",
    blank: "xxxxxx xxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Virtual_private_network",
  },
  {
    category: "GMON",
    question: "What does Wireshark analyze?",
    answer: "Packet traffic",
    hint: "Captures network data.",
    blank: "xxxxxx xxxxxxx",
    review: "https://www.wireshark.org",
  },
  {
    category: "GMON",
    question: "What does NIDS stand for?",
    answer: "Network intrusion detection",
    hint: "Monitors network traffic.",
    blank: "xxxxxxx xxxxxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What is the primary role of NIPS?",
    answer: "Block threats",
    hint: "Prevents intrusions.",
    blank: "xxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Intrusion_prevention_system",
  },
  {
    category: "GMON",
    question: "What does NGFW stand for?",
    answer: "Next-generation firewall",
    hint: "Advanced packet inspection.",
    blank: "xxxx xxxxxxxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Next-generation_firewall",
  },
  {
    category: "GMON",
    question: "What is a secure baseline?",
    answer: "Approved configurations",
    hint: "Defines system standards.",
    blank: "xxxxxxxx xxxxxxxxxxxxx",
    review:
      "https://en.wikipedia.org/wiki/Baseline_(configuration_management)",
  },
  {
    category: "GMON",
    question: "Why is patching critical?",
    answer: "Fix vulnerabilities",
    hint: "Prevents exploits.",
    blank: "xxxx xxxxxxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Patch_(computing)",
  },
  {
    category: "GMON",
    question: "What is the purpose of Snort?",
    answer: "Detect intrusions",
    hint: "Open-source tool.",
    blank: "xxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Snort_(software)",
  },
  {
    category: "GMON",
    question: "What does Zeek monitor?",
    answer: "Network behavior",
    hint: "Focuses on traffic analysis.",
    blank: "xxxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Zeek_(software)",
  },
  {
    category: "GMON",
    question: "What is IPSec used for?",
    answer: "Encrypt traffic",
    hint: "Protects network communications.",
    blank: "xxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/IPsec",
  },
  {
    category: "GMON",
    question: "What is the role of log analysis?",
    answer: "Detect anomalies",
    hint: "Reviews system events.",
    blank: "xxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Log_analysis",
  },
  {
    category: "GMON",
    question: "What does Nessus scan?",
    answer: "Vulnerabilities",
    hint: "Identifies system weaknesses.",
    blank: "xxxxxxxxxxxxxxxxx",
    review: "https://www.tenable.com/products/nessus",
  },
  {
    category: "GMON",
    question: "What is deep packet inspection?",
    answer: "Analyze traffic content",
    hint: "Examines data payloads.",
    blank: "xxxxxx xxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Deep_packet_inspection",
  },
  {
    category: "GMON",
    question: "What does NetFlow track?",
    answer: "Network traffic patterns",
    hint: "Focuses on metadata.",
    blank: "xxxxxxx xxxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/NetFlow",
  },
  {
    category: "GMON",
    question: "What is a hotfix?",
    answer: "Quick patch",
    hint: "Immediate software fix.",
    blank: "xxxxx xxxxx",
    review: "https://en.wikipedia.org/wiki/Hotfix",
  },
  {
    category: "GMON",
    question: "What does Splunk analyze?",
    answer: "Log data",
    hint: "Focuses on event aggregation.",
    blank: "xxxx xxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What is a perimeter device?",
    answer: "Network entry point",
    hint: "Protects boundaries.",
    blank: "xxxxxxx xxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Network_security",
  },
  {
    category: "GMON",
    question: "What is the purpose of a firewall?",
    answer: "Block unauthorized traffic",
    hint: "Filters network access.",
    blank: "xxxxx xxxxxxxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Firewall_(computing)",
  },
  {
    category: "GMON",
    question: "What does a DMZ do?",
    answer: "Isolates services",
    hint: "Separate network zone.",
    blank: "xxxxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/DMZ_(computing)",
  },
  {
    category: "GMON",
    question: "What does a proxy server do?",
    answer: "Mediates requests",
    hint: "Intermediary for users.",
    blank: "xxxxxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Proxy_server",
  },
  {
    category: "GMON",
    question: "What is a SIEM tool?",
    answer: "Aggregates logs",
    hint: "Centralized event monitoring.",
    blank: "xxxxxxxxx xxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What does IDS monitor?",
    answer: "Intrusions",
    hint: "Unauthorized activity.",
    blank: "xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What is the purpose of an allowlist?",
    answer: "Permits apps",
    hint: "Restricts application use.",
    blank: "xxxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Application_whitelisting",
  },
  {
    category: "GMON",
    question: "What does an inventory track?",
    answer: "Installed software",
    hint: "Monitors applications.",
    blank: "xxxxxxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Software_asset_management",
  },
  {
    category: "GMON",
    question: "What is a denylist?",
    answer: "Blocks applications",
    hint: "Restricts unauthorized apps.",
    blank: "xxxxxx xxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Blacklist_(computing)",
  },
  {
    category: "GMON",
    question: "What is the MITRE ATT&CK framework?",
    answer: "Adversary tactics",
    hint: "Focuses on threat behavior.",
    blank: "xxxxxxxxx xxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What is a SOC's role?",
    answer: "Monitor threats",
    hint: "Manages incidents.",
    blank: "xxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Security_operations_center",
  },
  {
    category: "GMON",
    question: "What is zero trust?",
    answer: "No implicit trust",
    hint: "Verify every access.",
    blank: "xxx xxxxxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Zero_trust",
  },
  {
    category: "GMON",
    question: "What does a CASB do?",
    answer: "Secures cloud access",
    hint: "Protects SaaS environments.",
    blank: "xxxxxxx xxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Cloud_access_security_broker",
  },
  {
    category: "GMON",
    question: "What is the purpose of a proxy?",
    answer: "Filter traffic",
    hint: "Hides user identity.",
    blank: "xxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Proxy_server",
  },
  {
    category: "GMON",
    question: "What does 'threat-informed defense' mean?",
    answer: "Using attack data",
    hint: "Informed by adversaries.",
    blank: "xxxxx xxxxxx xxxxxxx",
    review: "https://www.mitre.org",
  },
  {
    category: "GMON",
    question: "What is the purpose of a WAF?",
    answer: "Protect web apps",
    hint: "Focuses on HTTP traffic.",
    blank: "xxxxxx xxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Web_application_firewall",
  },
  {
    category: "GMON",
    question: "What does OWASP focus on?",
    answer: "Web security",
    hint: "Common web vulnerabilities.",
    blank: "xxx xxxxxxxx",
    review: "https://owasp.org",
  },
  {
    category: "GMON",
    question: "What is the purpose of application control?",
    answer: "Restrict app usage",
    hint: "Prevents unauthorized execution.",
    blank: "xxxxxxxx xxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Application_whitelisting",
  },
  {
    category: "GMON",
    question: "What is a key advantage of software inventories?",
    answer: "Track updates",
    hint: "Ensures secure versions.",
    blank: "xxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Software_asset_management",
  },
  {
    category: "GMON",
    question: "What is the primary goal of threat hunting?",
    answer: "Proactive detection",
    hint: "Find hidden threats.",
    blank: "xxxxxxxx xxxxxxxxxx",
    review:
      "https://www.sans.org/cyber-security-certification/threat-hunting",
  },
  {
    category: "GMON",
    question: "What does TTP stand for?",
    answer: "Tactics, techniques, procedures",
    hint: "Adversary methods.",
    blank: "xxxxxxx xxxxxxxxx xxxxxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What is the kill chain?",
    answer: "Attack lifecycle",
    hint: "Steps attackers follow.",
    blank: "xxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Kill_chain",
  },
  {
    category: "GMON",
    question: "What is the purpose of NIST CSF?",
    answer: "Security framework",
    hint: "Guides cybersecurity practices.",
    blank: "xxxxxxx xxxxxxxxxx",
    review: "https://www.nist.gov/cyberframework",
  },
  {
    category: "GMON",
    question: "What is a honeytoken?",
    answer: "Deceptive file",
    hint: "Lures attackers.",
    blank: "xxxxxxxxxxx xxxxx",
    review: "https://en.wikipedia.org/wiki/Honeytoken",
  },
  {
    category: "GMON",
    question: "What is the role of an IDS?",
    answer: "Monitor traffic",
    hint: "Detects anomalies.",
    blank: "xxxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What does Splunk monitor?",
    answer: "Logs and events",
    hint: "SIEM tool.",
    blank: "xxxx xxx xxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What is a hotfix?",
    answer: "Quick patch",
    hint: "Immediate fix.",
    blank: "xxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Hotfix",
  },
  {
    category: "GMON",
    question: "What does NetFlow analyze?",
    answer: "Traffic patterns",
    hint: "Focuses on metadata.",
    blank: "xxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/NetFlow",
  },
  {
    category: "GMON",
    question: "What is application sandboxing?",
    answer: "Isolates processes",
    hint: "Prevents broader access.",
    blank: "xxxxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Sandbox_(computer_security)",
  },
  {
    category: "GMON",
    question: "What is a SOC analyst's role?",
    answer: "Monitor and respond",
    hint: "Manages incidents.",
    blank: "xxxxxxx xxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Security_operations_center",
  },
  {
    category: "GMON",
    question: "What does SIEM stand for in continuous monitoring?",
    answer: "Security Information and Event Management",
    hint: "Centralized security tool.",
    blank: "xxxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What is the purpose of security orchestration, automation, and response (SOAR)?",
    answer: "Automate threat response",
    hint: "Speeds up incident handling.",
    blank: "xxxxxxxx xxxxxx xxxxxxx",
    review: "https://en.wikipedia.org/wiki/Security_orchestration",
  },
  {
    category: "GMON",
    question: "What tool is used to capture and analyze network packets?",
    answer: "Wireshark",
    hint: "A popular open-source tool.",
    blank: "xxxxxxxxxx",
    review: "https://www.wireshark.org",
  },
  {
    category: "GMON",
    question: "What does IOC stand for in threat detection?",
    answer: "Indicators of Compromise",
    hint: "Used to detect malicious activity.",
    blank: "xxxxxxxxx xx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Indicators_of_compromise",
  },
  {
    category: "GMON",
    question: "What does TTP stand for in the context of threat hunting?",
    answer: "Tactics, Techniques, and Procedures",
    hint: "Describes adversary behavior.",
    blank: "xxxxxxx xxxxxxxxxx xxx xxxxxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What framework provides adversary tactics and techniques?",
    answer: "MITRE ATT&CK",
    hint: "A popular cybersecurity framework.",
    blank: "xxxxx xxxxxxx",
    review: "https://attack.mitre.org",
  },
  {
    category: "GMON",
    question: "What protocol is used for network device monitoring?",
    answer: "SNMP",
    hint: "Simple Network Management Protocol.",
    blank: "xxxxx",
    review:
      "https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol",
  },
  {
    category: "GMON",
    question: "What is the primary function of log analysis?",
    answer: "Identify anomalies",
    hint: "Detect suspicious activities.",
    blank: "xxxxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Log_analysis",
  },
  {
    category: "GMON",
    question: "What tool provides endpoint detection and response (EDR)?",
    answer: "CrowdStrike",
    hint: "A leader in EDR solutions.",
    blank: "xxxxxxxxxxx",
    review: "https://www.crowdstrike.com",
  },
  {
    category: "GMON",
    question: "What type of monitoring focuses on individual hosts?",
    answer: "Host-based monitoring",
    hint: "Analyzes endpoint activities.",
    blank: "xxxx-xxxxx xxxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Host-based_intrusion_detection_system",
  },
  {
    category: "GMON",
    question: "What does a honeypot simulate in a network?",
    answer: "Vulnerable system",
    hint: "Used to attract attackers.",
    blank: "xxxxxxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Honeypot_(computing)",
  },
  {
    category: "GMON",
    question: "What is the purpose of a vulnerability scanner?",
    answer: "Identify weaknesses",
    hint: "Checks for exploitable vulnerabilities.",
    blank: "xxxxxxx xxxxxxxxxx",
    review: "https://www.tenable.com",
  },
  {
    category: "GMON",
    question: "What is the first phase of the incident response lifecycle?",
    answer: "Preparation",
    hint: "Get ready before incidents occur.",
    blank: "xxxxxxxxxxx",
    review: "https://www.nist.gov",
  },
  {
    category: "GMON",
    question: "What does SOAR improve in incident handling?",
    answer: "Efficiency",
    hint: "Automates repetitive tasks.",
    blank: "xxxxxxxxxx",
    review: "https://www.splunk.com",
  },
  {
    category: "GMON",
    question: "What type of logs are analyzed for malicious activities?",
    answer: "Security logs",
    hint: "Contains authentication and access records.",
    blank: "xxxxxxxxx xxxx",
    review: "https://en.wikipedia.org/wiki/Security_log",
  },
  {
    category: "GMON",
    question: "What type of threat involves stealing credentials?",
    answer: "Credential theft",
    hint: "Targets user login information.",
    blank: "xxxxxxxxxx xxxxxx",
    review: "https://en.wikipedia.org/wiki/Credential_theft",
  },
  {
    category: "GMON",
    question: "What is the purpose of network baselining?",
    answer: "Establish normal behavior",
    hint: "Used for anomaly detection.",
    blank: "xxxxxxxxx xxxxxx xxxxxxxx",
    review: "https://www.sans.org/cyber-security-certification/gmon",
  },
  {
    category: "GMON",
    question: "What is a common tool for network vulnerability assessment?",
    answer: "Nessus",
    hint: "Provided by Tenable.",
    blank: "xxxxxx",
    review: "https://www.tenable.com/products/nessus",
  },
  {
    category: "GMON",
    question: "What technique does a threat hunter use to identify threats proactively?",
    answer: "Anomaly detection",
    hint: "Focuses on deviations from norms.",
    blank: "xxxxxxx xxxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Anomaly_detection",
  },
  {
    category: "GMON",
    question: "What is the role of DNS logs in threat detection?",
    answer: "Track domain requests",
    hint: "Monitors unusual domains.",
    blank: "xxxxx xxxxxx xxxxxxxxx",
    review: "https://en.wikipedia.org/wiki/Domain_Name_System",
  },
];

module.exports = {
  category: "GMON",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * gmonQuestions.length);
    return gmonQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return gmonQuestions;
  },
};