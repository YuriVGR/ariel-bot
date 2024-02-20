require("dotenv").config(); //requiring .env file
token = process.env.token;
guildID = process.env.guildID;
clientID = process.env.guildID;
const {
  Client,
  GatewayIntentBits,
  PermissionsBitField,
  Permissions,
  EmbedBuilder,
  Collection,
} = require("discord.js"); //requiring discord.js
const prefix = "a!"; // setting up a prefix
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.mainColor = "#d6ba4b";

client.on("ready", () => {
  console.log(`✅ ${client.user.tag} is online and good to go!`);

  client.user.setActivity(`Working!`, { type: "WATCHING" });
});

client.login(token);

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //message array

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(2);
  const cmd = messageArray[0];

  //COMMANDS

  //test command
  if (command === 'test') {
    message.channel.send("✅ Everything is working!");
  }
});
