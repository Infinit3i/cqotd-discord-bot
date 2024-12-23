let splunkquestions = [
  {
    category: "Splunk",
    question:
      "What is the main configuration file used to control indexing behavior?",
    answer: "indexes.conf",
    hint: "File related to indexes",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Indexesconf",
  },
  {
    category: "Splunk",
    question: "Which configuration file is used to define field extractions?",
    answer: "props.conf",
    hint: "Field extractions",
    blank: "xxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Propsconf",
  },
  {
    category: "Splunk",
    question:
      "Which configuration file is used for regular expression transformations?",
    answer: "transforms.conf",
    hint: "Transformations",
    blank: "xxxxxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Transformsconf",
  },
  {
    category: "Splunk",
    question:
      "What is the central management component in a distributed Splunk deployment?",
    answer: "deployer",
    hint: "Manages configurations",
    blank: "xxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/DistSearch/Aboutthedeployer",
  },
  {
    category: "Splunk",
    question:
      "Which component is responsible for running searches and presenting results?",
    answer: "search head",
    hint: "Searches and results",
    blank: "xxxxxx xxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/DistSearch/Aboutdistributedsearch",
  },
  {
    category: "Splunk",
    question: "What is the component responsible for indexing data?",
    answer: "indexer",
    hint: "Indexes data",
    blank: "xxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Abouttheindexer",
  },
  {
    category: "Splunk",
    question: "Which component distributes configurations to indexers?",
    answer: "cluster manager",
    hint: "Cluster configurations",
    blank: "xxxxxxx xxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Aboutclusteredindexing",
  },
  {
    category: "Splunk",
    question: "What port is used for the Splunk web interface?",
    answer: "8000",
    hint: "Default web port",
    blank: "xxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Ports",
  },
  {
    category: "Splunk",
    question: "What port is used for Splunk index replication?",
    answer: "8080",
    hint: "Replication port",
    blank: "xxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Ports",
  },
  {
    category: "Splunk",
    question:
      "Which search command is used to perform fast statistical analysis?",
    answer: "tstats",
    hint: "Fast statistics",
    blank: "xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Tstats",
  },
  {
    category: "Splunk",
    question: "What term describes the type of data being ingested?",
    answer: "sourcetype",
    hint: "Describes data",
    blank: "xxxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutsourcetypes",
  },
  {
    category: "Splunk",
    question: "What do you call a logical storage location for Splunk data?",
    answer: "index",
    hint: "Logical storage",
    blank: "xxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Indexesconf",
  },
  {
    category: "Splunk",
    question: "Which Splunk feature enables data parsing?",
    answer: "line breaking",
    hint: "Splits data lines",
    blank: "xxxx xxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Propsconf",
  },
  {
    category: "Splunk",
    question: "What is the primary purpose of the limits.conf file?",
    answer: "performance limits",
    hint: "Controls resource usage",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Limitsconf",
  },
  {
    category: "Splunk",
    question:
      "Which configuration file controls metadata and access permissions?",
    answer: "authorize.conf",
    hint: "Access permissions",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Authorizeconf",
  },
  {
    category: "Splunk",
    question: "Which Splunk component is responsible for forwarding data?",
    answer: "forwarder",
    hint: "Sends data",
    blank: "xxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Forwarder/latest/Forwarder/Abouttheforwarder",
  },
  {
    category: "Splunk",
    question: "What configuration file is used to set data input properties?",
    answer: "inputs.conf",
    hint: "Input settings",
    blank: "xxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Inputsconf",
  },
  {
    category: "Splunk",
    question: "What role does the Splunk manager have?",
    answer: "deployment server",
    hint: "Deploys apps",
    blank: "xxxxxxxxx xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Updating/Aboutdeploymentserver",
  },
  {
    category: "Splunk",
    question: "What is the purpose of the metadata command in searches?",
    answer: "index discovery",
    hint: "Find indexes",
    blank: "xxxxx xxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Metadata",
  },
  {
    category: "Splunk",
    question: "Which command generates reports from indexed data?",
    answer: "report",
    hint: "Generates reports",
    blank: "xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Report",
  },
  {
    category: "Splunk",
    question: "Which Splunk component ensures high availability?",
    answer: "cluster master",
    hint: "Ensures availability",
    blank: "xxxxxxx xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Aboutclusteredindexing",
  },
  {
    category: "Splunk",
    question: "Which file configures distributed search?",
    answer: "distsearch.conf",
    hint: "Distributed search",
    blank: "xxxxxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Distsearchconf",
  },
  {
    category: "Splunk",
    question:
      "What is the name of Splunk’s main configuration file for alerts?",
    answer: "savedsearches.conf",
    hint: "Saves searches",
    blank: "xxxxxxxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Savedsearchesconf",
  },
  {
    category: "Splunk",
    question: "Which type of bucket contains data yet to be indexed?",
    answer: "hot bucket",
    hint: "Pre-indexed data",
    blank: "xxx xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Aboutsplunkbuckets",
  },
  {
    category: "Splunk",
    question: "Which tool assists with managing Splunk apps?",
    answer: "deployment server",
    hint: "Manages apps",
    blank: "xxxxxxxxx xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Updating/Aboutdeploymentserver",
  },
  {
    category: "Splunk",
    question: "Which file controls search concurrency?",
    answer: "limits.conf",
    hint: "Concurrent searches",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Limitsconf",
  },
  {
    category: "Splunk",
    question: "What describes the format and structure of input data?",
    answer: "sourcetype",
    hint: "Input structure",
    blank: "xxxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutsourcetypes",
  },
  {
    category: "Splunk",
    question: "What file is responsible for defining modular inputs?",
    answer: "inputs.conf",
    hint: "Modules for inputs",
    blank: "xxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Inputsconf",
  },
  {
    category: "Splunk",
    question: "Which Splunk CLI command adds a forward-server?",
    answer: "add forward-server",
    hint: "Adds a server",
    blank: "xxx xxxxxxx-xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Addforwardserver",
  },
  {
    category: "Splunk",
    question:
      "What is the main configuration file used to control indexing behavior?",
    answer: "indexes.conf",
    hint: "File related to indexes",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Indexesconf",
  },
  {
    category: "Splunk",
    question: "Which configuration file is used to define field extractions?",
    answer: "props.conf",
    hint: "Field extractions",
    blank: "xxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Propsconf",
  },
  {
    category: "Splunk",
    question:
      "Which configuration file is used for regular expression transformations?",
    answer: "transforms.conf",
    hint: "Transformations",
    blank: "xxxxxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Transformsconf",
  },
  {
    category: "Splunk",
    question:
      "What is the central management component in a distributed Splunk deployment?",
    answer: "deployer",
    hint: "Manages configurations",
    blank: "xxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/DistSearch/Aboutthedeployer",
  },
  {
    category: "Splunk",
    question:
      "Which component is responsible for running searches and presenting results?",
    answer: "search head",
    hint: "Searches and results",
    blank: "xxxxxx xxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/DistSearch/Aboutdistributedsearch",
  },
  {
    category: "Splunk",
    question: "What is the component responsible for indexing data?",
    answer: "indexer",
    hint: "Indexes data",
    blank: "xxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Abouttheindexer",
  },
  {
    category: "Splunk",
    question: "Which component distributes configurations to indexers?",
    answer: "cluster manager",
    hint: "Cluster configurations",
    blank: "xxxxxxx xxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Aboutclusteredindexing",
  },
  {
    category: "Splunk",
    question: "What port is used for the Splunk web interface?",
    answer: "8000",
    hint: "Default web port",
    blank: "xxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Ports",
  },
  {
    category: "Splunk",
    question: "What port is used for Splunk index replication?",
    answer: "8080",
    hint: "Replication port",
    blank: "xxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Ports",
  },
  {
    category: "Splunk",
    question:
      "Which search command is used to perform fast statistical analysis?",
    answer: "tstats",
    hint: "Fast statistics",
    blank: "xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Tstats",
  },
  {
    category: "Splunk",
    question: "What term describes the type of data being ingested?",
    answer: "sourcetype",
    hint: "Describes data",
    blank: "xxxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutsourcetypes",
  },
  {
    category: "Splunk",
    question: "What do you call a logical storage location for Splunk data?",
    answer: "index",
    hint: "Logical storage",
    blank: "xxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Indexesconf",
  },
  {
    category: "Splunk",
    question: "Which Splunk feature enables data parsing?",
    answer: "line breaking",
    hint: "Splits data lines",
    blank: "xxxx xxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Propsconf",
  },
  {
    category: "Splunk",
    question: "What is the primary purpose of the limits.conf file?",
    answer: "performance limits",
    hint: "Controls resource usage",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Limitsconf",
  },
  {
    category: "Splunk",
    question:
      "Which configuration file controls metadata and access permissions?",
    answer: "authorize.conf",
    hint: "Access permissions",
    blank: "xxxxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Authorizeconf",
  },
  {
    category: "Splunk",
    question: "Which Splunk component is responsible for forwarding data?",
    answer: "forwarder",
    hint: "Sends data",
    blank: "xxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Forwarder/latest/Forwarder/Abouttheforwarder",
  },
  {
    category: "Splunk",
    question: "What configuration file is used to set data input properties?",
    answer: "inputs.conf",
    hint: "Input settings",
    blank: "xxxxxx.xxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Inputsconf",
  },
  {
    category: "Splunk",
    question: "What role does the Splunk manager have?",
    answer: "deployment server",
    hint: "Deploys apps",
    blank: "xxxxxxxxx xxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/Updating/Aboutdeploymentserver",
  },
  {
    category: "Splunk",
    question: "What is the purpose of the metadata command in searches?",
    answer: "index discovery",
    hint: "Find indexes",
    blank: "xxxxx xxxxxxxxx",
    review:
      "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Metadata",
  },
];

module.exports = {
  category: "Splunk",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * splunkquestions.length);
    return splunkquestions[randomIndex];
  },
  getAllQuestions: async () => {
    return splunkquestions;
  },
};
