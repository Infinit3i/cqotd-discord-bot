# Cyber Nerd Discord bot

<div align="center">
  <img src="https://github.com/Infinit3i/cqotd-discord-bot/blob/90e4005d6b0da13ec8f1cb67ff4bda5062bd5ed9/Assets/Discord_JS_Bot.jpeg" alt="Discord Bot" width="600">
</div>

## Features
- Grabs News articles and pushes them every 5 minutes
- Grabs the most recent youtube videos from the best cyber security youtube series
- answer questions in the quiz chat

### slash commands

```
/question - asks a question
/blank
/score
/leaderboard
/hint
/skip - skips the current question and generates a new one
```


### SETUP

```
extract
cd CQOTD-DISCORD-BOT-MAIN
npm install discord.js
node src/index.js
```

## TODO

- add scheduled time for questions 3 times a day (10, 13, 16) - worth 15 points
  - alert the users 15 minutes before hand
- grab youtube videos from channels
- 1 point for multiple choice
- hints reduce the score for themselves down by only 1 point

- make the bot so it will be able to deploy on my server and stay up
