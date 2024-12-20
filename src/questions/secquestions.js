let secquestions = [
    {
      category: 'CompTIA Security+',
      question: 'Which analysis framework provides the most explicit detail regarding how to mitigate or detect a given threat?',
      answer: 'MITRE ATT&CK framework',
      hint: 'Lockheed, diamond or MITRE',
      blank: 'xxxxx xxx&xx xxxxxxxxx',
      review: '<https://attack.mitre.org/>',
    },
    {
      category: 'CompTIA Security+',
      question: 'What encryption method is excellent at verifying disk & file integrity?',
      answer: 'SHA-256',
      hint: 'SHA-xxx',
      blank: 'xxx-xxx',
      review: '<https://support.google.com/google-ads/answer/9004655?hl=en>',
    },
    {
      category: 'CompTIA Security+',
      question: 'Which of the following types of data breaches would require that the US Department of Health and Human Services and the media be notified if more than 500 individuals are affected by a data breach?',
      answer: 'Protected health information',
      hint: 'PHI',
      blank: 'xxxxxxxxx xxxxxx xxxxxxxxxxx',
      review: '<https://www.niu.edu/doit/about/policies/hipaa-breach-notification-rule.shtml>',
    },
    {
      category: 'CompTIA Security+',
      question: 'Which type of threat actor can accidentally or inadvertently cause a security incident in your organization?',
      answer: 'Insider threat',
      hint: 'It could be you!',
      blank: 'xxxxxxx xxxxxx',
      review: '<https://www.opentext.com/what-is/insider-threat>',
    },
    {
      category: 'CompTIA Security+',
      question: 'What should be done NEXT if the final set of security controls does not eliminate all of the risks in a given system?',
      answer: 'accept',
      hint: 'can you do anything more?',
      blank: 'xxxxxx',
      review: '<>',
    },
    {
      category: 'CompTIA Security+',
      question: 'What technology would allow your company to provide a secure SSO solution for accessing both the corporate wireless network and its network resources?',
      answer: 'RADIUS',
      hint: 'not WPA2, WPS, or WEP',
      blank: 'xxxxxx',
      review: '<https://www.fortinet.com/resources/cyberglossary/radius-protocol>',
    },
    {
      category: 'CompTIA Security+',
      question: 'An attacker has been collecting credit card details by calling victims and using false pretexts to trick them?',
      answer: 'Vishing',
      hint: 'Voice what?',
      blank: 'xxxxxxx',
      review: '<https://www.terranovasecurity.com/solutions/security-awareness-training/what-is-vishing>',
    },
    {
      category: 'CompTIA Security+',
      question: 'What is the agreement that specify what is allowed during a penetration test?',
      answer: 'Rules of engagement',
      hint: 'ROE',
      blank: 'xxxxx xx xxxxxxxxxxx',
      review: '<https://csrc.nist.gov/glossary/term/rules_of_engagement>',
    },
    {
        category: 'CompTIA Security+',  
        question: 'If someone says you sent an email but you didn\'t; what kind of attack are you a victim of?',
        answer: 'hijacked email', //'impersonation',
        hint: 'They compromised your email',
        blank: 'xxxxxxxx xxxxx',
        review: '<https://www.ibm.com/topics/business-email-compromise>',
    },
    {
        category: 'CompTIA Security+',  
        question: 'What technology would you implement to seperate an internal network from a guest network?',
        answer: 'vlan',
        hint: 'Virtual Segments',
        blank: 'xxxx',
        review: '<https://www.techtarget.com/searchnetworking/definition/virtual-LAN>',
    },
    {
        category: 'CompTIA Security+',  
        question: 'Which cryptographic algorithm is symmetric? \n (RSA, PGP, Blowfish, ECC)',
        answer: 'Blowfish',
        hint: 'one fish',
        blank: 'xxxxxxxx',
        review: '<https://www.techtarget.com/searchsecurity/definition/Blowfish>',
    },
    {
        category: 'CompTIA Security+',  
        question: 'Which of the following vulnerability scans would provide the best results if you want to determine if the target\'s configuration settings are correct?',
        answer: 'Credentialed scan',
        hint: 'non-credentialed vs credentialed',
        blank: 'xxxxxxxxxxxx xxxx',
        review: '<https://purplesec.us/learn/credentialed-scanning-vs-uncredentialed-scanning/>',
    },
    {
        category: 'CompTIA Security+',  
        question: 'What is it called when a user enters their username and password only once and is gained access to multiple applications',
        answer: 'SSO',
        hint: 'single what?',
        blank: 'xxx',
        review: '<https://www.techtarget.com/searchsecurity/definition/single-sign-on>',
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves tricking individuals into revealing sensitive information via email?",
        answer: "Phishing",
        hint: "Tricking individuals via email",
        blank: "Ph-----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves sending fraudulent messages through SMS?",
        answer: "Smishing",
        hint: "Fraudulent messages through SMS",
        blank: "Sm-----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the term for phone-based social engineering attacks?",
        answer: "Vishing",
        hint: "Phone-based social engineering attacks",
        blank: "Vi----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes unsolicited bulk messages, often sent via email?",
        answer: "Spam",
        hint: "Unsolicited bulk messages via email",
        blank: "Sp--",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the term for unsolicited messages sent over instant messaging platforms?",
        answer: "SPIM",
        hint: "Unsolicited messages via IM",
        blank: "SP--",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of phishing targets specific individuals or organizations?",
        answer: "Spear phishing",
        hint: "Targets specific individuals/organizations",
        blank: "Sp--- ph-----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes searching through trash to find sensitive information?",
        answer: "Dumpster diving",
        hint: "Searching through trash for sensitive info",
        blank: "Du------ di----",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the act of looking over someone's shoulder to obtain information called?",
        answer: "Shoulder surfing",
        hint: "Looking over someone's shoulder",
        blank: "Sh------ su----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack redirects users from a legitimate site to a fraudulent one?",
        answer: "Pharming",
        hint: "Redirects users to fraudulent sites",
        blank: "Ph-----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the act of following someone into a restricted area without authorization?",
        answer: "Tailgating",
        hint: "Following into restricted area without auth",
        blank: "Ta------g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What technique involves extracting information from individuals through conversation?",
        answer: "Eliciting information",
        hint: "Extracting info through conversation",
        blank: "El-----g in-------n",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of phishing targets high-ranking individuals within an organization?",
        answer: "Whaling",
        hint: "Targets high-ranking individuals",
        blank: "W-----g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What technique involves inserting malicious data at the beginning of a message?",
        answer: "Prepending",
        hint: "Inserting malicious data at beginning of message",
        blank: "Pr-------g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What crime involves using someone else's identity for financial gain?",
        answer: "Identity fraud",
        hint: "Using someone else's identity for financial gain",
        blank: "Id------y fr---d",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of scam involves sending fake invoices to trick recipients into paying?",
        answer: "Invoice scams",
        hint: "Sending fake invoices to trick recipients",
        blank: "In----ce sc---s",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the term for the unauthorized acquisition of login credentials?",
        answer: "Credential harvesting",
        hint: "Unauthorized acquisition of login credentials",
        blank: "Cr-----ntial ha---st---g",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the process of gathering information about a target prior to an attack called?",
        answer: "Reconnaissance",
        hint: "Gathering information prior to an attack",
        blank: "Re-------ce",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes a false warning or fabricated threat?",
        answer: "Hoax",
        hint: "False warning or fabricated threat",
        blank: "H---x",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What is the act of pretending to be someone else for malicious purposes called?",
        answer: "Impersonation",
        hint: "Pretending to be someone else for malicious purposes",
        blank: "Im------tion",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes escalating one's privileges beyond their authorized level?",
        answer: "Privilege escalation",
        hint: "Escalating privileges beyond authorization",
        blank: "Privilege escalation",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves injecting malicious code into web applications?",
        answer: "Cross-site scripting",
        hint: "Injecting malicious code into web apps",
        blank: "Cross-site scripting",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attacks involve inserting malicious code or data into an application?",
        answer: "Injections",
        hint: "Inserting malicious code/data into applications",
        blank: "Injections",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What language is often targeted in SQL injection attacks?",
        answer: "Structured query language (SQL)",
        hint: "Targeted language in SQL injection",
        blank: "Structured query language (SQL)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves modifying or replacing DLL files to execute malicious code?",
        answer: "Dynamic-link library (DLL)",
        hint: "Modifying or replacing DLL files",
        blank: "Dynamic-link library (DLL)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What protocol is often targeted in LDAP injection attacks?",
        answer: "Lightweight Directory Access Protocol (LDAP)",
        hint: "Protocol targeted in LDAP injection",
        blank: "Lightweight Directory Access Protocol (LDAP)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What markup language is often targeted in XML injection attacks?",
        answer: "Extensible Markup Language (XML)",
        hint: "Markup language targeted in XML injection",
        blank: "Extensible Markup Language (XML)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of vulnerability involves accessing or modifying memory locations via a pointer or object?",
        answer: "Pointer/object dereference",
        hint: "Accessing/modifying memory via pointer/object",
        blank: "Pointer/object dereference",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves traversing directories to gain unauthorized access to files?",
        answer: "Directory traversal",
        hint: "Traversing directories for unauthorized access",
        blank: "Directory traversal",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of vulnerability involves writing beyond the allocated memory space?",
        answer: "Buffer overflows",
        hint: "Writing beyond allocated memory space",
        blank: "Buffer overflows",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of vulnerability occurs when the outcome of an operation depends on the sequence or timing of other events?",
        answer: "Race conditions",
        hint: "Outcome depends on sequence/timing of events",
        blank: "Race conditions",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of race condition occurs when a resource's status is checked and used at different times?",
        answer: "Time of check/time of use",
        hint: "Resource status checked and used at different times",
        blank: "Time of check/time of use",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What issue arises when an application fails to handle errors properly?",
        answer: "Error handling",
        hint: "Failure to handle errors properly",
        blank: "Error handling",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vulnerability occurs when an application does not properly validate input?",
        answer: "Improper input handling",
        hint: "Failure to properly validate input",
        blank: "Improper input handling",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves replaying previously captured authentication sessions?",
        answer: "Replay attack",
        hint: "Replaying captured authentication sessions",
        blank: "Replay attack",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of replay attack involves replaying entire sessions?",
        answer: "Session replays",
        hint: "Replaying entire sessions",
        blank: "Session replays",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vulnerability occurs when an integer's value exceeds its maximum size?",
        answer: "Integer overflow",
        hint: "Integer value exceeds maximum size",
        blank: "Integer overflow",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves forging requests to gain unauthorized access?",
        answer: "Request forgeries",
        hint: "Forging requests for unauthorized access",
        blank: "Request forgeries",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of server-side attack involves forging requests?",
        answer: "Server-side",
        hint: "Forging requests on server-side",
        blank: "Server-side",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of cross-site attack involves forging requests?",
        answer: "Cross-site",
        hint: "Forging requests in cross-site attacks",
        blank: "Cross-site",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attacks exploit vulnerabilities in APIs?",
        answer: "Application programming interface (API) attacks",
        hint: "Exploiting API vulnerabilities",
        blank: "Application programming interface (API) attacks",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves depleting an application's resources?",
        answer: "Resource exhaustion",
        hint: "Depleting application resources",
        blank: "Resource exhaustion",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vulnerability involves memory allocation without proper deallocation?",
        answer: "Memory leak",
        hint: "Memory allocation without proper deallocation",
        blank: "Memory leak",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves downgrading secure connections to insecure ones?",
        answer: "Secure Sockets Layer (SSL) stripping",
        hint: "Downgrading secure connections",
        blank: "Secure Sockets Layer (SSL) stripping",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of wireless attack involves creating a fake access point to intercept network traffic?",
        answer: "Evil twin",
        hint: "Creating a fake access point",
        blank: "Evil twin",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of unauthorized access point poses as a legitimate one to eavesdrop on data?",
        answer: "Rogue access point",
        hint: "Unauthorized access point posing as legitimate",
        blank: "Rogue access point",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves unauthorized access to Bluetooth-enabled devices to steal information?",
        answer: "Bluesnarfing",
        hint: "Unauthorized access to Bluetooth devices",
        blank: "Bluesnarfing",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves sending unsolicited messages to Bluetooth-enabled devices?",
        answer: "Bluejacking",
        hint: "Sending unsolicited messages to Bluetooth devices",
        blank: "Bluejacking",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What action involves forcefully disconnecting a device from a wireless network?",
        answer: "Disassociation",
        hint: "Forcefully disconnecting device from network",
        blank: "Disassociation",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves interfering with wireless signals to disrupt communication?",
        answer: "Jamming",
        hint: "Interfering with wireless signals",
        blank: "Jamming",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What technology involves wirelessly identifying and tracking tags attached to objects?",
        answer: "Radio frequency identification (RFID)",
        hint: "Wirelessly identifying and tracking tags",
        blank: "Radio frequency identification (RFID)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What short-range wireless technology is commonly used for contactless payments?",
        answer: "Near-field communication (NFC)",
        hint: "Short-range wireless for contactless payments",
        blank: "Near-field communication (NFC)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What cryptographic key is used in wireless networks to encrypt data?",
        answer: "Initialization vector (IV)",
        hint: "Cryptographic key for wireless encryption",
        blank: "Initialization vector (IV)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack intercepts and alters communication between two parties?",
        answer: "On-path attack",
        hint: "Intercepting and altering communication",
        blank: "On-path attack",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What layer of the OSI model do ARP poisoning and MAC flooding attacks occur?",
        answer: "Layer 2",
        hint: "OSI model layer for ARP poisoning and MAC flooding",
        blank: "Layer 2",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves manipulating ARP tables to associate attacker's MAC address with victim's IP address?",
        answer: "Address Resolution Protocol (ARP) poisoning",
        hint: "Manipulating ARP tables for MAC association",
        blank: "Address Resolution Protocol (ARP) poisoning",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What flooding attack involves sending numerous frames with different MAC addresses?",
        answer: "Media access control (MAC) flooding",
        hint: "Flooding attack with numerous MAC addresses",
        blank: "Media access control (MAC) flooding",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attack involves impersonating a legitimate device by using its MAC address?",
        answer: "MAC cloning",
        hint: "Impersonating device by using MAC address",
        blank: "MAC cloning",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What DNS attack involves redirecting queries to malicious servers?",
        answer: "Domain hijacking",
        hint: "Redirecting DNS queries",
        blank: "Domain hijacking",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What DNS attack involves corrupting DNS cache data to redirect users to malicious sites?",
        answer: "DNS poisoning",
        hint: "Corrupting DNS cache to redirect users",
        blank: "DNS poisoning",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What DNS attack involves redirecting users from legitimate URLs to malicious ones?",
        answer: "Uniform Resource Locator (URL) redirection",
        hint: "Redirecting users from legitimate URLs",
        blank: "Uniform Resource Locator (URL) redirection",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What DNS security measure assesses the reputation of domains to identify potential threats?",
        answer: "Domain reputation",
        hint: "Assessing domain reputation for security",
        blank: "Domain reputation",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of DDoS attack overwhelms network resources?",
        answer: "Network",
        hint: "Overwhelming network resources",
        blank: "Network",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of DDoS attack targets applications?",
        answer: "Application",
        hint: "Targeting applications in DDoS attacks",
        blank: "Application",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of DDoS attack targets operational technology systems?",
        answer: "Operational technology",
        hint: "Targeting OT systems in DDoS attacks",
        blank: "Operational technology (OT)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of attack involves executing malicious code or scripts on a system?",
        answer: "Malicious code or script execution",
        hint: "Executing malicious code or scripts",
        blank: "Malicious code or script execution",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What scripting language is commonly used for malicious activities on Windows systems?",
        answer: "PowerShell",
        hint: "Common scripting language for Windows malware",
        blank: "PowerShell",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of threat involves sophisticated, long-term attacks often associated with nation-states?",
        answer: "Advanced persistent threat (APT)",
        hint: "Sophisticated, long-term attacks",
        blank: "Advanced persistent threat (APT)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of threat originates from individuals within an organization?",
        answer: "Insider threats",
        hint: "Threats from individuals within organization",
        blank: "Insider threats",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of actors are associated with governments or governmental agencies?",
        answer: "State actors",
        hint: "Actors associated with governments",
        blank: "State actors",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes individuals who use hacking skills for political or social reasons?",
        answer: "Hacktivists",
        hint: "Using hacking skills for political/social reasons",
        blank: "Hacktivists",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term refers to inexperienced hackers who use pre-written scripts or tools?",
        answer: "Script kiddies",
        hint: "Inexperienced hackers using pre-written scripts",
        blank: "Script kiddies",
        review: "<>"
    },
    {
      category: "CompTIA Security+",
      question: "What groups engage in cybercrime for financial gain?",
      answer: "Criminal syndicates",
      hint: "Groups engaging in cybercrime for financial gain",
      blank: "xxxxxxxxx xxxxxxxxxx",
      review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes individuals with advanced knowledge of computers and networks?",
        answer: "Hackers",
        hint: "Individuals with advanced knowledge of computers/networks",
        blank: "xxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes individuals or entities with permission to access systems or data?",
        answer: "Authorized",
        hint: "Entities with permission to access systems/data",
        blank: "xxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes individuals or entities without permission to access systems or data?",
        answer: "Unauthorized",
        hint: "Entities without permission to access systems/data",
        blank: "xxxxxxxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes individuals or entities with partial permission to access systems or data?",
        answer: "Semi-authorized",
        hint: "Entities with partial permission to access systems/data",
        blank: "xxxxxxx-xxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes IT solutions and systems used within an organization without explicit approval?",
        answer: "Shadow IT",
        hint: "IT solutions/systems used without explicit approval",
        blank: "xxxxxx xx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes other companies or entities that are competing in the same market?",
        answer: "Competitors",
        hint: "Other companies/entities in the same market",
        blank: "xxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attribute of actors refers to their origin, whether from within or outside the organization?",
        answer: "Internal/external",
        hint: "Origin of actors, within or outside organization",
        blank: "xxxxxxxxxx/xxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attribute of actors refers to their skill level and resources?",
        answer: "Level of sophistication/capability",
        hint: "Skill level and resources of actors",
        blank: "xxxxxx xx xxxxxxxxxxxxxx/xxxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attribute of actors refers to the financial backing or support they have?",
        answer: "Resources/funding",
        hint: "Financial backing/support of actors",
        blank: "xxxxxxxxx/xxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What attribute of actors refers to their goals or reasons for engaging in cyber attacks?",
        answer: "Intent/motivation",
        hint: "Goals/reasons for cyber attacks",
        blank: "xxxxx/xxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vectors of attack involve direct physical access to systems or networks?",
        answer: "Direct access",
        hint: "Physical access to systems/networks",
        blank: "xxxxxxx xxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vectors of attack involve exploiting weaknesses in wireless technologies?",
        answer: "Wireless",
        hint: "Exploiting wireless technology weaknesses",
        blank: "xxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vectors of attack involve sending malicious emails or attachments?",
        answer: "Email",
        hint: "Sending malicious emails/attachments",
        blank: "xxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vectors of attack involve compromising components in a supply chain?",
        answer: "Supply chain",
        hint: "Compromising supply chain components",
        blank: "xxxxxxx xxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vectors of attack involve exploiting vulnerabilities in social networking platforms?",
        answer: "Social media",
        hint: "Exploiting social networking platform vulnerabilities",
        blank: "xxxxxx xxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What vectors of attack involve using USB drives or other removable media to spread malware?",
        answer: "Removable media",
        hint: "Using USB drives/removable media for malware",
        blank: "xxxxxxxxx xxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What term describes vulnerabilities that are exploited before they are known to the software developer?",
        answer: "Zero-day",
        hint: "Exploited before known to developer",
        blank: "xxxx-xxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of vulnerabilities result from insecure settings or configurations?",
        answer: "Weak configurations",
        hint: "Result from insecure settings/configurations",
        blank: "xxxx xxxxxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What weak configuration involves overly permissive access levels?",
        answer: "Open permissions",
        hint: "Overly permissive access levels",
        blank: "xxxx xxxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What weak configuration involves unprotected administrative accounts?",
        answer: "Unsecure root accounts",
        hint: "Unprotected administrative accounts",
        blank: "xxxxxxxxx xxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What errors in configuration can lead to vulnerabilities?",
        answer: "Errors",
        hint: "Configuration errors",
        blank: "xxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What weak configuration involves inadequate encryption methods?",
        answer: "Weak encryption",
        hint: "Inadequate encryption methods",
        blank: "xxxx xxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What weak configuration involves using unsecured communication standards?",
        answer: "Unsecure protocols",
        hint: "Using unsecured communication standards",
        blank: "xxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What weak configuration involves leaving default settings unchanged?",
        answer: "Default settings",
        hint: "Leaving default settings unchanged",
        blank: "xxxxxxx xxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What weak configuration involves leaving unnecessary network access points open?",
        answer: "Open ports",
        hint: "sticky mac or disable the port",
        blank: "xxxx xxxxs",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What risks are associated with third-party vendors?",
        answer: "Third-party risks",
        hint: "Risks associated with third-party vendors",
        blank: "xxxxx-xxxxx xxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What aspect of third-party risks involves overseeing and managing vendors?",
        answer: "Vendor management",
        hint: "Overseeing/managing vendors",
        blank: "xxxxxx xxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What aspect of third-party risks involves ensuring different systems can work together securely?",
        answer: "System integration",
        hint: "Ensuring systems work together securely",
        blank: "xxxxxx xxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What aspect of third-party risks involves lack of support from vendors in addressing security issues?",
        answer: "Lack of vendor support",
        hint: "Lack of support from vendors",
        blank: "xxxx xx xxxxx xxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of third-party risk involves vulnerabilities introduced through suppliers?",
        answer: "Supply chain",
        hint: "Vulnerabilities introduced through suppliers",
        blank: "xxxxx xxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What third-party risk involves relying on external parties for software development?",
        answer: "Outsourced code development",
        hint: "Relying on external parties for software development",
        blank: "xxxxxxxxx xxxxxxxxxxx xxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What aspect of third-party risks involves ensuring secure storage of data by third-party providers?",
        answer: "Data storage",
        hint: "Ensuring secure storage of data by third-party providers",
        blank: "xxx xxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What leads to vulnerabilities due to outdated or unpatched software?",
        answer: "Improper or weak patch management",
        hint: "Vulnerabilities due to outdated or unpatched software",
        blank: "xxxxxxxx xx xxxx xxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What part of a system might require firmware updates for security?",
        answer: "Firmware",
        hint: "Requires firmware updates for security",
        blank: "xxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What part of a system might require regular updates to ensure security?",
        answer: "Operating system (OS)",
        hint: "Requires regular updates for security",
        blank: "xxxxxxxxx xxx (xx)",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What part of a system might require updates to address security vulnerabilities in applications?",
        answer: "Applications",
        hint: "Requires updates to address security vulnerabilities",
        blank: "xxxxxxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What type of platforms might be vulnerable due to outdated or unsupported security features?",
        answer: "Legacy platforms",
        hint: "Vulnerable due to outdated/unsupported security features",
        blank: "xxxxxx xxxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What are potential consequences of security breaches?",
        answer: "Impacts",
        hint: "Potential consequences of security breaches",
        blank: "xxxxxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What can occur when sensitive information is accessed by unauthorized parties?",
        answer: "Data loss",
        hint: "Occurs when sensitive information accessed by unauthorized parties",
        blank: "xxxx xxx",
        review: "<>"
    },
    {
        category: "CompTIA Security+",
        question: "What occurs when sensitive information is exposed to unauthorized parties?",
        answer: "Data breaches",
        hint: "Occurs when sensitive information exposed to unauthorized parties",
        blank: "xxxxxx",
        review: "<>"
    },
];

module.exports = {
    category: 'SEC',
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * secquestions.length);
      return secquestions[randomIndex];
    }
  };