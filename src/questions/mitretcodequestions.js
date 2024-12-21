const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  category: "mitre",
  fetchQuestion: async () => {
    try {
      const randomCode = `T${Math.floor(1000 + Math.random() * 600)}`;
      const url = `https://attack.mitre.org/techniques/${randomCode}/`;
      const { data } = await axios.get(url);

      const $ = cheerio.load(data);
      const techniqueName = $("h1").text().trim();

      if (!techniqueName) {
        console.warn(`MITRE question not found for code: ${randomCode}`);
        return await module.exports.fetchQuestion(); // Retry with another code
      }

      return {
        category: "mitre",
        question: `What is the code for "${techniqueName}"?`,
        answer: randomCode, // Ensure this is a string
        hint: "Think 'T' followed by a number.",
        blank: "T####",
        review: url,
      };
    } catch (error) {
      console.error("Error fetching MITRE question:", error.message);
      throw new Error("Failed to fetch MITRE question.");
    }
  },
  getAllQuestions: async () => {
    // Return mock data if dynamic questions are not used for multiple choice
    return [
      {
        category: "mitre",
        question: "What is the technique code for Initial Access?",
        answer: "T1078",
        hint: "T####",
        blank: "T####",
        review: "https://attack.mitre.org/techniques/T1078/",
      },
      // Add more static questions if needed
    ];
  },
};
