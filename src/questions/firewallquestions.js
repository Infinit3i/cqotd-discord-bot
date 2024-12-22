let firewallQuestions = [
  {
    category: "Firewall",
    question: "What is the primary purpose of a firewall?",
    answer: "Access control",
    hint: "Controls access",
    blank: "xxxxxx xxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html>",
  },
  {
    category: "Firewall",
    question: "Which firewall type filters traffic based on predefined rules?",
    answer: "Packet filter",
    hint: "Predefined rules",
    blank: "xxxxxx xxxxxx",
    review:
      "<https://www.cloudflare.com/learning/firewall/packet-filtering-firewall/>",
  },
  {
    category: "Firewall",
    question:
      "What firewall type inspects the full session of network traffic?",
    answer: "Stateful",
    hint: "Tracks session state",
    blank: "xxxxxxxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/stateful-firewalls.html>",
  },
  {
    category: "Firewall",
    question:
      "Which firewall is implemented through software on a host device?",
    answer: "Host firewall",
    hint: "Runs on devices",
    blank: "xxxx xxxxxxx",
    review: "<https://www.avast.com/c-host-based-firewall>",
  },
  {
    category: "Firewall",
    question:
      "What type of firewall is placed between the internal and external network?",
    answer: "Perimeter",
    hint: "Outer boundary",
    blank: "xxxxxxxxx",
    review:
      "<https://www.fortinet.com/resources/cyberglossary/perimeter-firewall>",
  },
  {
    category: "Firewall",
    question: "Which firewall uses signatures to identify threats?",
    answer: "IDS/IPS",
    hint: "Signature-based",
    blank: "xxx/xxx",
    review:
      "<https://www.cloudflare.com/learning/security/threat-detection/intrusion-detection-and-prevention/>",
  },
  {
    category: "Firewall",
    question:
      "What firewall layer filters traffic based on application protocols?",
    answer: "Layer 7",
    hint: "Application layer",
    blank: "xxxxx x",
    review:
      "<https://www.cloudflare.com/learning/ddos/glossary/application-layer-7/>",
  },
  {
    category: "Firewall",
    question: "Which firewall feature translates private IPs to public IPs?",
    answer: "NAT",
    hint: "Private to public",
    blank: "xxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/small-business/resource-center/nat.html>",
  },
  {
    category: "Firewall",
    question: "What does UTM stand for in firewall technology?",
    answer: "Unified Threat Management",
    hint: "All-in-one security",
    blank: "xxxxxxx xxxxxx xxxxxxxxx",
    review:
      "<https://www.trendmicro.com/vinfo/us/security/definition/unified-threat-management>",
  },
  {
    category: "Firewall",
    question: "What is the default rule for traffic not explicitly allowed?",
    answer: "Deny all",
    hint: "Implicitly blocks",
    blank: "xxxx xxxx",
    review:
      "<https://www.fortinet.com/resources/cyberglossary/firewall-default-deny-rule>",
  },
  {
    category: "Firewall",
    question:
      "What type of firewall uses machine learning for threat detection?",
    answer: "AI firewall",
    hint: "Uses AI",
    blank: "xx xxxxxxx",
    review: "<https://www.paloaltonetworks.com/cyberpedia/ai-firewall>",
  },
  {
    category: "Firewall",
    question:
      "What type of firewall combines stateful and application inspection?",
    answer: "Next-gen",
    hint: "Modern firewall",
    blank: "xxxx-xxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-next-generation-firewall.html>",
  },
  {
    category: "Firewall",
    question:
      "Which firewall configuration blocks all incoming connections by default?",
    answer: "Whitelist",
    hint: "Block by default",
    blank: "xxxxxxxxx",
    review: "<https://www.kaspersky.com/resource-center/definitions/whitelist>",
  },
  {
    category: "Firewall",
    question: "Which firewall feature prioritizes traffic based on rules?",
    answer: "QoS",
    hint: "Traffic priority",
    blank: "xxx",
    review:
      "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-qos.html>",
  },
  {
    category: "Firewall",
    question: "What is a term for bypassing a firewall?",
    answer: "Tunneling",
    hint: "Bypass rules",
    blank: "xxxxxxxxx",
    review:
      "<https://www.cloudflare.com/learning/security/glossary/tunneling/>",
  },
  {
    category: "Firewall",
    question: "What port does HTTPS typically use?",
    answer: "443",
    hint: "Secure web port",
    blank: "xxx",
    review:
      "<https://www.cloudflare.com/learning/security/glossary/what-is-port-443/>",
  },
  {
    category: "Firewall",
    question: "Which protocol is commonly blocked to prevent file sharing?",
    answer: "SMB",
    hint: "File sharing",
    blank: "xxx",
    review:
      "<https://www.cisco.com/c/en/us/products/security/smb-protocol.html>",
  },
  {
    category: "Firewall",
    question: "What is the purpose of a DMZ in a firewall setup?",
    answer: "Isolate services",
    hint: "Separate area",
    blank: "xxxxxxx xxxxxxx",
    review: "<https://www.fortinet.com/resources/cyberglossary/what-is-a-dmz>",
  },
  {
    category: "Firewall",
    question: "What type of rule allows only specific traffic?",
    answer: "Allowlist",
    hint: "Only allowed",
    blank: "xxxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/allowlist.html>",
  },
];

module.exports = {
  category: "Firewall",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * firewallQuestions.length);
    return firewallQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return firewallQuestions;
  },
};
