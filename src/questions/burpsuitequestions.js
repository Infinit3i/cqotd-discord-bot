let burpSuiteQuestions = [
    {
      category: "Burp Suite",
      question: "What is Burp Suite primarily used for?",
      answer: "Web application testing",
      hint: "Focuses on identifying vulnerabilities.",
      blank: "xxx xxxxxxxxxx xxxxxxx",
      review: "https://portswigger.net/burp",
    },
    {
      category: "Burp Suite",
      question: "What component of Burp Suite captures HTTP requests?",
      answer: "Proxy",
      hint: "Acts as a middleman.",
      blank: "xxxxx",
      review: "https://portswigger.net/burp/documentation/proxy",
    },
    {
      category: "Burp Suite",
      question: "Which tool in Burp Suite is used for scanning vulnerabilities?",
      answer: "Scanner",
      hint: "Automates vulnerability discovery.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/scanner",
    },
    {
      category: "Burp Suite",
      question: "What tool in Burp Suite is used to brute force login forms?",
      answer: "Intruder",
      hint: "Performs automated attacks.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/intruder",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite feature allows you to modify HTTP requests?",
      answer: "Repeater",
      hint: "Used for request manipulation.",
      blank: "xxxxxxxx",
      review: "https://portswigger.net/burp/documentation/repeater",
    },
    {
      category: "Burp Suite",
      question: "Which tool in Burp Suite identifies reflected or stored XSS?",
      answer: "Scanner",
      hint: "Looks for cross-site scripting.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/web-security/cross-site-scripting",
    },
    {
      category: "Burp Suite",
      question: "What feature records all requests and responses in Burp Suite?",
      answer: "Proxy history",
      hint: "Logs all captured traffic.",
      blank: "xxxxx xxxxxxx",
      review: "https://portswigger.net/burp/documentation/proxy/history",
    },
    {
      category: "Burp Suite",
      question: "Which Burp Suite tool analyzes session handling mechanisms?",
      answer: "Sequencer",
      hint: "Focuses on session tokens.",
      blank: "xxxxxxxxx",
      review: "https://portswigger.net/burp/documentation/sequencer",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite feature is used to decode and encode data?",
      answer: "Decoder",
      hint: "Handles encoding transformations.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/decoder",
    },
    {
      category: "Burp Suite",
      question: "What feature allows you to customize requests in Burp Suite?",
      answer: "Custom headers",
      hint: "Adds or modifies HTTP headers.",
      blank: "xxxxxx xxxxxxx",
      review: "https://portswigger.net/burp/documentation/proxy",
    },
    {
      category: "Burp Suite",
      question: "Which tool in Burp Suite automates active scanning?",
      answer: "Scanner",
      hint: "Finds security vulnerabilities.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/scanner",
    },
    {
      category: "Burp Suite",
      question: "Which Burp Suite tool sends multiple requests with varying inputs?",
      answer: "Intruder",
      hint: "Useful for fuzzing.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/intruder",
    },
    {
      category: "Burp Suite",
      question: "What is the purpose of the Comparer tool in Burp Suite?",
      answer: "Compare data",
      hint: "Highlights differences between requests or responses.",
      blank: "xxxxxxx xxxx",
      review: "https://portswigger.net/burp/documentation/comparer",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite extension helps identify SQL injection vulnerabilities?",
      answer: "SQLMap",
      hint: "Automates SQL exploitation.",
      blank: "xxxxxx",
      review: "https://sqlmap.org/",
    },
    {
      category: "Burp Suite",
      question: "What file format does Burp Suite use to save projects?",
      answer: ".burp",
      hint: "Unique to Burp Suite.",
      blank: "xxxxx",
      review: "https://portswigger.net/burp/documentation/projects",
    },
    {
      category: "Burp Suite",
      question: "Which Burp Suite feature checks for outdated or vulnerable libraries?",
      answer: "Scanner",
      hint: "Performs component analysis.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/scanner",
    },
    {
      category: "Burp Suite",
      question: "What is the purpose of the Target tab in Burp Suite?",
      answer: "Define scope",
      hint: "Sets boundaries for testing.",
      blank: "xxxxxx xxxxx",
      review: "https://portswigger.net/burp/documentation/target",
    },
    {
      category: "Burp Suite",
      question: "Which tool in Burp Suite generates statistics for randomness analysis?",
      answer: "Sequencer",
      hint: "Focuses on session IDs.",
      blank: "xxxxxxxxx",
      review: "https://portswigger.net/burp/documentation/sequencer",
    },
    {
      category: "Burp Suite",
      question: "What proxy setting allows HTTPS traffic inspection in Burp Suite?",
      answer: "SSL/TLS certificates",
      hint: "Requires certificate installation.",
      blank: "xxxxxxx/xxxx xxxxxxxxxxx",
      review: "https://portswigger.net/burp/documentation/desktop/configuration",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite feature allows you to intercept requests?",
      answer: "Intercept",
      hint: "Pauses traffic for modification.",
      blank: "xxxxxxxxx",
      review: "https://portswigger.net/burp/documentation/proxy/intercept",
    },
    {
      category: "Burp Suite",
      question: "What is the primary scripting language for Burp Suite extensions?",
      answer: "Python",
      hint: "Used with Jython in Burp Suite.",
      blank: "xxxxxx",
      review: "https://portswigger.net/burp/extender",
    },
    {
      category: "Burp Suite",
      question: "What tool is used to check hidden parameters in Burp Suite?",
      answer: "Param Miner",
      hint: "Finds hidden input fields.",
      blank: "xxxxx xxxxx",
      review: "https://portswigger.net/bappstore",
    },
    {
      category: "Burp Suite",
      question: "Which tool in Burp Suite handles web traffic logs?",
      answer: "HTTP history",
      hint: "Logs requests and responses.",
      blank: "xxxx xxxxxxx",
      review: "https://portswigger.net/burp/documentation/proxy/history",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite feature organizes testing workflow?",
      answer: "Site map",
      hint: "Displays all discovered URLs.",
      blank: "xxxx xxx",
      review: "https://portswigger.net/burp/documentation/target/sitemap",
    },
    {
      category: "Burp Suite",
      question: "Which Burp Suite edition is free to use?",
      answer: "Community",
      hint: "Lacks advanced features like scanning.",
      blank: "xxxxxxxxx",
      review: "https://portswigger.net/burp/documentation/desktop/licensing",
    },
    {
      category: "Burp Suite",
      question: "Which Burp Suite edition includes automated scanning?",
      answer: "Professional",
      hint: "Used for advanced testing.",
      blank: "xxxxxxxxxxxxx",
      review: "https://portswigger.net/burp/documentation/desktop/licensing",
    },
    {
      category: "Burp Suite",
      question: "What is the name of Burp Suite's web vulnerability scanner?",
      answer: "Burp Scanner",
      hint: "Part of the Professional edition.",
      blank: "xxxx xxxxxxx",
      review: "https://portswigger.net/burp/documentation/scanner",
    },
    {
      category: "Burp Suite",
      question: "What feature allows modification of HTML responses in Burp Suite?",
      answer: "Response editing",
      hint: "Used in the Repeater tool.",
      blank: "xxxxxxxx xxxxxxx",
      review: "https://portswigger.net/burp/documentation/repeater",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite tool automates fuzzing for hidden vulnerabilities?",
      answer: "Intruder",
      hint: "Sends multiple payloads.",
      blank: "xxxxxxx",
      review: "https://portswigger.net/burp/documentation/intruder",
    },
    {
      category: "Burp Suite",
      question: "What Burp Suite tab allows for scriptable customizations?",
      answer: "Extender",
      hint: "Manages extensions.",
      blank: "xxxxxxxx",
      review: "https://portswigger.net/burp/documentation/extender",
    },
  ];
  
  module.exports = {
    category: "Burp Suite",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * burpSuiteQuestions.length);
      return burpSuiteQuestions[randomIndex];
    },
    getAllQuestions: async () => {
      return burpSuiteQuestions;
    },
  };
  