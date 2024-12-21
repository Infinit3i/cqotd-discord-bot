const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  category: "mitre",
  /**
   * Fetches a random MITRE T-Code and its corresponding title.
   * @returns {Promise<{category: string, question: string, answer: string, hint: string, review: string}>}
   */
  fetchQuestion: async () => {
    try {
      const randomCode = `T${Math.floor(1000 + Math.random() * 600)}`;
      const url = `https://attack.mitre.org/techniques/${randomCode}/`;

      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const techniqueName = $("h1").text().trim();

      if (!techniqueName) {
        return await module.exports.fetchQuestion();
      }

      return {
        category: "mitre",
        question: `What is the code for "${techniqueName}"?`,
        answer: randomCode,
        hint: "Think 'T' followed by a number.",
        blank: "T####",
        review: url,
      };
    } catch (error) {
      console.error("Error fetching MITRE T-Code:", error.message);
      throw new Error("Failed to fetch MITRE T-Code. Please try again later.");
    }
  },
};
