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
  {
    category: "Firewall",
    question: "What is the function of an IDS in a firewall?",
    answer: "Intrusion detection",
    hint: "Detects intrusions.",
    blank: "xxxxxxxx xxxxxxxxxx",
    review: "<https://www.cloudflare.com/learning/security/intrusion-detection-system-ids/>",
  },
  {
    category: "Firewall",
    question: "Which firewall logs all incoming and outgoing traffic?",
    answer: "Logging",
    hint: "Tracks all activity.",
    blank: "xxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/firewalls.html>",
  },
  {
    category: "Firewall",
    question: "What type of firewall operates at the transport layer?",
    answer: "Stateful",
    hint: "Tracks connection state.",
    blank: "xxxxxxxx",
    review: "<https://www.cloudflare.com/learning/firewall/stateful-firewalls/>",
  },
  {
    category: "Firewall",
    question: "What is the role of NAT in firewall configurations?",
    answer: "Address translation",
    hint: "Hides private IPs.",
    blank: "xxxxxxx xxxxxxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-nat.html>",
  },
  {
    category: "Firewall",
    question: "Which protocol is commonly blocked by firewalls for security?",
    answer: "Telnet",
    hint: "Legacy protocol.",
    blank: "xxxxxx",
    review: "<https://www.cisco.com/c/en/us/support/docs/security/firewalls/11912-firewall-block-telnet.html>",
  },
  {
    category: "Firewall",
    question: "What is a firewall ACL?",
    answer: "Access control list",
    hint: "Defines rules.",
    blank: "xxxxxx xxxxxxx xxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/access-control-list.html>",
  },
  {
    category: "Firewall",
    question: "What does a proxy firewall do?",
    answer: "Mediates traffic",
    hint: "Acts as a middleman.",
    blank: "xxxxxxxx xxxxxxx",
    review: "<https://www.cloudflare.com/learning/firewall/proxy-firewall/>",
  },
  {
    category: "Firewall",
    question: "Which firewall type uses deep packet inspection?",
    answer: "Next-gen",
    hint: "Modern firewall.",
    blank: "xxxx-xxx",
    review: "<https://www.cisco.com/c/en/us/products/security/firewalls.html>",
  },
  {
    category: "Firewall",
    question: "What is the default policy in a deny-all firewall?",
    answer: "Implicit deny",
    hint: "Blocks all traffic.",
    blank: "xxxxxxxx xxxxx",
    review: "<https://www.fortinet.com/resources/cyberglossary/firewall-default-deny-rule>",
  },
  {
    category: "Firewall",
    question: "What is an outbound firewall rule?",
    answer: "Traffic filtering",
    hint: "Filters outgoing traffic.",
    blank: "xxxxxx xxxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/outbound-firewall-rules.html>",
  },
  {
    category: "Firewall",
    question: "What type of traffic does a DMZ typically handle?",
    answer: "Public services",
    hint: "Serves external requests.",
    blank: "xxxxxx xxxxxxxx",
    review: "<https://www.cloudflare.com/learning/security/glossary/dmz/>",
  },
  {
    category: "Firewall",
    question: "What protocol do firewalls block to prevent ping floods?",
    answer: "ICMP",
    hint: "Ping packets.",
    blank: "xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/what-is-icmp-flood/>",
  },
  {
    category: "Firewall",
    question: "What is a common firewall method for blocking brute-force attacks?",
    answer: "Rate limiting",
    hint: "Limits repeated attempts.",
    blank: "xxxx xxxxxxx",
    review: "<https://www.cloudflare.com/learning/security/threats/rate-limiting/>",
  },
  {
    category: "Firewall",
    question: "Which tool is used to manage firewall rules in Windows?",
    answer: "WF.msc",
    hint: "Windows Firewall snap-in.",
    blank: "xx.xxx",
    review: "<https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/windows-firewall-with-advanced-security>",
  },
  {
    category: "Firewall",
    question: "What is a port-based firewall rule?",
    answer: "Filters ports",
    hint: "Allows/block specific ports.",
    blank: "xxxxxx xxxxx",
    review: "<https://www.cloudflare.com/learning/security/glossary/port-filtering/>",
  },
  {
    category: "Firewall",
    question: "Which protocol uses port 22, often allowed in firewalls?",
    answer: "SSH",
    hint: "Secure shell.",
    blank: "xxx",
    review: "<https://www.cloudflare.com/learning/security/glossary/ssh/>",
  },
  {
    category: "Firewall",
    question: "What is a primary function of a WAF?",
    answer: "Protect web apps",
    hint: "Defends against web threats.",
    blank: "xxxxxx xxx xxxx",
    review: "<https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/>",
  },
  {
    category: "Firewall",
    question: "What does a firewall VPN do?",
    answer: "Encrypt traffic",
    hint: "Secures connections.",
    blank: "xxxxxxx xxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/vpn-endpoint.html>",
  },
  {
    category: "Firewall",
    question: "What is a blacklist in firewall terms?",
    answer: "Blocklist",
    hint: "Denies listed addresses.",
    blank: "xxxxxxxxx",
    review: "<https://www.cisco.com/c/en/us/products/security/firewall-blacklist.html>",
  },
  {
    category: "Firewall",
    question: "What is the opposite of a whitelist?",
    answer: "Blacklist",
    hint: "Blocks unwanted traffic.",
    blank: "xxxxxxxxx",
    review: "<https://www.kaspersky.com/resource-center/definitions/whitelist>",
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
