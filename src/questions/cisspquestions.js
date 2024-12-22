let cisspquestions = [
  {
    category: "CISSP",
    question: "What does the CIA triad stand for?",
    answer: "Confidentiality",
    hint: "Three pillars of information security.",
    blank: "xxxxxxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html>",
  },
  {
    category: "CISSP",
    question: "What attack intercepts and alters communication?",
    answer: "MITM",
    hint: "An attacker sits between two parties.",
    blank: "xxxx",
    review:
      "<https://www.cloudflare.com/learning/security/glossary/what-is-a-man-in-the-middle-attack/>",
  },
  {
    category: "CISSP",
    question: "What does RBAC stand for?",
    answer: "Roles",
    hint: "Access control based on user roles.",
    blank: "xxxxx",
    review:
      "<https://www.okta.com/identity-101/role-based-access-control-rbac/>",
  },
  {
    category: "CISSP",
    question: "What is the process of proving identity?",
    answer: "Auth",
    hint: "Verifies who you are.",
    blank: "xxxx",
    review: "<https://www.okta.com/identity-101/what-is-authentication/>",
  },
  {
    category: "CISSP",
    question: "What is the goal of access control?",
    answer: "Restrict",
    hint: "Focus on restrictions.",
    blank: "xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/access-control>",
  },
  {
    category: "CISSP",
    question: "What does ISO/IEC 27001 define?",
    answer: "ISMS",
    hint: "International standard for security.",
    blank: "xxxx",
    review: "<https://www.iso.org/isoiec-27001-information-security.html>",
  },
  {
    category: "CISSP",
    question: "What OSI layer handles encryption?",
    answer: "Layer 6",
    hint: "Presentation.",
    blank: "xxxxx x",
    review: "<https://www.comptia.org/content/guides/osi-model>",
  },
  {
    category: "CISSP",
    question: "What type of malware demands payment?",
    answer: "Ransomware",
    hint: "Locks your files for money.",
    blank: "xxxxxxxxxxx",
    review:
      "<https://www.kaspersky.com/resource-center/definitions/ransomware>",
  },
  {
    category: "CISSP",
    question: "What is the most secure hashing algorithm?",
    answer: "SHA-256",
    hint: "A popular algorithm.",
    blank: "xxx-xxx",
    review: "<https://www.techtarget.com/searchsecurity/definition/SHA-256>",
  },
  {
    category: "CISSP",
    question: 'What does "least privilege" mean?',
    answer: "Minimal",
    hint: "Grants only what’s necessary.",
    blank: "xxxxxxx",
    review: "<https://www.cisa.gov/uscert/ncas/tips/ST04-001>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of a DMZ?",
    answer: "Isolate",
    hint: "Network buffer zone.",
    blank: "xxxxxxx",
    review:
      "<https://www.cloudflare.com/learning/ddos/glossary/dmz-demilitarized-zone/>",
  },
  {
    category: "CISSP",
    question: "What is social engineering?",
    answer: "Tricks",
    hint: "Uses psychological tricks.",
    blank: "xxxxx",
    review:
      "<https://www.csoonline.com/article/2124681/what-is-social-engineering.html>",
  },
  {
    category: "CISSP",
    question: "What is an IDS?",
    answer: "Detection",
    hint: "Monitors for attacks.",
    blank: "xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/intrusion-detection-system>",
  },
  {
    category: "CISSP",
    question: "What is encryption?",
    answer: "Secure",
    hint: "Secures information.",
    blank: "xxxxxx",
    review: "<https://www.cisa.gov/encryption-basics>",
  },
  {
    category: "CISSP",
    question: "What is a DDoS attack?",
    answer: "Flood",
    hint: "Overwhelms with traffic.",
    blank: "xxxxx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>",
  },
  {
    category: "CISSP",
    question: "What does NIST stand for?",
    answer: "Standards",
    hint: "US government standards.",
    blank: "xxxxxxxxx",
    review: "<https://www.nist.gov>",
  },
  {
    category: "CISSP",
    question: "What is steganography?",
    answer: "Hiding",
    hint: "Hides data in plain sight.",
    blank: "xxxxxx",
    review:
      "<https://www.kaspersky.com/resource-center/definitions/steganography>",
  },
  {
    category: "CISSP",
    question: "What is risk mitigation?",
    answer: "Reduce",
    hint: "Minimizing threats.",
    blank: "xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/risk-mitigation>",
  },
  {
    category: "CISSP",
    question: "What is the goal of cryptography?",
    answer: "Secure",
    hint: "Protects messages.",
    blank: "xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/cryptography>",
  },
  {
    category: "CISSP",
    question: "What is multifactor authentication?",
    answer: "MFA",
    hint: "More than one factor.",
    blank: "xxx",
    review:
      "<https://www.okta.com/identity-101/mfa-multi-factor-authentication/>",
  },
  {
    category: "CISSP",
    question: "What does GDPR stand for?",
    answer: "General Data Protection Regulation",
    hint: "European privacy law.",
    blank: "xxxxxxx",
    review: "<https://gdpr-info.eu>",
  },
  {
    category: "CISSP",
    question: "What is malware?",
    answer: "Malware",
    hint: "Designed to harm systems.",
    blank: "xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/advanced-malware-protection/what-is-malware.html>",
  },
  {
    category: "CISSP",
    question: "What is a firewall?",
    answer: "Device",
    hint: "Monitors traffic.",
    blank: "xxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html>",
  },
  {
    category: "CISSP",
    question: "What is a brute force attack?",
    answer: "Guess",
    hint: "Repeated attempts to crack.",
    blank: "xxxxx",
    review:
      "<https://www.kaspersky.com/resource-center/definitions/brute-force-attack>",
  },
  {
    category: "CISSP",
    question: "What does PKI stand for?",
    answer: "Keys",
    hint: "Manages encryption keys.",
    blank: "xxxxx",
    review: "<https://www.digicert.com/resources/public-key-infrastructure>",
  },
  {
    category: "CISSP",
    question: "What is the OSI model?",
    answer: "Layers",
    hint: "Seven layers of networking.",
    blank: "xxxxxx",
    review:
      "<https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/>",
  },
  {
    category: "CISSP",
    question: "What does BCP stand for?",
    answer: "Continuity",
    hint: "Plan for disruptions.",
    blank: "xxxxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchdisasterrecovery/definition/business-continuity-plan>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of hashing?",
    answer: "Integrity",
    hint: "Ensures data has not changed.",
    blank: "xxxxxxxxx",
    review: "<https://www.techtarget.com/searchsecurity/definition/hash>",
  },
  {
    category: "CISSP",
    question: "What does BYOD stand for?",
    answer: "Devices",
    hint: "Personal devices at work.",
    blank: "xxxxxxx",
    review:
      "<https://www.techtarget.com/searchmobilecomputing/definition/BYOD-bring-your-own-device>",
  },
  {
    category: "CISSP",
    question: "What is a vulnerability?",
    answer: "Weakness",
    hint: "A flaw in a system.",
    blank: "xxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/vulnerability>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of IDS?",
    answer: "Detection",
    hint: "Monitors for attacks.",
    blank: "xxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/intrusion-detection-system-ids/index.html>",
  },
  {
    category: "CISSP",
    question: "What is the main goal of access control?",
    answer: "Protection",
    hint: "Prevents unauthorized use.",
    blank: "xxxxxxxxxx",
    review: "<https://www.okta.com/identity-101/what-is-access-control/>",
  },
  {
    category: "CISSP",
    question: "What does SSO stand for?",
    answer: "Single",
    hint: "One login for multiple systems.",
    blank: "xxxxxx",
    review: "<https://www.okta.com/identity-101/single-sign-on/>",
  },
  {
    category: "CISSP",
    question: "What is an SQL injection?",
    answer: "Query",
    hint: "Injects malicious SQL code.",
    blank: "xxxxx",
    review:
      "<https://www.cloudflare.com/learning/security/threats/sql-injection/>",
  },
  {
    category: "CISSP",
    question: "What does MAC stand for in access control?",
    answer: "Mandatory",
    hint: "Strict access based on policies.",
    blank: "xxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/mandatory-access-control>",
  },
  {
    category: "CISSP",
    question: "What is spear phishing?",
    answer: "Targeted",
    hint: "Phishing aimed at specific people.",
    blank: "xxxxxxxx",
    review:
      "<https://www.csoonline.com/article/2117843/what-is-spear-phishing.html>",
  },
  {
    category: "CISSP",
    question: "What is a sandbox in cybersecurity?",
    answer: "Test",
    hint: "Used to test for malware.",
    blank: "xxxxx",
    review: "<https://www.techtarget.com/searchsecurity/definition/sandbox>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of VPN?",
    answer: "Secure",
    hint: "Protects online communications.",
    blank: "xxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/index.html>",
  },
  {
    category: "CISSP",
    question: "What is the goal of risk analysis?",
    answer: "Evaluate",
    hint: "Identifies potential risks.",
    blank: "xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/risk-analysis>",
  },
  {
    category: "CISSP",
    question: "What does a firewall protect against?",
    answer: "Threats",
    hint: "Filters incoming and outgoing traffic.",
    blank: "xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/firewalls/index.html>",
  },
  {
    category: "CISSP",
    question: "What is the goal of patch management?",
    answer: "Update",
    hint: "Keeps systems current.",
    blank: "xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/patch-management>",
  },
  {
    category: "CISSP",
    question: "What is multifactor authentication?",
    answer: "MFA",
    hint: "Uses multiple verification methods.",
    blank: "xxx",
    review:
      "<https://www.okta.com/identity-101/mfa-multi-factor-authentication/>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of disaster recovery?",
    answer: "Restore",
    hint: "Plans for system recovery.",
    blank: "xxxxxxx",
    review:
      "<https://www.techtarget.com/searchdisasterrecovery/definition/disaster-recovery-plan>",
  },
  {
    category: "CISSP",
    question: "What does IPS stand for?",
    answer: "Prevention",
    hint: "Stops attacks.",
    blank: "xxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/intrusion-prevention-system-ips/index.html>",
  },
  {
    category: "CISSP",
    question: "What is a denial-of-service attack?",
    answer: "Overload",
    hint: "Floods systems with traffic.",
    blank: "xxxxxxxx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of cryptography?",
    answer: "Secure",
    hint: "Protects sensitive data.",
    blank: "xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/cryptography>",
  },
  {
    category: "CISSP",
    question: "What does HTTPS stand for?",
    answer: "Secure",
    hint: "A secure web connection.",
    blank: "xxxxxx",
    review: "<https://www.cloudflare.com/learning/ssl/what-is-https/>",
  },
  {
    category: "CISSP",
    question: "What is a phishing attack?",
    answer: "Deception",
    hint: "Tricks users into sharing data.",
    blank: "xxxxxxxxx",
    review: "<https://www.csoonline.com/article/2117843/what-is-phishing.html>",
  },
  {
    category: "CISSP",
    question: "What is encryption?",
    answer: "Scramble",
    hint: "Transforms data into unreadable form.",
    blank: "xxxxxxxxx",
    review: "<https://www.cisa.gov/encryption-basics>",
  },
  {
    category: "CISSP",
    question: "What is steganography?",
    answer: "Hiding",
    hint: "Hides data in plain sight.",
    blank: "xxxxxx",
    review:
      "<https://www.kaspersky.com/resource-center/definitions/steganography>",
  },
  {
    category: "CISSP",
    question: "What does NIST stand for?",
    answer: "Standards",
    hint: "US cybersecurity framework.",
    blank: "xxxxxxxxxx",
    review: "<https://www.nist.gov>",
  },
  {
    category: "CISSP",
    question: "What is the OSI model?",
    answer: "Layers",
    hint: "Defines network functions.",
    blank: "xxxxxx",
    review:
      "<https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/>",
  },
  {
    category: "CISSP",
    question: "What does PKI stand for?",
    answer: "Keys",
    hint: "Manages encryption.",
    blank: "xxxxxx",
    review: "<https://www.digicert.com/resources/public-key-infrastructure>",
  },
  {
    category: "CISSP",
    question: "What is risk assessment?",
    answer: "Evaluate",
    hint: "Analyzes potential risks.",
    blank: "xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/risk-assessment>",
  },
  {
    category: "CISSP",
    question: "What is the main goal of IAM?",
    answer: "Manage",
    hint: "Manages identities and access.",
    blank: "xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/identity-and-access-management>",
  },
  {
    category: "CISSP",
    question: "What is social engineering?",
    answer: "Manipulation",
    hint: "Tricks people into giving up data.",
    blank: "xxxxxxxxxxxxx",
    review:
      "<https://www.csoonline.com/article/2124681/what-is-social-engineering.html>",
  },
  {
    category: "CISSP",
    question: "What is an attack surface?",
    answer: "Exposure points",
    hint: "Potential vulnerabilities in a system.",
    blank: "xxxxxxxx xxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/attack-surface>",
  },
  {
    category: "CISSP",
    question: "What does a digital signature ensure?",
    answer: "Authenticity",
    hint: "Verifies sender identity.",
    blank: "xxxxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/digital-signature>",
  },
  {
    category: "CISSP",
    question: "What is privilege escalation?",
    answer: "Unauthorized",
    hint: "Gaining higher access levels.",
    blank: "xxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/privilege-escalation.html>",
  },
  {
    category: "CISSP",
    question: "What is network segmentation?",
    answer: "Isolation",
    hint: "Divides networks into segments.",
    blank: "xxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/network-segmentation>",
  },
  {
    category: "CISSP",
    question: 'What does "CIA triad" mean?',
    answer: "Confidentiality",
    hint: "Three pillars of security.",
    blank: "xxxxxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html>",
  },
  {
    category: "CISSP",
    question: "What is malware analysis?",
    answer: "Study",
    hint: "Examines malicious software.",
    blank: "xxxxx",
    review:
      "<https://www.kaspersky.com/resource-center/definitions/malware-analysis>",
  },
  {
    category: "CISSP",
    question: "What is a honeypot?",
    answer: "Decoy",
    hint: "Lures attackers.",
    blank: "xxxxx",
    review: "<https://www.techtarget.com/searchsecurity/definition/honeypot>",
  },
  {
    category: "CISSP",
    question: "What does SIEM stand for?",
    answer: "Monitoring",
    hint: "Security monitoring tool.",
    blank: "xxxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/siem/index.html>",
  },
  {
    category: "CISSP",
    question: "What is a security policy?",
    answer: "Guidelines",
    hint: "Defines rules and controls.",
    blank: "xxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/security-policy>",
  },
  {
    category: "CISSP",
    question: "What does DLP protect against?",
    answer: "Data loss",
    hint: "Prevents unauthorized data transfer.",
    blank: "xxxx xxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/data-loss-prevention/index.html>",
  },
  {
    category: "CISSP",
    question: "What is a rootkit?",
    answer: "Hidden malware",
    hint: "Provides unauthorized system access.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://www.kaspersky.com/resource-center/threats/rootkits>",
  },
  {
    category: "CISSP",
    question: "What is DNS poisoning?",
    answer: "Fake addresses",
    hint: "Alters DNS queries.",
    blank: "xxxx xxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/DNS-poisoning>",
  },
  {
    category: "CISSP",
    question: "What is a threat actor?",
    answer: "Attacker",
    hint: "Person or group initiating threats.",
    blank: "xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/threat-intelligence/index.html>",
  },
  {
    category: "CISSP",
    question: "What is penetration testing?",
    answer: "Simulated attack",
    hint: "Tests system vulnerabilities.",
    blank: "xxxxxxxxxx xxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/penetration-testing.html>",
  },
  {
    category: "CISSP",
    question: "What does MFA stand for?",
    answer: "Multi-factor authentication",
    hint: "Uses multiple authentication methods.",
    blank: "xxxxxxxxxxxxxxx",
    review: "<https://www.okta.com/identity-101/multi-factor-authentication/>",
  },
  {
    category: "CISSP",
    question: "What is a denial-of-service attack?",
    answer: "System overload",
    hint: "Floods servers with traffic.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>",
  },
  {
    category: "CISSP",
    question: "What is an insider threat?",
    answer: "Employee risk",
    hint: "Internal users posing security risks.",
    blank: "xxxxxxxxx xxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/insider-threats.html>",
  },
  {
    category: "CISSP",
    question: "What is endpoint security?",
    answer: "Device protection",
    hint: "Secures endpoints like laptops.",
    blank: "xxxxxx xxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/endpoint-security/index.html>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of an audit log?",
    answer: "Activity records",
    hint: "Tracks events and changes.",
    blank: "xxxxxxxx xxxxxxx",
    review: "<https://www.techtarget.com/searchsecurity/definition/audit-log>",
  },
  {
    category: "CISSP",
    question: "What is vulnerability scanning?",
    answer: "Weakness detection",
    hint: "Finds system vulnerabilities.",
    blank: "xxxxxxxxxx xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/vulnerability-scan>",
  },
  {
    category: "CISSP",
    question: "What is data encryption?",
    answer: "Scramble data",
    hint: "Protects sensitive information.",
    blank: "xxxxxxxx xxxxx",
    review: "<https://www.cisa.gov/encryption-basics>",
  },
  {
    category: "CISSP",
    question: "What is an attack vector?",
    answer: "Entry point",
    hint: "Path used by attackers.",
    blank: "xxxxx xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/attack-vector>",
  },
  {
    category: "CISSP",
    question: "What does risk assessment evaluate?",
    answer: "Threats",
    hint: "Analyzes potential dangers.",
    blank: "xxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/risk-assessment>",
  },
  {
    category: "CISSP",
    question: "What is a zero-day vulnerability?",
    answer: "Unknown flaw",
    hint: "Exploited before discovery.",
    blank: "xxxxxxx xxxx",
    review:
      "<https://www.kaspersky.com/resource-center/threats/zero-day-exploit>",
  },
  {
    category: "CISSP",
    question: "What does WAF stand for?",
    answer: "Web Application Firewall",
    hint: "Protects web apps.",
    blank: "xxx xxxxxxxxxx xxxxxxxx",
    review:
      "<https://www.cloudflare.com/learning/security/glossary/web-application-firewall-waf/>",
  },
  {
    category: "CISSP",
    question: "What is a supply chain attack?",
    answer: "Third-party exploit",
    hint: "Targets vendors or suppliers.",
    blank: "xxxxxxxxxx xxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/supply-chain-attack>",
  },
  {
    category: "CISSP",
    question: "What is an APT?",
    answer: "Persistent attacker",
    hint: "Long-term targeted attack.",
    blank: "xxxxxxxxxx xxxxxxxx",
    review:
      "<https://www.csoonline.com/article/2124681/what-is-an-advanced-persistent-threat.html>",
  },
  {
    category: "CISSP",
    question: "What is endpoint detection?",
    answer: "Monitor endpoints",
    hint: "Protects devices like laptops.",
    blank: "xxxxxxx xxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/endpoint-security/index.html>",
  },
  {
    category: "CISSP",
    question: "What is two-factor authentication?",
    answer: "MFA",
    hint: "Requires two forms of proof.",
    blank: "xxx",
    review:
      "<https://www.okta.com/identity-101/what-is-multi-factor-authentication/>",
  },
  {
    category: "CISSP",
    question: "What does SSL secure?",
    answer: "Web traffic",
    hint: "Encrypts online communications.",
    blank: "xxx xxxxxxx",
    review: "<https://www.cloudflare.com/learning/ssl/what-is-ssl/>",
  },
  {
    category: "CISSP",
    question: "What does DRP stand for?",
    answer: "Disaster Recovery Plan",
    hint: "For system restoration.",
    blank: "xxxxxxx xxxxxxxxx xxxxx",
    review:
      "<https://www.techtarget.com/searchdisasterrecovery/definition/disaster-recovery-plan>",
  },
  {
    category: "CISSP",
    question: "What is the goal of data classification?",
    answer: "Organize",
    hint: "Prioritize data by sensitivity.",
    blank: "xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/data-classification>",
  },
  {
    category: "CISSP",
    question: "What is a digital certificate?",
    answer: "Authentication",
    hint: "Verifies identities.",
    blank: "xxxxxxxxxxxxx",
    review: "<https://www.digicert.com/resources/what-is-digital-certificate>",
  },
  {
    category: "CISSP",
    question: "What is a vulnerability scan?",
    answer: "Weakness detection",
    hint: "Finds security gaps.",
    blank: "xxxxxxxxxx xxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/vulnerability-scan>",
  },
  {
    category: "CISSP",
    question: "What is a common phishing tactic?",
    answer: "Email spoofing",
    hint: "Pretends to be legitimate.",
    blank: "xxxxx xxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/email-spoofing>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of a honeynet?",
    answer: "Decoy network",
    hint: "Lures attackers to study.",
    blank: "xxxxx xxxxxxx",
    review:
      "<https://www.csoonline.com/article/2118426/what-is-a-honeynet.html>",
  },
  {
    category: "CISSP",
    question: "What is the purpose of IDS?",
    answer: "Monitor threats",
    hint: "Detects suspicious activities.",
    blank: "xxxxxxx xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/intrusion-detection-system-ids/index.html>",
  },
  {
    category: "CISSP",
    question: "What is least privilege?",
    answer: "Minimize access",
    hint: "Restrict unnecessary permissions.",
    blank: "xxxxxxx xxxxxxx",
    review: "<https://www.cisa.gov/uscert/ncas/tips/ST04-001>",
  },
  {
    category: "CISSP",
    question: "What does AAA stand for in security?",
    answer: "Authentication, Authorization, Accounting",
    hint: "Three security principles.",
    blank: "xxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/AAA-authentication-authorization-and-accounting>",
  },
  {
    category: "CISSP",
    question: "What is a botnet?",
    answer: "Infected devices",
    hint: "Controlled by an attacker.",
    blank: "xxxxxxxx xxxxxxx",
    review: "<https://www.cloudflare.com/learning/ddos/glossary/botnet/>",
  },
  {
    category: "CISSP",
    question: "What is malware obfuscation?",
    answer: "Hide malware",
    hint: "Avoid detection.",
    blank: "xxxx xxxxxxx",
    review:
      "<https://www.csoonline.com/article/2117845/malware-obfuscation.html>",
  },
  {
    category: "CISSP",
    question: "What is a penetration test?",
    answer: "Simulated attack",
    hint: "Checks vulnerabilities.",
    blank: "xxxxxxxx xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/penetration-testing>",
  },
  {
    category: "CISSP",
    question: "What is a sandbox in cybersecurity?",
    answer: "Test environment",
    hint: "Isolate threats.",
    blank: "xxxxx xxxxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/sandboxing.html>",
  },
  {
    category: "CISSP",
    question: "What is a rootkit?",
    answer: "Hidden control",
    hint: "Hides malicious processes.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://www.kaspersky.com/resource-center/threats/rootkits>",
  },
  {
    category: "CISSP",
    question: "What is a SOC in cybersecurity?",
    answer: "Security operations center",
    hint: "Monitors and responds to threats.",
    blank: "xxxxxxx xxxxxxxxxx xxxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/security-operations-center-SOC>",
  },
  {
    category: "CISSP",
    question: "What is the principle of defense in depth?",
    answer: "Layered security",
    hint: "Multiple security measures.",
    blank: "xxxxxxx xxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/defense-in-depth.html>",
  },
  {
    category: "CISSP",
    question: "What is an insider threat?",
    answer: "Employee risk",
    hint: "Internal user posing risk.",
    blank: "xxxxxxxxx xxxx",
    review:
      "<https://www.csoonline.com/article/2117841/what-is-an-insider-threat.html>",
  },
  {
    category: "CISSP",
    question: "What is data exfiltration?",
    answer: "Data theft",
    hint: "Unauthorized data transfer.",
    blank: "xxxx xxxxx",
    review:
      "<https://www.techtarget.com/searchsecurity/definition/data-exfiltration>",
  },
];

module.exports = {
  category: "CISSP",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * cisspquestions.length);
    return cisspquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return cisspquestions;
  },
};
