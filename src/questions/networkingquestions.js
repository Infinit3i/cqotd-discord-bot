let networkingquestions = [
  {
    category: "Computer Networking",
    question: "What is the purpose of a router in a network?",
    answer: "Route traffic between networks",
    hint: "Connects multiple networks.",
    blank: "xxxxx xxxxx xxxxxxx xxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-a-router.html",
  },
  {
    category: "Computer Networking",
    question: "What does DNS stand for?",
    answer: "Domain Name System",
    hint: "Resolves domain names to IP addresses.",
    blank: "xxxxxx xxxx xxxxxx",
    review: "https://www.cloudflare.com/learning/dns/what-is-dns/",
  },
  {
    category: "Computer Networking",
    question: "What is the purpose of a subnet mask?",
    answer: "Divide networks",
    hint: "Separates network and host portions.",
    blank: "xxxxxx xxxxxxxx",
    review: "https://www.techtarget.com/whatis/definition/subnet-mask",
  },
  {
    category: "Computer Networking",
    question: "What protocol does HTTP rely on for transport?",
    answer: "TCP",
    hint: "Reliable transmission.",
    blank: "xxx",
    review: "https://www.cloudflare.com/learning/ddos/glossary/http-tcp/",
  },
  {
    category: "Computer Networking",
    question: "What layer of the OSI model handles IP addressing?",
    answer: "Network layer",
    hint: "Responsible for routing.",
    blank: "xxxxxx xxxxx",
    review: "https://www.techtarget.com/whatis/definition/OSI-model",
  },
  {
    category: "Computer Networking",
    question: "What port does HTTPS use by default?",
    answer: "443",
    hint: "Secure web communication.",
    blank: "xxx",
    review: "https://www.cloudflare.com/learning/ssl/what-is-https/",
  },
  {
    category: "Computer Networking",
    question: "What does ARP stand for?",
    answer: "Address Resolution Protocol",
    hint: "Maps IP to MAC addresses.",
    blank: "xxxxxx xxxxxxxxxx xxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-arp.html",
  },
  {
    category: "Computer Networking",
    question: "What is the primary purpose of a switch?",
    answer: "Connect devices in a LAN",
    hint: "Operates at Layer 2.",
    blank: "xxxxxx xxxxxxx xx x xxx",
    review:
      "https://www.cisco.com/c/en/us/products/switches/what-is-a-switch.html",
  },
  {
    category: "Computer Networking",
    question: "What is a MAC address?",
    answer: "Physical address",
    hint: "Uniquely identifies network devices.",
    blank: "xxxxxxx xxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/17404-ethernet-mac-address-usage.html",
  },
  {
    category: "Computer Networking",
    question: "What topology connects all devices to a central hub?",
    answer: "Star topology",
    hint: "Centralized design.",
    blank: "xxxx xxxxxxxx",
    review: "https://www.techtarget.com/whatis/definition/star-topology",
  },
  {
    category: "Computer Networking",
    question: "What is NAT used for?",
    answer: "Translate IP addresses",
    hint: "Converts private to public IPs.",
    blank: "xxxxxxxx xx xxxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-nat.html",
  },
  {
    category: "Computer Networking",
    question: "What does DHCP stand for?",
    answer: "Dynamic Host Configuration Protocol",
    hint: "Assigns IP addresses automatically.",
    blank: "xxxxxxx xxxx xxxxxxxxxxxxxx xxxxxxxx",
    review: "https://www.techtarget.com/whatis/definition/DHCP",
  },
  {
    category: "Computer Networking",
    question: "What protocol is used for secure remote access?",
    answer: "SSH",
    hint: "Replaces Telnet.",
    blank: "xxx",
    review: "https://www.ssh.com/academy/ssh",
  },
  {
    category: "Computer Networking",
    question: "What is the purpose of a VLAN?",
    answer: "Segment networks logically",
    hint: "Virtual network division.",
    blank: "xxxxxxx xxxxxxxx xxxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-vlan.html",
  },
  {
    category: "Computer Networking",
    question: "What protocol resolves domain names?",
    answer: "DNS",
    hint: "Name to IP resolution.",
    blank: "xxx",
    review: "https://www.cloudflare.com/learning/dns/what-is-dns/",
  },
  {
    category: "Computer Networking",
    question: "What does MTU stand for?",
    answer: "Maximum Transmission Unit",
    hint: "Defines packet size.",
    blank: "xxxxxxx xxxxxxxxxxx xxxx",
    review:
      "https://www.techtarget.com/whatis/definition/Maximum-Transmission-Unit-MTU",
  },
  {
    category: "Computer Networking",
    question: "What is the function of a firewall?",
    answer: "Control traffic",
    hint: "Allows or blocks traffic.",
    blank: "xxxxxx xxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html",
  },
  {
    category: "Computer Networking",
    question: "What is the primary use of ICMP?",
    answer: "Error reporting",
    hint: "Ping uses this protocol.",
    blank: "xxxxx xxxxxxxxx",
    review: "https://www.techtarget.com/whatis/definition/ICMP",
  },
  {
    category: "Computer Networking",
    question: "What type of attack involves flooding a network with traffic?",
    answer: "DDoS",
    hint: "Distributed attack.",
    blank: "xxxx",
    review: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/",
  },
  {
    category: "Computer Networking",
    question: "What is the function of a proxy server?",
    answer: "Intermediate device",
    hint: "Acts on behalf of clients.",
    blank: "xxxxxxxxxxx xxxxxxx",
    review:
      "https://www.techtarget.com/searchnetworking/definition/proxy-server",
  },
  {
    category: "Computer Networking",
    question: "What is the default port for SMTP?",
    answer: "25",
    hint: "Used for email delivery.",
    blank: "xx",
    review: "https://www.lifewire.com/what-is-smtp-817950",
  },
  {
    category: "Computer Networking",
    question: "What is the loopback IP address?",
    answer: "127.0.0.1",
    hint: "Used for testing network stack.",
    blank: "xxx.x.x.x",
    review: "https://www.techtarget.com/whatis/definition/loopback-address",
  },
  {
    category: "Computer Networking",
    question: "What is the purpose of QoS in networking?",
    answer: "Prioritize traffic",
    hint: "Ensures important data gets priority.",
    blank: "xxxxxxxx xxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/enterprise-networks/qos.html",
  },
  {
    category: "Computer Networking",
    question: "What is a gateway in networking?",
    answer: "Access point",
    hint: "Connects different networks.",
    blank: "xxxxxx xxxxx",
    review: "https://www.techtarget.com/whatis/definition/gateway",
  },
  {
    category: "Computer Networking",
    question: "What layer of the OSI model is responsible for encryption?",
    answer: "Presentation layer",
    hint: "Layer 6.",
    blank: "xxxxxxxxxxxxxx xxxxx",
    review:
      "https://www.techtarget.com/searchnetworking/definition/OSI-model",
  },
  {
    category: "Computer Networking",
    question: "What is the purpose of TCP/IP?",
    answer: "Enable internet communication",
    hint: "Foundation of the internet.",
    blank: "xxxxx xxxxxxxx xxxxxxxxxxxxxx",
    review: "https://www.techtarget.com/whatis/definition/TCP-IP",
  },
  {
    category: "Computer Networking",
    question: "What does BGP stand for?",
    answer: "Border Gateway Protocol",
    hint: "Used for routing between ISPs.",
    blank: "xxxxxx xxxxxxx xxxxxxxx",
    review:
      "https://www.cisco.com/c/en/us/solutions/service-provider/bgp.html",
  },
  {
    category: "Computer Networking",
    question: "What is an IPsec VPN used for?",
    answer: "Secure communication",
    hint: "Encrypts data between sites.",
    blank: "xxxxxx xxxxxxxxxxxxxx",
    review: "https://www.techtarget.com/searchsecurity/definition/IPsec",
  },
  {
    category: "Computer Networking",
    question: "What is a broadcast domain?",
    answer: "Network segment",
    hint: "Devices share broadcast traffic.",
    blank: "xxxxxx xxxxxxx",
    review: "https://www.techtarget.com/whatis/definition/broadcast-domain",
  },
  {
    category: "Computer Networking",
    question: "What is a collision domain?",
    answer: "Shared transmission medium",
    hint: "Devices compete for access.",
    blank: "xxxxxx xxxxxxxxxxx xxxxxx",
    review: "https://www.techtarget.com/whatis/definition/collision-domain",
  },
];

module.exports = {
  category: "Computer Networking",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * networkingquestions.length);
    return networkingquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return networkingquestions;
  },
};
