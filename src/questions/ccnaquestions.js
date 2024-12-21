let ccnaquestions = [
  {
    category: "CCNA",
    question:
      "What model of operation does Hot Standby Router Protocol (HSRP) use?",
    answer: "Active/passive",
    hint: "one router is on standby while the other is working",
    blank: "xxxxxx/xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/9234-hsrpguidetoc.html>",
  },
  {
    category: "CCNA",
    question: "What layer # is port security and dynamic ARP inspection?",
    answer: "2",
    hint: "NOT 3",
    blank: "x",
    review:
      "<https://info.pivitglobal.com/resources/port-security-layer-2-protection>",
  },
  {
    category: "CCNA",
    question:
      "Which type of message is sent by DHCP client to ask to lease a specific IP address from a DHCP server?",
    answer: "Request",
    hint: "DORA",
    blank: "xxxxxxx",
    review: "<https://notes.networklessons.com/dhcp-message-types>",
  },
  {
    category: "CCNA",
    question:
      "What protocol is used to discover directly connected Cisco devices?",
    answer: "CDP",
    hint: "Cisco proprietary protocol.",
    blank: "xxx",
    review:
      "<https://www.cisco.com/c/en/us/tech/ip/cisco-discovery-protocol/index.html>",
  },
  {
    category: "CCNA",
    question: "What does VLAN stand for?",
    answer: "Virtual Local Area Network",
    hint: "Used for segmenting networks.",
    blank: "xxxxxx xxxxx xxxx xxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-vlan.html>",
  },
  {
    category: "CCNA",
    question: "What layer handles IP addressing?",
    answer: "Network layer",
    hint: "Layer 3 in the OSI model.",
    blank: "xxxxxx xxxxx",
    review: "<https://en.wikipedia.org/wiki/OSI_model>",
  },
  {
    category: "CCNA",
    question: "What protocol resolves IP addresses to MAC addresses?",
    answer: "ARP",
    hint: "Used for address resolution.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/Address_Resolution_Protocol>",
  },
  {
    category: "CCNA",
    question: "What command shows the routing table on a Cisco router?",
    answer: "show ip route",
    hint: "Check network paths.",
    blank: "xxxx xx xxxxx",
    review:
      "<https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_basic/configuration/xe-16/irg-basic-ip-routing.html>",
  },
  {
    category: "CCNA",
    question: "What protocol assigns IP addresses dynamically?",
    answer: "DHCP",
    hint: "DORA process.",
    blank: "xxxx",
    review:
      "<https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol>",
  },
  {
    category: "CCNA",
    question: "What technology is used for redundancy in switched networks?",
    answer: "Spanning Tree Protocol",
    hint: "Prevents loops.",
    blank: "xxxxxxxx xxxx xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/tech/lan-switching/spanning-tree-protocol/index.html>",
  },
  {
    category: "CCNA",
    question: "What protocol provides secure remote access to routers?",
    answer: "SSH",
    hint: "Secure shell.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/Secure_Shell>",
  },
  {
    category: "CCNA",
    question: "What is the default administrative distance for OSPF?",
    answer: "110",
    hint: "Lower is better.",
    blank: "xxx",
    review:
      "<https://www.cisco.com/c/en/us/tech/ip/open-shortest-path-first-ospf/index.html>",
  },
  {
    category: "CCNA",
    question: "What type of NAT maps multiple private IPs to one public IP?",
    answer: "PAT",
    hint: "Port Address Translation.",
    blank: "xxx",
    review:
      "<https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/xe-16/nat-xe-16-book/iadnat-pt.html>",
  },
  {
    category: "CCNA",
    question: "What protocol resolves hostnames to IP addresses?",
    answer: "DNS",
    hint: "Domain Name System.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/Domain_Name_System>",
  },
  {
    category: "CCNA",
    question: "What command saves the current running configuration?",
    answer: "copy running-config startup-config",
    hint: "Preserves configuration after a reboot.",
    blank: "xxxx xxxxxxxxxxxxx xxxxxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-software-releases-112/41232-config-save.html>",
  },
  {
    category: "CCNA",
    question: "What encapsulation protocol is used in Frame Relay?",
    answer: "HDLC",
    hint: "Default WAN encapsulation.",
    blank: "xxxx",
    review: "<https://en.wikipedia.org/wiki/High-Level_Data_Link_Control>",
  },
  {
    category: "CCNA",
    question: "What is the maximum hop count for RIP?",
    answer: "15",
    hint: "Considered unreachable beyond this.",
    blank: "xx",
    review: "<https://en.wikipedia.org/wiki/Routing_Information_Protocol>",
  },
  {
    category: "CCNA",
    question: "What command checks connectivity to a remote host?",
    answer: "ping",
    hint: "ICMP utility.",
    blank: "xxxx",
    review: "<https://en.wikipedia.org/wiki/Ping_(networking_utility)>",
  },
  {
    category: "CCNA",
    question: "What type of ACL uses both source and destination IP addresses?",
    answer: "Extended ACL",
    hint: "More granular than standard ACLs.",
    blank: "xxxxxxxx xxxx",
    review:
      "<https://www.cisco.com/c/en/us/support/docs/security/ios-access-lists/5212-18.html>",
  },
  {
    category: "CCNA",
    question: "What is the default subnet mask for a Class C network?",
    answer: "255.255.255.0",
    hint: "Supports up to 254 hosts.",
    blank: "xxx.xxx.xxx.xxxx",
    review: "<https://en.wikipedia.org/wiki/Classful_network>",
  },
  {
    category: "CCNA",
    question:
      "What routing protocol is distance-vector based and uses hop count as a metric?",
    answer: "RIP",
    hint: "Routing Information Protocol.",
    blank: "xxx",
    review: "<https://en.wikipedia.org/wiki/Routing_Information_Protocol>",
  },
  {
    category: "CCNA",
    question: "What Cisco IOS command configures a static route?",
    answer: "ip route",
    hint: "Manual routing.",
    blank: "xx xxxxx",
    review:
      "<https://www.cisco.com/c/en/us/support/docs/ip/static-routing/118006-config-static-routes.html>",
  },
  {
    category: "CCNA",
    question: "What term describes separating a network into smaller segments?",
    answer: "Subnetting",
    hint: "Divide and organize IP space.",
    blank: "xxxxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/support/docs/ip/subnetting/13854.html>",
  },
];

module.exports = {
  category: "CCNA",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * ccnaquestions.length);
    return ccnaquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return ccnaquestions;
  },
};
