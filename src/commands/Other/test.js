require("dotenv").config();
const mainColor = process.env.color;
const {
  SlashCommandBuilder,
  EmbedBuilder,
  embedLength,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("This is a test command."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("⚡︎ Everything is working.")
      .setDescription(`Request by **${interaction.user.tag}**`)
      .setThumbnail( client.user.displayAvatarURL())
      .setColor(mainColor)
      .addFields(
        {name: 'API Latency:', value: `${client.ws.ping}`}
      )
    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
