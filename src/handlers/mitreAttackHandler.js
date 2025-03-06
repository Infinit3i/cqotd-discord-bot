const cheerio = require('cheerio');

async function getRandomTechnique() {
  const maxAttempts = 50; // Try up to 50 times
  let attempts = 0;
  while (attempts < maxAttempts) {
    // Generate a random number between 1 and 1300 and pad with zeros (e.g. T1001, T1189, etc.)
    const num = Math.floor(Math.random() * 1300) + 1;
    const code = "T1" + num.toString().padStart(3, '0');
    const url = `https://attack.mitre.org/techniques/${code}/`;
    console.log(`🐉 Trying MITRE technique URL: ${url}`);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Extract technique name from the first <h1>
        const techniqueName = $('h1').first().text().trim();
        
        // Extract technique code from element with id "card-id" (remove child spans)
        let extractedCode = $('#card-id').clone().children().remove().end().text().trim();
        if (!extractedCode) {
          extractedCode = code;
        }
        
        // Extract tactic from element with id "card-tactics"
        const tactic = $('#card-tactics a').first().text().trim();
        
        // Extract description from the first paragraph in .description-body
        const description = $('.description-body p').first().text().trim();
        
        // Only return if all fields exist
        if (techniqueName && tactic && description) {
          return { techniqueName, techniqueCode: extractedCode, tactic, description, url };
        }
      } else {
        console.log(`${url} returned status ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
    attempts++;
  }
  return null;
}

async function postTechniqueToDiscord(client) {
  try {
    const channel = await client.channels.fetch(process.env.MITRE_CHANNEL_ID);
    if (!channel) {
      console.error("MITRE channel not found.");
      return;
    }
    const technique = await getRandomTechnique();
    if (technique) {
      // The technique details are wrapped in a code block, and the URL is placed outside as a hyperlink.
      const message = `<${technique.url}>
\`\`\`
Technique: ${technique.techniqueName} - ${technique.techniqueCode}
Tactic: ${technique.tactic}\n
${technique.description}
\`\`\``;
      channel.send(message);
    } else {
      console.error("No valid MITRE technique found after multiple attempts.");
    }
  } catch (error) {
    console.error("Error posting MITRE technique to Discord:", error);
  }
}

function scheduleMITRETechnique(client) {
  // Post a technique immediately, then every 10 minutes
  postTechniqueToDiscord(client);
  setInterval(() => {
    postTechniqueToDiscord(client);
  }, 4 * 10 * 60 * 1000); // 4 hours
}

module.exports = {
  scheduleMITRETechnique,
};
