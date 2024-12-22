let caspQuestions = [
  {
    category: "CompTIA CASP+",
    question:
      "What security model prevents data leakage by enforcing read-down and write-up rules?",
    answer: "Bell-LaPadula",
    hint: "Focuses on confidentiality.",
    blank: "xxxx-xxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Bell%E2%80%93LaPadula_model>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What type of encryption uses the same key for encryption and decryption?",
    answer: "Symmetric",
    hint: "One key for both.",
    blank: "xxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Symmetric-key_algorithm>",
  },
  {
    category: "CompTIA CASP+",
    question: "What framework is used for security risk management?",
    answer: "NIST",
    hint: "National framework.",
    blank: "xxxx",
    review: "<https://www.nist.gov/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the process of making a system more secure called?",
    answer: "Hardening",
    hint: "Strengthen security.",
    blank: "xxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-hardening.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What protocol ensures secure communication over the internet?",
    answer: "TLS",
    hint: "Successor to SSL.",
    blank: "xxx",
    review: "<https://www.cloudflare.com/learning/ssl/what-is-tls/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What term describes software vulnerabilities not yet disclosed?",
    answer: "Zero-day",
    hint: "Exploited before patching.",
    blank: "xxxx-xxx",
    review: "<https://en.wikipedia.org/wiki/Zero-day_(computing)>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What security principle minimizes access to only what's necessary?",
    answer: "Least privilege",
    hint: "Restrict access.",
    blank: "xxxxx xxxxxxxxx",
    review:
      "<https://www.cisa.gov/cybersecurity-training-principle-least-privilege>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of malware locks users out of their systems?",
    answer: "Ransomware",
    hint: "Demands payment.",
    blank: "xxxxxxxxxxx",
    review: "<https://www.cisa.gov/ransomware>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the primary goal of incident response?",
    answer: "Containment",
    hint: "Minimize damage.",
    blank: "xxxxxxxxxxx",
    review:
      "<https://www.sans.org/information-security-training/incident-handling-steps/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What tool scans networks for vulnerabilities?",
    answer: "Nmap",
    hint: "Open-source scanner.",
    blank: "xxxx",
    review: "<https://nmap.org/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What security standard is used for payment card transactions?",
    answer: "PCI DSS",
    hint: "Payment compliance.",
    blank: "xxx xxx",
    review: "<https://www.pcisecuritystandards.org/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of attack overloads a system with traffic?",
    answer: "DDoS",
    hint: "Distributed attack.",
    blank: "xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What process evaluates the effectiveness of security controls?",
    answer: "Assessment",
    hint: "Analyze security.",
    blank: "xxxxxxxxxx",
    review: "<https://www.nist.gov/itl/cybersecurity-framework>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does SIEM stand for?",
    answer: "Security Information and Event Management",
    hint: "Security monitoring tool.",
    blank: "xxxxxxxx xxxxxxxxxx xxx xxxxx xxxxxxxxx",
    review: "<https://www.ibm.com/security/siem>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures data integrity in transit?",
    answer: "Hashing",
    hint: "One-way function.",
    blank: "xxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Cryptographic_hash_function>",
  },
  {
    category: "CompTIA CASP+",
    question: "What technique hides data within other data?",
    answer: "Steganography",
    hint: "Hidden in plain sight.",
    blank: "xxxxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Steganography>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is used to isolate network traffic?",
    answer: "VLAN",
    hint: "Virtual segments.",
    blank: "xxxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-vlan.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What term describes the process of verifying identity?",
    answer: "Authentication",
    hint: "Prove who you are.",
    blank: "xxxxxxxxxxxxxx",
    review: "<https://www.okta.com/identity-101/what-is-authentication/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is a security feature of WPA3?",
    answer: "Forward secrecy",
    hint: "Encrypts sessions.",
    blank: "xxxxxxx xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/wpa3.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is used to collect and analyze security data?",
    answer: "Log management",
    hint: "Centralized logs.",
    blank: "xxx xxxxxxxxxx",
    review: "<https://www.splunk.com/en_us/data-insights/log-management.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures a backup can be restored?",
    answer: "Testing",
    hint: "Validate backups.",
    blank: "xxxxxxx",
    review: "<https://www.veritas.com/backup-testing>",
  },
  {
    category: "CompTIA CASP+",
    question: "What cloud model is dedicated to one organization?",
    answer: "Private cloud",
    hint: "Exclusive use.",
    blank: "xxxxxxx xxxxx",
    review: "<https://aws.amazon.com/private-cloud/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of cryptography uses two keys?",
    answer: "Asymmetric",
    hint: "Public and private keys.",
    blank: "xxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Public-key_cryptography>",
  },
  {
    category: "CompTIA CASP+",
    question: "What process ensures systems are configured securely?",
    answer: "Baseline",
    hint: "Security configuration.",
    blank: "xxxxxxxx",
    review:
      "<https://csrc.nist.gov/glossary/term/security_configuration_baseline>",
  },
  {
    category: "CompTIA CASP+",
    question: "What device filters traffic based on rules?",
    answer: "Firewall",
    hint: "Network protection.",
    blank: "xxxxxxxx",
    review:
      "<https://www.cloudflare.com/learning/firewalls/what-is-a-firewall/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What port is used for HTTPS?",
    answer: "443",
    hint: "Secure web traffic.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/HTTPS>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does MFA stand for?",
    answer: "Multi-factor authentication",
    hint: "Uses multiple factors.",
    blank: "xxxxx-xxxx xxxxxxxxxxxxx",
    review: "<https://www.okta.com/multi-factor-authentication/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is a method to mitigate insider threats?",
    answer: "Separation of duties",
    hint: "Divide responsibilities.",
    blank: "xxxxxxxxx xx xxxxxx",
    review: "<https://www.cisa.gov/separation-of-duties>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the process of identifying potential threats?",
    answer: "Threat modeling",
    hint: "Identify risks.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://owasp.org/www-community/Threat_Modeling>",
  },
  {
    category: "CompTIA CASP+",
    question: "What prevents unauthorized access to mobile devices?",
    answer: "MDM",
    hint: "Manage mobile security.",
    blank: "xxx",
    review:
      "<https://www.vmware.com/topics/glossary/content/mobile-device-management.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the primary purpose of a VPN?",
    answer: "Secure communication",
    hint: "Protects data in transit.",
    blank: "xxxxxx xxxxxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/what-is-vpn.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What security principle ensures accountability?",
    answer: "Non-repudiation",
    hint: "Cannot deny actions.",
    blank: "xxx-xxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Non-repudiation>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What type of testing evaluates a system's security by simulating attacks?",
    answer: "Penetration testing",
    hint: "Ethical hacking.",
    blank: "xxxxxxxxxxx xxxxxxx",
    review:
      "<https://www.crowdstrike.com/cybersecurity-101/penetration-testing/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What cryptographic concept ensures data confidentiality?",
    answer: "Encryption",
    hint: "Secures data.",
    blank: "xxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Encryption>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does a rootkit target to avoid detection?",
    answer: "Operating system",
    hint: "Deeply embedded.",
    blank: "xxxxxxxx xxxxxxx",
    review:
      "<https://www.csoonline.com/article/3255386/what-is-a-rootkit-and-how-to-remove-it.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What protocol is commonly used for directory services?",
    answer: "LDAP",
    hint: "Lightweight directory.",
    blank: "xxxx",
    review: "<https://ldap.com/>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What security process continuously scans for threats in real-time?",
    answer: "Intrusion detection",
    hint: "Detects malicious activity.",
    blank: "xxxxxxxx xxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/intrusion-detection-system-ids/index.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does a DMZ in a network architecture provide?",
    answer: "Isolated access",
    hint: "Protects internal systems.",
    blank: "xxxxxxxx xxxxxx",
    review:
      "<https://www.cloudflare.com/learning/ddos/glossary/dmz-demilitarized-zone/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the purpose of multi-tenancy in cloud computing?",
    answer: "Resource sharing",
    hint: "Shared infrastructure.",
    blank: "xxxxxxxx xxxxxxx",
    review: "<https://aws.amazon.com/what-is-multi-tenancy/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of malware collects sensitive user information?",
    answer: "Spyware",
    hint: "Monitors activities.",
    blank: "xxxxxxx",
    review:
      "<https://www.kaspersky.com/resource-center/threats/what-is-spyware>",
  },
  {
    category: "CompTIA CASP+",
    question: "What concept refers to isolating systems to reduce risk?",
    answer: "Segmentation",
    hint: "Divide and protect.",
    blank: "xxxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/segmentation.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the primary focus of GDPR?",
    answer: "Data protection",
    hint: "Privacy for individuals.",
    blank: "xxxx xxxxxxxxxx",
    review: "<https://gdpr-info.eu/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of malware disguises itself as legitimate software?",
    answer: "Trojan horse",
    hint: "Hidden threat.",
    blank: "xxxxxx xxxxx",
    review: "<https://www.avast.com/c-trojan>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What technique ensures secure key exchange over an untrusted network?",
    answer: "Diffie-Hellman",
    hint: "Cryptographic algorithm.",
    blank: "xxxxxx-xxxxxxxxx",
    review:
      "<https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of attack exploits a buffer overflow vulnerability?",
    answer: "Code injection",
    hint: "Injects malicious code.",
    blank: "xxxx xxxxxxxxx",
    review: "<https://owasp.org/www-community/attacks/Buffer_Overflow>",
  },
  {
    category: "CompTIA CASP+",
    question: "What technology authenticates users using biometrics?",
    answer: "Facial recognition",
    hint: "Unique features.",
    blank: "xxxxxx xxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/security/biometric-authentication.html>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What principle involves assessing risks to prioritize mitigation efforts?",
    answer: "Risk assessment",
    hint: "Evaluate threats.",
    blank: "xxxx xxxxxxxxxx",
    review: "<https://www.nist.gov/itl/applied-cybersecurity/risk-management>",
  },
  {
    category: "CompTIA CASP+",
    question: "What encryption protocol is used in WPA2?",
    answer: "AES",
    hint: "Advanced encryption standard.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/IEEE_802.11i-2004>",
  },
  {
    category: "CompTIA CASP+",
    question:
      "What term describes the ability to recover quickly from a failure?",
    answer: "Resilience",
    hint: "Bounce back.",
    blank: "xxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Resilience_(network)>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is a common method to mitigate phishing attacks?",
    answer: "Awareness training",
    hint: "Educate users.",
    blank: "xxxxxxxxx xxxxxxx",
    review: "<https://www.cisa.gov/phishing-awareness>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does the CIA triad represent?",
    answer: "Confidentiality, integrity, availability",
    hint: "Three core security principles.",
    blank: "xxxxxxxxxxxxxxx, xxxxxxxxx, xxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Information_security>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures users are who they claim to be?",
    answer: "Authentication",
    hint: "Verify identity.",
    blank: "xxxxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Authentication>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the goal of encryption?",
    answer: "Confidentiality",
    hint: "Keeps data private.",
    blank: "xxxxxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Encryption>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does IDS stand for?",
    answer: "Intrusion detection system",
    hint: "Monitors for threats.",
    blank: "xxxxxxxx xxxxxxxxx xxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/ids/index.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What prevents data loss in motion?",
    answer: "Encryption",
    hint: "Protects in transit.",
    blank: "xxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Data_loss_prevention>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of attack modifies DNS records?",
    answer: "DNS spoofing",
    hint: "Tampered DNS responses.",
    blank: "xxx xxxxxxxx",
    review: "<https://www.cloudflare.com/learning/dns/dns-spoofing/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures data is unchanged?",
    answer: "Integrity",
    hint: "No tampering.",
    blank: "xxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Data_integrity>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the goal of risk assessment?",
    answer: "Identify risks",
    hint: "Discover threats and vulnerabilities.",
    blank: "xxxxxxxx xxxxx",
    review: "<https://www.nist.gov/itl/risk-assessment>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does a VPN protect?",
    answer: "Data in transit",
    hint: "Secures communication.",
    blank: "xxxx xx xxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/vpn/index.html>",
  },
  {
    category: "CompTIA CASP+",
    question: "What attack targets the ARP protocol?",
    answer: "ARP spoofing",
    hint: "Misleads MAC addresses.",
    blank: "xxx xxxxxxxx",
    review: "<https://www.cloudflare.com/learning/security/arp-spoofing/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is a common malware delivery method?",
    answer: "Phishing",
    hint: "Email-based attack.",
    blank: "xxxxxxxx",
    review: "<https://www.cisa.gov/phishing>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures a user's actions are traceable?",
    answer: "Accountability",
    hint: "Tracking activity.",
    blank: "xxxxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Accountability>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does DMZ stand for in networking?",
    answer: "Demilitarized zone",
    hint: "Isolates public-facing services.",
    blank: "xxxxxxxxxxxxx xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/glossary/dmz/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What prevents unauthorized access to systems?",
    answer: "Firewall",
    hint: "Applies network rules.",
    blank: "xxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Firewall_(computing)>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures only authorized users access data?",
    answer: "Access control",
    hint: "Restrict data access.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Access_control>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does SSL stand for?",
    answer: "Secure sockets layer",
    hint: "Protects web traffic.",
    blank: "xxxxxx xxxxxxx xxxxx",
    review: "<https://en.wikipedia.org/wiki/Transport_Layer_Security>",
  },
  {
    category: "CompTIA CASP+",
    question: "What mitigates insider threats?",
    answer: "Access control",
    hint: "Restrict privileges.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://www.cisa.gov/insider-threat>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the purpose of hashing?",
    answer: "Integrity",
    hint: "Verify data.",
    blank: "xxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Cryptographic_hash_function>",
  },
  {
    category: "CompTIA CASP+",
    question: "What framework guides cybersecurity programs?",
    answer: "NIST CSF",
    hint: "American standard.",
    blank: "xxxx xxx",
    review: "<https://www.nist.gov/cyberframework>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does IPsec secure?",
    answer: "Network traffic",
    hint: "Encrypts communication.",
    blank: "xxxxxxx xxxxxxx",
    review: "<https://en.wikipedia.org/wiki/IPsec>",
  },
  {
    category: "CompTIA CASP+",
    question: "What is the first incident response step?",
    answer: "Preparation",
    hint: "Be ready.",
    blank: "xxxxxxxxxx",
    review:
      "<https://www.sans.org/information-security-training/incident-handling-steps/>",
  },
  {
    category: "CompTIA CASP+",
    question: "What ensures data is available when needed?",
    answer: "Availability",
    hint: "Prevent downtime.",
    blank: "xxxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Availability>",
  },
  {
    category: "CompTIA CASP+",
    question: "What protocol resolves IP addresses to names?",
    answer: "DNS",
    hint: "Domain Name System.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/Domain_Name_System>",
  },
  {
    category: "CompTIA CASP+",
    question: "What protects data at rest?",
    answer: "Encryption",
    hint: "Locks stored files.",
    blank: "xxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Encryption>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of firewall inspects packet contents?",
    answer: "Application",
    hint: "Operates at Layer 7.",
    blank: "xxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Firewall_(computing)>",
  },
  {
    category: "CompTIA CASP+",
    question: "What are default credentials a risk for?",
    answer: "Access control",
    hint: "Unauthorized login.",
    blank: "xxxxxx xxxxxxx",
    review: "<https://www.cisa.gov/default-credentials-risk>",
  },
  {
    category: "CompTIA CASP+",
    question: "What protocol ensures confidentiality over HTTP?",
    answer: "HTTPS",
    hint: "Secured web traffic.",
    blank: "xxxxx",
    review: "<https://en.wikipedia.org/wiki/HTTPS>",
  },
  {
    category: "CompTIA CASP+",
    question: "What type of malware hijacks computer operations?",
    answer: "Ransomware",
    hint: "Demands payment.",
    blank: "xxxxxxxxxxx",
    review: "<https://en.wikipedia.org/wiki/Ransomware>",
  },
  {
    category: "CompTIA CASP+",
    question: "What does 'BYOD' stand for?",
    answer: "Bring your own device",
    hint: "Personal devices at work.",
    blank: "xxxxx xxxx xxxx xxxxxx",
    review:
      "<https://www.techtarget.com/definition/BYOD-bring-your-own-device>",
  },
];

module.exports = {
  category: "CompTIA CASP+",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * caspQuestions.length);
    return caspQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return caspQuestions;
  },
};
