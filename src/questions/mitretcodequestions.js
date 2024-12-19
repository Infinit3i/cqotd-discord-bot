const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  /**
   * Fetches a random MITRE T-Code and its corresponding title.
   * @returns {Promise<{category: string, question: string, answer: string, hint: string, review: string}>}
   */
  fetchMitreQuestion: async () => {
    try {
      // Generate a random T-Code within a reasonable range (e.g., T1000 to T1599)
      const randomCode = `T${Math.floor(1000 + Math.random() * 600)}`;
      const url = `https://attack.mitre.org/techniques/${randomCode}/`;

      // Fetch the webpage
      const { data } = await axios.get(url);

      // Parse the HTML to extract the technique name from the title
      const $ = cheerio.load(data);
      const techniqueName = $("h1").text().trim(); // The title is in the <h1> tag

      // If no technique is found, retry with another code
      if (!techniqueName) {
        return await module.exports.fetchMitreQuestion();
      }

      // Construct the question
      return {
        category: "MITRE T-Code",
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
