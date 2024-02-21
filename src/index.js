require("dotenv").config();
const token = process.env.token;
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
  MessageManager,
  Embed,
  Collection,
  Events,
} = require(`discord.js`);
const fs = require("fs");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

const functions = fs
  .readdirSync("./src/functions")
  .filter((file) => file.endsWith(".js"));
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, "./src/events");
  client.handleCommands(commandFolders, "./src/commands");
  client.login(token);
})();

//button

client.on(Events.InteractionCreate, async (interaction) => {
  embedRules = new EmbedBuilder()
    .setTitle("Punições")
    .setDescription(
      "Como miramos numa comunidade organizada, deixaremos aqui explicado como funcionam algumas das punições"
    )
    .setColor(process.env.color)
    .addFields(
      { name: "Spam", value: "Anúncio sem solicitação de um Admin" },
      {
        name: "Anúncio sem solicitação de um Admin",
        value:
          "Mute de 2 horas, poderá contatar um Admin na primeira infração, 3 infrações resultará em banimento.",
      },
      {
        name: "Discussões religiosas/políticas",
        value:
          "Mute de 1 hora, acreditamos que seja o suficiente pra entender que esse não é um servidor para discussões.",
      },
      {
        name: "Calúnia, linguagem difamatória e/ou discriminatória, ameaças e vazamento de dados pessoais",
        value:
          "Banimento permanente e reportaremos pro Discord, não toleramos tais atitudes aqui.",
      }
    );
  if (interaction.customId !== "rulebutton") return;

  await interaction.reply({
    embeds: [embedRules],
    ephemeral: true,
  });
});
