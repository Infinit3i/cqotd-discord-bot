let networkPlusQuestions = [
  {
    category: "CompTIA Network+",
    question: "What device is used to connect multiple networks together?",
    answer: "Router",
    hint: "Forwards packets",
    blank: "xxxxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-a-router.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol translates domain names to IP addresses?",
    answer: "DNS",
    hint: "Name resolution",
    blank: "xxx",
    review: "<https://www.cloudflare.com/learning/dns/what-is-dns/>"
  },
  {
    category: "CompTIA Network+",
    question: "What topology connects devices in a star-like pattern?",
    answer: "Star",
    hint: "Central connection",
    blank: "xxxx",
    review: "<https://www.techtarget.com/searchnetworking/definition/star-topology>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol provides error reporting for IP?",
    answer: "ICMP",
    hint: "Ping uses it",
    blank: "xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/>"
  },
  {
    category: "CompTIA Network+",
    question: "What layer of the OSI model handles end-to-end communication?",
    answer: "Transport",
    hint: "Segments data",
    blank: "xxxxxxxx",
    review: "<https://www.comptia.org/blog/osi-model-layers-explained>"
  },
  {
    category: "CompTIA Network+",
    question: "What cable type is commonly used for high-speed networking?",
    answer: "Fiber optic",
    hint: "Glass strands",
    blank: "xxxxx xxxxx",
    review: "<https://www.cisco.com/c/en/us/products/optical-networking/what-is-fiber-optic.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What device connects multiple devices in a single LAN?",
    answer: "Switch",
    hint: "Layer 2",
    blank: "xxxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/what-is-a-network-switch.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What term refers to the delay in a network?",
    answer: "Latency",
    hint: "Time delay",
    blank: "xxxxxxx",
    review: "<https://www.cloudflare.com/learning/performance/what-is-latency/>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol is used for secure file transfers?",
    answer: "SFTP",
    hint: "Secure FTP",
    blank: "xxxx",
    review: "<https://www.ssh.com/academy/ssh/sftp>"
  },
  {
    category: "CompTIA Network+",
    question: "What is the default port for HTTP traffic?",
    answer: "80",
    hint: "Web port",
    blank: "xx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-port-80/>"
  },
  {
    category: "CompTIA Network+",
    question: "What is the unique identifier assigned to network interfaces?",
    answer: "MAC address",
    hint: "Physical ID",
    blank: "xxx xxxxxxx",
    review: "<https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/17404-ethernet-mac-address-usage.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol is used to assign IP addresses automatically?",
    answer: "DHCP",
    hint: "Dynamic IP",
    blank: "xxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/dhcp.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What is the maximum speed of a Cat 5e cable?",
    answer: "1 Gbps",
    hint: "Gigabit speed",
    blank: "x xxxx",
    review: "<https://www.cablematters.com/Blog/Network/what-is-cat5e-ethernet-cable>"
  },
  {
    category: "CompTIA Network+",
    question: "What layer of the OSI model handles encryption and compression?",
    answer: "Presentation",
    hint: "Layer 6",
    blank: "xxxxxxxxxxxx",
    review: "<https://www.comptia.org/blog/osi-model-layers-explained>"
  },
  {
    category: "CompTIA Network+",
    question: "What command checks the reachability of a network host?",
    answer: "Ping",
    hint: "ICMP echo",
    blank: "xxxx",
    review: "<https://www.comptia.org/blog/what-is-ping-in-networking>"
  },
  {
    category: "CompTIA Network+",
    question: "What is the most secure wireless encryption standard?",
    answer: "WPA3",
    hint: "Latest wireless security",
    blank: "xxxxx",
    review: "<https://www.comptia.org/blog/understanding-wireless-encryption-standards>"
  },
  {
    category: "CompTIA Network+",
    question: "What device improves signal strength in a network?",
    answer: "Repeater",
    hint: "Boosts signal",
    blank: "xxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/what-is-a-network-repeater.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol is used for email retrieval?",
    answer: "IMAP",
    hint: "Retrieves mail",
    blank: "xxxx",
    review: "<https://www.imap.org/>"
  },
  {
    category: "CompTIA Network+",
    question: "What term describes the use of multiple paths for redundancy?",
    answer: "Load balancing",
    hint: "Traffic distribution",
    blank: "xxxx xxxxxxxxx",
    review: "<https://www.citrix.com/solutions/load-balancing.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What topology connects devices in a closed-loop fashion?",
    answer: "Ring",
    hint: "Loop connection",
    blank: "xxxx",
    review: "<https://www.techtarget.com/searchnetworking/definition/ring-topology>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol secures communication over the web?",
    answer: "HTTPS",
    hint: "Secure web traffic",
    blank: "xxxxx",
    review: "<https://www.cloudflare.com/learning/ssl/what-is-https/>"
  },
  {
    category: "CompTIA Network+",
    question: "What cable type is commonly used for telephone lines?",
    answer: "Twisted pair",
    hint: "Twisted wires",
    blank: "xxxxxxx xxxx",
    review: "<https://www.cablematters.com/blog/Network/what-is-twisted-pair-cable>"
  },
  {
    category: "CompTIA Network+",
    question: "What tool is used to test and measure cable signals?",
    answer: "Cable tester",
    hint: "Signal measurement",
    blank: "xxxxx xxxxxx",
    review: "<https://www.flukenetworks.com/datacom-cabling/what-cable-tester>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol is used to manage network devices?",
    answer: "SNMP",
    hint: "Device management",
    blank: "xxxx",
    review: "<https://www.cisco.com/c/en/us/products/ios-nx-os-software/snmp.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What device prevents data collisions in a network?",
    answer: "Switch",
    hint: "Layer 2 device",
    blank: "xxxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/what-is-a-network-switch.html>"
  },
  {
    category: "CompTIA Network+",
    question: "What is the default subnet mask for a Class C network?",
    answer: "255.255.255.0",
    hint: "Class C",
    blank: "xxx.xxx.xxx.x",
    review: "<https://www.techtarget.com/searchnetworking/definition/subnet-mask>"
  },
  {
    category: "CompTIA Network+",
    question: "What layer of the OSI model establishes, manages, and terminates connections?",
    answer: "Session",
    hint: "Layer 5",
    blank: "xxxxxx",
    review: "<https://www.comptia.org/blog/osi-model-layers-explained>"
  },
  {
    category: "CompTIA Network+",
    question: "What is the maximum speed of a Cat 6 cable?",
    answer: "10 Gbps",
    hint: "High-speed",
    blank: "xx xxxxx",
    review: "<https://www.cablematters.com/blog/Network/what-is-cat6-ethernet-cable>"
  },
  {
    category: "CompTIA Network+",
    question: "What command displays active network connections?",
    answer: "Netstat",
    hint: "Network statistics",
    blank: "xxxxxxx",
    review: "<https://www.comptia.org/blog/what-is-netstat>"
  },
  {
    category: "CompTIA Network+",
    question: "What protocol resolves IP addresses to MAC addresses?",
    answer: "ARP",
    hint: "IP to MAC",
    blank: "xxx",
    review: "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-arp.html>"
  }
];
  
module.exports = {
  category: "CompTIA Network+",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * networkPlusQuestions.length);
    return networkPlusQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return networkPlusQuestions;
  }
};  