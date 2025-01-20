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
  {
    category: "Splunk",
    question: "What command lists all available sourcetypes?",
    answer: "| metadata type=sourcetypes",
    hint: "Metadata command for sourcetypes.",
    blank: "| xxxxxxxx xxxx=xxxxxxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Metadata",
  },
  {
    category: "Splunk",
    question: "How do you specify the index in a Splunk search?",
    answer: "index=<index_name>",
    hint: "Start your search with an index.",
    blank: "xxxxx=<xxxx_xxxx>",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/SearchIndex",
  },
  {
    category: "Splunk",
    question: "What is a data model in Splunk?",
    answer: "A structured hierarchy for accelerated searches",
    hint: "Enhances speed and efficiency.",
    blank: "x xxxxxxxxx xxxxxxxxxx xxx xxxxxxxxxxx xxxxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Aboutdatamodels",
  },
  {
    category: "Splunk",
    question: "What command helps identify the current index for an event?",
    answer: "index=_audit",
    hint: "Audit index provides indexing details.",
    blank: "xxxxx=_xxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Audit",
  },
  {
    category: "Splunk",
    question: "What is the purpose of event types in Splunk?",
    answer: "Categorize and tag events for reuse",
    hint: "Organize events.",
    blank: "xxxxxxxxxx xxx xxxx xxxxxx xxx xxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Abouteventtypes",
  },
  {
    category: "Splunk",
    question: "Which command extracts fields from raw data in Splunk?",
    answer: "rex",
    hint: "Regular expression extraction.",
    blank: "xxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Rex",
  },
  {
    category: "Splunk",
    question: "How do you identify all events with a specific sourcetype?",
    answer: "sourcetype=<type>",
    hint: "Filter by event data type.",
    blank: "xxxxxxxxxx=<xxxx>",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutsourcetypes",
  },
  {
    category: "Splunk",
    question: "What command is used to check which index a search accesses?",
    answer: "| rest /services/data/indexes",
    hint: "REST API for index information.",
    blank: "| xxxx /xxxxxxxx/xxxx/xxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearchindexes",
  },
  {
    category: "Splunk",
    question: "What is the purpose of accelerated data models?",
    answer: "Speed up searches using precomputed results",
    hint: "Focuses on faster queries.",
    blank: "xxxxx xx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/AcceleratedDataModels",
  },
  {
    category: "Splunk",
    question: "What Splunk file contains event type definitions?",
    answer: "eventtypes.conf",
    hint: "Event categorization file.",
    blank: "xxxxxxxxxxx.xxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Eventtypesconf",
  },
  {
    category: "Splunk",
    question: "How can you search across multiple sourcetypes in Splunk?",
    answer: "sourcetype IN (<type1>, <type2>)",
    hint: "Use the IN operator.",
    blank: "xxxxxxxxxx xx (<xxxxx>, <xxxxx>)",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/CommonStatsFunctions",
  },
  {
    category: "Splunk",
    question: "What is the purpose of CIM compliance in Splunk?",
    answer: "Standardizes data for better analysis",
    hint: "Data normalization.",
    blank: "xxxxxxxxxxx xxxx xxx xxxxxx xxxxxxxxxx",
    review: "https://docs.splunk.com/Documentation/CIM/latest/User/Overview",
  },
  {
    category: "Splunk",
    question: "What is the purpose of the `search` keyword in Splunk?",
    answer: "Explicitly specifies the query",
    hint: "Use it to refine queries.",
    blank: "xxxxxxxxx xxxxxxxxxx xxx xxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Search",
  },
  {
    category: "Splunk",
    question: "What is a Splunk pivot?",
    answer: "A visualization tool for data models",
    hint: "Helps create reports.",
    blank: "x xxxxxxxxxxxxxx xxxx xxx xxxx xxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Aboutpivot",
  },
  {
    category: "Splunk",
    question: "Which command is used to preview data in a specified index?",
    answer: "| tstats prestats=true",
    hint: "Pre-stats view.",
    blank: "| xxxxxx xxxxxxxx=xxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Tstats",
  },
  {
    category: "Splunk",
    question: "How do you assign tags to a specific field value?",
    answer: "tags.conf",
    hint: "Field tagging file.",
    blank: "xxxxx.xxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Tagsconf",
  },
  {
    category: "Splunk",
    question: "What Splunk feature helps identify anomalies in data?",
    answer: "Anomaly Detection",
    hint: "Deviation analysis.",
    blank: "xxxxxxx xxxxxxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Anomalydetection",
  },
  {
    category: "Splunk",
    question: "What is the default Splunk user for CLI operations?",
    answer: "admin",
    hint: "Superuser access.",
    blank: "xxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/Admin/Userauthentication",
  },
  {
    category: "Splunk",
    question: "What command generates a summary index in Splunk?",
    answer: "| collect",
    hint: "Used for summary indexing.",
    blank: "| xxxxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Collect",
  },
  {
    category: "Splunk",
    question: "What command generates a chart from search results?",
    answer: "chart",
    hint: "Visualizes search data.",
    blank: "xxxxx",
    review: "https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Chart",
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
