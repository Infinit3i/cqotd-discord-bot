const ccnaQuestions = require("./questions/ccnaquestions");
const secQuestions = require("./questions/secquestions");
const mitreQuestions = require("./questions/mitretcodequestions");
const gcihQuestions = require("./questions/gcihquestions");
const netQuestions = require("./questions/netquestions");
const gmonQuestions = require("./questions/gmonquestions");
const gcfaQuestions = require("./questions/gcfaquestions");

// Map aliases to their respective question files
const categoryMap = {
  mitre: mitreQuestions,
  ccna: ccnaQuestions,
  sec: secQuestions,
  "sec+": secQuestions,
  "security+": secQuestions,
  "network+": netQuestions,
  "net+": netQuestions,
  gcih: gcihQuestions,
  gmon: gmonQuestions,
  gcfa: gcfaQuestions,
};

module.exports = categoryMap;
