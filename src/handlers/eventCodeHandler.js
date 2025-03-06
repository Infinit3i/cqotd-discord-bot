const cheerio = require('cheerio');

async function getRandomEvent() {
  const maxAttempts = 100; // Try up to 100 times
  let attempts = 0;
  while (attempts < maxAttempts) {
    // Generate a random event ID between 1 and 2000
    const eventId = Math.floor(Math.random() * 2000) + 1;
    const url = `https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=${eventId}`;
    console.log(`🪟 Trying Windows event URL: ${url}`);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Extract event details from the <p class="hey"> element.
        // Expected format: "1100: The event logging service has shut down"
        const heyText = $('p.hey').first().text().trim();
        if (!heyText || !heyText.includes(':')) {
          console.log("No proper event header found.");
          attempts++;
          continue;
        }
        const parts = heyText.split(':');
        const eventCode = parts[0].trim();
        const eventName = parts.slice(1).join(':').trim();
        
        // Extract description from the first <p> following the <ul>
        const description = $('ul').next('p').first().text().trim();
        if (!description) {
          console.log("No description found.");
          attempts++;
          continue;
        }
        
        return { eventCode, eventName, description, url };
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

async function postEventToDiscord(client) {
  try {
    const channel = await client.channels.fetch(process.env.WIN_EVENT_CHANNEL_ID);
    if (!channel) {
      console.error("Windows event channel not found.");
      return;
    }
    const eventData = await getRandomEvent();
    if (eventData) {
      const message = `<${eventData.url}>
\`\`\`
${eventData.eventCode}: ${eventData.eventName}\n
${eventData.description}
\`\`\``;
      channel.send(message);
    } else {
      console.error("No valid Windows event found after multiple attempts.");
    }
  } catch (error) {
    console.error("Error posting Windows event to Discord:", error);
  }
}

function scheduleEventCode(client) {
  // Post a new event immediately, then every 6 hours
  postEventToDiscord(client);
  setInterval(() => {
    postEventToDiscord(client);
  }, 4 * 60 * 60 * 1000); // 4 hours
}

module.exports = {
  scheduleEventCode,
};
