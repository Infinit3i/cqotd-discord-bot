let paloaltofwcommandsquestions = [
    {
      category: "Palo Alto Firewall Commands",
      question: "What command displays the current running configuration?",
      answer: "show config running",
      hint: "Shows the active configuration.",
      blank: "xxxx xxxxxx xxxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/RunningConfig>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command saves the running configuration to a file?",
      answer: "save config to [filename]",
      hint: "Saves configuration changes.",
      blank: "xxxx xxxxxx xx [xxxxxxxx]",
      review: "<https://knowledgebase.paloaltonetworks.com/SaveConfig>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command commits configuration changes?",
      answer: "commit",
      hint: "Applies changes to the device.",
      blank: "xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/CommitChanges>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command enters configuration mode?",
      answer: "configure",
      hint: "Switches to configuration mode.",
      blank: "xxxxxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ConfigureMode>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows the status of the interfaces?",
      answer: "show interface all",
      hint: "Displays all interfaces and their statuses.",
      blank: "xxxx xxxxxxxxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ShowInterfaceStatus>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command tests policy matches?",
      answer: "test security-policy-match",
      hint: "Simulates traffic to test policies.",
      blank: "xxxx xxxxxxxxxxxxxxx-xxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/TestPolicy>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows active sessions?",
      answer: "show session all",
      hint: "Lists all active sessions.",
      blank: "xxxx xxxxxxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ShowSessions>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command resets a specific session?",
      answer: "clear session id [ID]",
      hint: "Terminates a session by ID.",
      blank: "xxxxx xxxxxxx xx [xx]",
      review: "<https://knowledgebase.paloaltonetworks.com/ClearSession>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command displays system information?",
      answer: "show system info",
      hint: "Provides details about the device.",
      blank: "xxxx xxxxxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/SystemInfo>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command reboots the firewall?",
      answer: "request restart system",
      hint: "Restarts the device.",
      blank: "xxxxxxx xxxxxxx xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/RestartSystem>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command displays ARP table information?",
      answer: "show arp all",
      hint: "Lists all ARP entries.",
      blank: "xxxx xxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ARPTable>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command clears ARP entries?",
      answer: "clear arp all",
      hint: "Removes ARP table entries.",
      blank: "xxxxx xxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ClearARP>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command enables debugging logs?",
      answer: "debug log-receiver on",
      hint: "Turns on debugging for logs.",
      blank: "xxxxx xxx-xxxxxxxxx xx",
      review: "<https://knowledgebase.paloaltonetworks.com/DebugLogs>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows the NAT rules configuration?",
      answer: "show running nat-policy",
      hint: "Displays current NAT rules.",
      blank: "xxxx xxxxxxx xxx-xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/NATPolicy>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command displays system logs?",
      answer: "show log system",
      hint: "Provides logs for system events.",
      blank: "xxxx xxx xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/SystemLogs>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command displays security rules?",
      answer: "show running security-policy",
      hint: "Shows security rules currently in effect.",
      blank: "xxxx xxxxxxx xxxxxxxxx-xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/SecurityPolicy>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command clears all sessions?",
      answer: "clear session all",
      hint: "Terminates all active sessions.",
      blank: "xxxxx xxxxxxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ClearSessions>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows high availability status?",
      answer: "show high-availability state",
      hint: "Displays HA status and configurations.",
      blank: "xxxx xxxx-xxxxxxxxxxxx xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/HAStatus>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command enables a specific interface?",
      answer: "set interface [name] enable",
      hint: "Activates a specified interface.",
      blank: "xxx xxxxxxxxx [xxxxx] xxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/EnableInterface>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows the routing table?",
      answer: "show routing route",
      hint: "Lists all routes.",
      blank: "xxxx xxxxxxx xxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/RoutingTable>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command exports a configuration file?",
      answer: "scp export configuration",
      hint: "Copies configuration via SCP.",
      blank: "xxx xxxxxx xxxxxxxxxxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ExportConfig>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command tests connectivity to a remote device?",
      answer: "ping [destination]",
      hint: "ICMP utility.",
      blank: "xxxx [xxxxxxxxxx]",
      review: "<https://knowledgebase.paloaltonetworks.com/PingCommand>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command backs up the current configuration?",
      answer: "save config to [filename]",
      hint: "Creates a backup file.",
      blank: "xxxx xxxxxx xx [xxxxxxxx]",
      review: "<https://knowledgebase.paloaltonetworks.com/BackupConfig>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command restores a saved configuration?",
      answer: "load config from [filename]",
      hint: "Loads a configuration file.",
      blank: "xxxx xxxxxx xxxx [xxxxxxxx]",
      review: "<https://knowledgebase.paloaltonetworks.com/RestoreConfig>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows the current software version?",
      answer: "show system software-info",
      hint: "Displays software details.",
      blank: "xxxx xxxxxx xxxxxxxxxxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/SoftwareInfo>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command performs a traceroute?",
      answer: "traceroute [destination]",
      hint: "Tracks network hops.",
      blank: "xxxxxxxxxxx [xxxxxxxxxx]",
      review: "<https://knowledgebase.paloaltonetworks.com/Traceroute>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command shows information about zones?",
      answer: "show zone",
      hint: "Displays configured zones.",
      blank: "xxxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ShowZones>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command restarts a specific service?",
      answer: "debug software restart process [process_name]",
      hint: "Restarts a named process.",
      blank: "xxxxx xxxxxxxx xxxxxxx xxxxxxx [xxxxxxxxxxx]",
      review: "<https://knowledgebase.paloaltonetworks.com/RestartProcess>",
    },
    {
      category: "Palo Alto Firewall Commands",
      question: "What command clears all counters on the firewall?",
      answer: "clear counters all",
      hint: "Resets statistics.",
      blank: "xxxxx xxxxxxxx xxxx",
      review: "<https://knowledgebase.paloaltonetworks.com/ClearCounters>",
    },
  ];
  
  module.exports = {
    category: "Palo Alto Firewall Commands",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * paloaltofwcommandsquestions.length);
      return paloaltofwcommandsquestions[randomIndex];
    },
    getAllQuestions: async () => {
      return paloaltofwcommandsquestions;
    },
  };
  