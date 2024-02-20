require("dotenv").config();
const mainColor = process.env.color;
const {
  SlashCommandBuilder,
  EmbedBuilder,
  embedLength,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns with a pong"),
  async execute(interaction, client) {
    const embedPing = new EmbedBuilder()
      .setTitle("🏓Pong!")
      .setThumbnail( client.user.displayAvatarURL())
      .setColor(mainColor)
      .addFields({name: 'Requesy by:', value: `${interaction.user.tag}`})
    await interaction.reply({
      embeds: [embedPing],
    });
  },
};
