let caspQuestions = [
    {
      category: "CompTIA CASP+",
      question: "What security model prevents data leakage by enforcing read-down and write-up rules?",
      answer: "Bell-LaPadula",
      hint: "Focuses on confidentiality.",
      blank: "xxxx-xxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Bell%E2%80%93LaPadula_model>"
    },
    {
      category: "CompTIA CASP+",
      question: "What type of encryption uses the same key for encryption and decryption?",
      answer: "Symmetric",
      hint: "One key for both.",
      blank: "xxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Symmetric-key_algorithm>"
    },
    {
      category: "CompTIA CASP+",
      question: "What framework is used for security risk management?",
      answer: "NIST",
      hint: "National framework.",
      blank: "xxxx",
      review: "<https://www.nist.gov/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is the process of making a system more secure called?",
      answer: "Hardening",
      hint: "Strengthen security.",
      blank: "xxxxxxxxx",
      review: "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-hardening.html>"
    },
    {
      category: "CompTIA CASP+",
      question: "What protocol ensures secure communication over the internet?",
      answer: "TLS",
      hint: "Successor to SSL.",
      blank: "xxx",
      review: "<https://www.cloudflare.com/learning/ssl/what-is-tls/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What term describes software vulnerabilities not yet disclosed?",
      answer: "Zero-day",
      hint: "Exploited before patching.",
      blank: "xxxx-xxx",
      review: "<https://en.wikipedia.org/wiki/Zero-day_(computing)>"
    },
    {
      category: "CompTIA CASP+",
      question: "What security principle minimizes access to only what's necessary?",
      answer: "Least privilege",
      hint: "Restrict access.",
      blank: "xxxxx xxxxxxxxx",
      review: "<https://www.cisa.gov/cybersecurity-training-principle-least-privilege>"
    },
    {
      category: "CompTIA CASP+",
      question: "What type of malware locks users out of their systems?",
      answer: "Ransomware",
      hint: "Demands payment.",
      blank: "xxxxxxxxxxx",
      review: "<https://www.cisa.gov/ransomware>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is the primary goal of incident response?",
      answer: "Containment",
      hint: "Minimize damage.",
      blank: "xxxxxxxxxxx",
      review: "<https://www.sans.org/information-security-training/incident-handling-steps/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What tool scans networks for vulnerabilities?",
      answer: "Nmap",
      hint: "Open-source scanner.",
      blank: "xxxx",
      review: "<https://nmap.org/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What security standard is used for payment card transactions?",
      answer: "PCI DSS",
      hint: "Payment compliance.",
      blank: "xxx xxx",
      review: "<https://www.pcisecuritystandards.org/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What type of attack overloads a system with traffic?",
      answer: "DDoS",
      hint: "Distributed attack.",
      blank: "xxxx",
      review: "<https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What process evaluates the effectiveness of security controls?",
      answer: "Assessment",
      hint: "Analyze security.",
      blank: "xxxxxxxxxx",
      review: "<https://www.nist.gov/itl/cybersecurity-framework>"
    },
    {
      category: "CompTIA CASP+",
      question: "What does SIEM stand for?",
      answer: "Security Information and Event Management",
      hint: "Security monitoring tool.",
      blank: "xxxxxxxx xxxxxxxxxx xxx xxxxx xxxxxxxxx",
      review: "<https://www.ibm.com/security/siem>"
    },
    {
      category: "CompTIA CASP+",
      question: "What ensures data integrity in transit?",
      answer: "Hashing",
      hint: "One-way function.",
      blank: "xxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Cryptographic_hash_function>"
    },
    {
      category: "CompTIA CASP+",
      question: "What technique hides data within other data?",
      answer: "Steganography",
      hint: "Hidden in plain sight.",
      blank: "xxxxxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Steganography>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is used to isolate network traffic?",
      answer: "VLAN",
      hint: "Virtual segments.",
      blank: "xxxx",
      review: "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-vlan.html>"
    },
    {
      category: "CompTIA CASP+",
      question: "What term describes the process of verifying identity?",
      answer: "Authentication",
      hint: "Prove who you are.",
      blank: "xxxxxxxxxxxxxx",
      review: "<https://www.okta.com/identity-101/what-is-authentication/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is a security feature of WPA3?",
      answer: "Forward secrecy",
      hint: "Encrypts sessions.",
      blank: "xxxxxxx xxxxxxx",
      review: "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/wpa3.html>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is used to collect and analyze security data?",
      answer: "Log management",
      hint: "Centralized logs.",
      blank: "xxx xxxxxxxxxx",
      review: "<https://www.splunk.com/en_us/data-insights/log-management.html>"
    },
    {
      category: "CompTIA CASP+",
      question: "What ensures a backup can be restored?",
      answer: "Testing",
      hint: "Validate backups.",
      blank: "xxxxxxx",
      review: "<https://www.veritas.com/backup-testing>"
    },
    {
      category: "CompTIA CASP+",
      question: "What cloud model is dedicated to one organization?",
      answer: "Private cloud",
      hint: "Exclusive use.",
      blank: "xxxxxxx xxxxx",
      review: "<https://aws.amazon.com/private-cloud/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What type of cryptography uses two keys?",
      answer: "Asymmetric",
      hint: "Public and private keys.",
      blank: "xxxxxxxxxx",
      review: "<https://en.wikipedia.org/wiki/Public-key_cryptography>"
    },
    {
      category: "CompTIA CASP+",
      question: "What process ensures systems are configured securely?",
      answer: "Baseline",
      hint: "Security configuration.",
      blank: "xxxxxxxx",
      review: "<https://csrc.nist.gov/glossary/term/security_configuration_baseline>"
    },
    {
      category: "CompTIA CASP+",
      question: "What device filters traffic based on rules?",
      answer: "Firewall",
      hint: "Network protection.",
      blank: "xxxxxxxx",
      review: "<https://www.cloudflare.com/learning/firewalls/what-is-a-firewall/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What port is used for HTTPS?",
      answer: "443",
      hint: "Secure web traffic.",
      blank: "xxx",
      review: "<https://en.wikipedia.org/wiki/HTTPS>"
    },
    {
      category: "CompTIA CASP+",
      question: "What does MFA stand for?",
      answer: "Multi-factor authentication",
      hint: "Uses multiple factors.",
      blank: "xxxxx-xxxx xxxxxxxxxxxxx",
      review: "<https://www.okta.com/multi-factor-authentication/>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is a method to mitigate insider threats?",
      answer: "Separation of duties",
      hint: "Divide responsibilities.",
      blank: "xxxxxxxxx xx xxxxxx",
      review: "<https://www.cisa.gov/separation-of-duties>"
    },
    {
      category: "CompTIA CASP+",
      question: "What is the process of identifying potential threats?",
      answer: "Threat modeling",
      hint: "Identify risks.",
      blank: "xxxxxx xxxxxxx",
      review: "<https://owasp.org/www-community/Threat_Modeling>"
    },
    {
      category: "CompTIA CASP+",
      question: "What prevents unauthorized access to mobile devices?",
      answer: "MDM",
      hint: "Manage mobile security.",
      blank: "xxx",
      review: "<https://www.vmware.com/topics/glossary/content/mobile-device-management.html>"
    }
  ];
  
  module.exports = {
    category: "CompTIA CASP+",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * caspQuestions.length);
      return caspQuestions[randomIndex];
    }
  };
  