require("dotenv").config();
const mainColor = process.env.color;
const {
  SlashCommandBuilder,
  EmbedBuilder,
  embedLength,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("teste")
    .setDescription("Comando para checar se a Ariel Bot está funcionando corretamente."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`✅ ${client.user.username} está funcionando corretamente`)
      .setDescription(`Solicitado por: **${interaction.user}**`)
      .setThumbnail( client.user.displayAvatarURL())
      .setColor(mainColor)
      .addFields(
        {name: 'Latência do API:', value: `${client.ws.ping}`}
      )
    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
