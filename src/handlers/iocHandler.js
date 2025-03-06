const feedIOCUrls = [
  "https://sslbl.abuse.ch/blacklist/sslblacklist.csv",
  "https://sslbl.abuse.ch/blacklist/sslipblacklist.csv",
  "https://sslbl.abuse.ch/blacklist/sslipblacklist.txt",
  "https://sslbl.abuse.ch/blacklist/sslipblacklist_aggressive.csv",
  "https://sslbl.abuse.ch/blacklist/sslipblacklist_aggressive.txt",
  "https://threatfox.abuse.ch/downloads/hostfile/",
  "https://feodotracker.abuse.ch/downloads/ipblocklist.txt",
  "https://bazaar.abuse.ch/export/txt/md5/recent/",
  "https://threatfox.abuse.ch/export/csv/md5/recent/",
  "https://bazaar.abuse.ch/export/txt/sha1/recent/",
  "https://bazaar.abuse.ch/export/txt/sha256/recent/",
  "https://threatfox.abuse.ch/export/csv/sha256/recent/",
  "https://urlhaus.abuse.ch/downloads/csv_recent/",
  "https://lists.blocklist.de/lists/all.txt",
  "https://lists.blocklist.de/lists/ssh.txt",
  "https://lists.blocklist.de/lists/mail.txt",
  "https://lists.blocklist.de/lists/apache.txt",
  "https://lists.blocklist.de/lists/imap.txt",
  "https://lists.blocklist.de/lists/bots.txt",
  "https://lists.blocklist.de/lists/bruteforcelogin.txt",
  "https://lists.blocklist.de/lists/strongips.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/1.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/2.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/3.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/4.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/5.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/6.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/7.txt",
  "https://raw.githubusercontent.com/stamparm/ipsum/master/levels/8.txt",
];

async function getRandomIOC() {
  // Select a random feed URL
  const randomIOCFeedUrl = feedIOCUrls[Math.floor(Math.random() * feedIOCUrls.length)];
  console.log(`Fetching IOC from: ${randomIOCFeedUrl}`);
  try {
    const response = await fetch(randomIOCFeedUrl);
    if (!response.ok) {
      console.error(`Failed to fetch ${randomIOCFeedUrl}: ${response.statusText}`);
      return null;
    }
    const data = await response.text();
    // Split the data into lines, trimming empty lines
    let lines = data.split("\n").map(line => line.trim()).filter(line => line !== "");
    
    // Remove header if it's a CSV file
    if (lines.length && (lines[0].toLowerCase().includes("ip") || lines[0].toLowerCase().includes("host"))) {
      lines = lines.slice(1);
    }
    
    if (!lines.length) {
      console.error(`No valid IOC found in ${randomIOCFeedUrl}`);
      return null;
    }
    
    // Select a random IOC from the lines
    const randomIOC = lines[Math.floor(Math.random() * lines.length)];
    return randomIOC;
  } catch (error) {
    console.error(`Error fetching data from ${randomIOCFeedUrl}:`, error);
    return null;
  }
}

async function postIOCToDiscord(client) {
  try {
    const channel = await client.channels.fetch(process.env.IOC_CHANNEL_ID);
    if (!channel) {
      console.error("IOC channel not found.");
      return;
    }
    const ioc = await getRandomIOC();
    if (ioc) {
      channel.send(`New IOC:\`\`\`\n${ioc}\`\`\``);
    } else {
      console.error("No IOC retrieved.");
    }
  } catch (error) {
    console.error("Error posting IOC to Discord:", error);
  }
}

function scheduleIOC(client) {
  setInterval(() => {
    postIOCToDiscord(client);
  }, 10 * 60 * 1000); // 10 minutes
}

module.exports = {
  scheduleIOC,
};
