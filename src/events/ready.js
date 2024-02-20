const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`✅ ${client.user.tag} is logged in on discord.`);
  },
};
