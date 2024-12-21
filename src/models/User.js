const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false, // Optional but useful for logs and leaderboards
  },
  score: {
    type: Number,
    default: 0,
  },
  questionsAnswered: {
    type: Number,
    default: 0,
  },
  lastAnswered: {
    type: Date,
    default: null,
  },
  lastDaily: {
    type: Date,
    default: null, // Set a default value
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', userSchema);
