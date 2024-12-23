let generalquestions = [
  {
    category: "General",
    question: "What is the OSI model?",
    answer: "Open Systems Interconnection",
    hint: "https://aws.amazon.com/what-is/osi-model/",
    blank: "xxxx xxxxxxx xxxxxxxxxxxxxxx",
    review: "https://youtu.be/Ilk7UXzV_Qc?si=eFvm1JMCByP6iwJ1",
  },
  {
    category: "General",
    question: "What do vlans do?",
    answer: "logically segment",
    hint: "physical vs logical does what?",
    blank: "xxxxxxxxx xxxxxxx",
    review:
      "https://www.techtarget.com/searchnetworking/definition/virtual-LAN",
  },
  {
    category: "General",
    question: "What is Phishing?",
    answer: "Email scam",
    hint: "What is it sent over?",
    blank: "xxxxx xxxx",
    review:
      "https://www.cisco.com/c/en/us/products/security/email-security/what-is-phishing.html",
  },
  {
    category: "General",
    question: "What is a DOS attack",
    answer: "Denial of service",
    hint: "What does it stop?",
    blank: "xxxxxx xx xxxxxxx",
    review:
      "https://www.cloudflare.com/learning/ddos/glossary/denial-of-service/",
  },
  {
    category: "General",
    question: "What is a botnet?",
    answer: "Many compromised devices",
    hint: "Controlled by attackers",
    blank: "xxxx xxxxxxxxxxxxxx xxxxxxx",
    review: "https://www.paloaltonetworks.com/cyberpedia/what-is-botnet",
  },
  {
    category: "General",
    question: "how many USABLE hosts can fit on a /26 subnet?",
    answer: "62",
    hint: "amount subtract 1 for network address and one for broadcast address",
    blank: "xx",
    review: "https://aws.amazon.com/what-is/cidr/",
  },
  {
    category: "General",
    question:
      "What is the difference between layer 2 switch and a layer 3 switch?",
    answer: "routing",
    hint: "Layer 3 act similiar to a router.",
    blank: "xxxxxxx",
    review: "https://planetechusa.com/layer-2-vs-layer-3-switches/",
  },
  {
    category: "General",
    question: "What port is RDP?",
    answer: "3389",
    hint: "remote desktop protocol.",
    blank: "xxxx",
    review: "https://www.cbtnuggets.com/common-ports/what-is-port-3389",
  },
  {
    category: "General",
    question: "What port is LDAP?",
    answer: "389",
    hint: "Lightweight Directory Access Protocol.",
    blank: "xxx",
    review:
      "https://www.cbtnuggets.com/blog/technology/networking/ldap-port-389-vs-636",
  },
  {
    category: "General",
    question: "What port is LDAPS?",
    answer: "636",
    hint: "Encrypted Lightweight Directory Access Protocol.",
    blank: "xxx",
    review:
      "https://www.cbtnuggets.com/blog/technology/networking/ldap-port-389-vs-636",
  },
  {
    category: "General",
    question: "What is the C in the CIA triad?",
    answer: "confidentiality",
    hint: "c is for data to be kept secret or private",
    blank: "xxxxxxxxxxxxxxx",
    review: "https://www.fortinet.com/resources/cyberglossary/cia-triad",
  },
  {
    category: "General",
    question:
      "Who owns the IPs 1.1.1.1, 1.0.0.1, 1.1.1.2, 1.0.0.2, 1.1.1.3, 1.0.0.3?",
    answer: "cloudflare",
    hint: "The best dns resolver!",
    blank: "xxxxxxxxxx",
    review: "https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/",
  },
  {
    category: "General",
    question: "What is the I in the CIA triad?",
    answer: "Integrity",
    hint: "I is trustworthy and free from tampering",
    blank: "xxxxxxxxx",
    review:
      "https://www.techtarget.com/whatis/definition/Confidentiality-integrity-and-availability-CIA",
  },
  {
    category: "General",
    question: "What is the A in the CIA triad?",
    answer: "availability",
    hint: "a is systems, networks, and applications must be functioning as they should and when they should",
    blank: "xxxxxxxxxxx",
    review:
      "https://informationsecurity.wustl.edu/items/confidentiality-integrity-and-availability-the-cia-triad/",
  },
  {
    category: "General",
    question: "What is Pharming??",
    answer: "redirects a victim",
    hint: "A form of attack that redirects traffic from one website to a fake site without the user knowing",
    blank: "xxxxxxxxx x xxxxxx",
    review: "",
  },
  {
    category: "General",
    question: "What port is HTTPS?",
    answer: "443",
    hint: "Secure web traffic.",
    blank: "xxx",
    review: "https://www.cloudflare.com/learning/ssl/what-is-https/",
  },
  {
    category: "General",
    question: "What port is HTTP?",
    answer: "80",
    hint: "Standard web traffic.",
    blank: "xx",
    review: "https://www.cloudflare.com/learning/network-layer/what-is-http/",
  },
  {
    category: "General",
    question: "What is the default SSH port?",
    answer: "22",
    hint: "Secure Shell.",
    blank: "xx",
    review: "https://www.ssh.com/academy/ssh/port",
  },
  {
    category: "General",
    question: "What protocol is used for email retrieval?",
    answer: "IMAP",
    hint: "Internet Message Access.",
    blank: "xxxx",
    review:
      "https://www.techtarget.com/whatis/definition/IMAP-Internet-Message-Access-Protocol",
  },
  {
    category: "General",
    question: "What is the purpose of ARP?",
    answer: "Resolution",
    hint: "Address resolution protocol.",
    blank: "xxxxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-arp.html",
  },
  {
    category: "General",
    question: "What is the subnet mask for a /24?",
    answer: "255.255.255.0",
    hint: "Standard class C subnet.",
    blank: "xxx.xxx.xxx.x",
    review: "https://www.iplocation.net/subnet-mask",
  },
  {
    category: "General",
    question: "What does DNS stand for?",
    answer: "Domain Name System",
    hint: "Resolves IPs to names.",
    blank: "xxxxxx xxxx xxxxxx",
    review: "https://www.cloudflare.com/learning/dns/what-is-dns/",
  },
  {
    category: "General",
    question: "What is NAT?",
    answer: "Translation",
    hint: "Network address translation.",
    blank: "xxxxxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-nat.html",
  },
  {
    category: "General",
    question: "What protocol uses port 53?",
    answer: "DNS",
    hint: "Resolves IPs.",
    blank: "xxx",
    review: "https://www.cloudflare.com/learning/dns/what-is-dns/",
  },
  {
    category: "General",
    question: "What does TCP stand for?",
    answer: "Transmission Control Protocol",
    hint: "Reliable transport layer.",
    blank: "xxxxxxxxxxx xxxxxx xxxxxxxx",
    review:
      "https://www.cloudflare.com/learning/ddos/glossary/transmission-control-protocol-tcp/",
  },
  {
    category: "General",
    question: "What port is FTP?",
    answer: "21",
    hint: "File transfer protocol.",
    blank: "xx",
    review: "https://www.lifewire.com/file-transfer-protocol-817944",
  },
  {
    category: "General",
    question: "What layer is IP in OSI?",
    answer: "3",
    hint: "Network layer.",
    blank: "x",
    review:
      "https://www.techtarget.com/searchnetworking/definition/OSI-model",
  },
  {
    category: "General",
    question: "What is UDP used for?",
    answer: "Streaming",
    hint: "Fast, unreliable protocol.",
    blank: "xxxxxxxxx",
    review:
      "https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/",
  },
  {
    category: "General",
    question: "What port is SNMP?",
    answer: "161",
    hint: "Simple Network Management Protocol.",
    blank: "xxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-snmp.html",
  },
  {
    category: "General",
    question: "What is the function of a router?",
    answer: "Routing",
    hint: "Connects networks.",
    blank: "xxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-a-router.html",
  },
  {
    category: "General",
    question: "What is an IP address?",
    answer: "Address",
    hint: "Identifies devices.",
    blank: "xxxxxxxx",
    review:
      "https://www.techtarget.com/searchnetworking/definition/IP-address",
  },
  {
    category: "General",
    question: "What layer is HTTP in OSI?",
    answer: "7",
    hint: "Application layer.",
    blank: "x",
    review:
      "https://www.techtarget.com/searchnetworking/definition/OSI-model",
  },
  {
    category: "General",
    question: "What is SSL used for?",
    answer: "Encryption",
    hint: "Secures data in transit.",
    blank: "xxxxxxxxxx",
    review: "https://www.cloudflare.com/learning/ssl/what-is-ssl/",
  },
  {
    category: "General",
    question: "What is a VPN?",
    answer: "Virtual Private Network",
    hint: "Secure tunnel.",
    blank: "xxxxxx xxxxxxx xxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-vpn.html",
  },
];

module.exports = {
  category: "General",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * generalquestions.length);
    return generalquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return generalquestions;
  },
};