require("dotenv").config();
const mainColor = process.env.color;
const {
  SlashCommandBuilder,
  EmbedBuilder,
  embedLength,
} = require("discord.js");
const moment = require("moment");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("guildstats")
    .setDescription("Mostra dados básicos do servidor!"),
  async execute(interaction, client) {
    const embedGuildStats = new EmbedBuilder()
      .setTitle(`*${interaction.guild.name}*`)
      .setDescription(`Rodando dados básicos de: __${interaction.guild.name}__`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(mainColor)
      .addFields(
        {
          name: "Solicitado por:",
          value: `${interaction.user}`,
        },
        {
          name: "Quantidade de membors:",
          value: `${interaction.guild.memberCount} membros.`,
          inline: true,
        },
        {
          name: "Usúario entrou em:",
          value: `${moment.utc(interaction.member.joinedAt).format('DD/MM/YYYY')}`,
          inline: true,
        }
      );
    await interaction.reply({
      embeds: [embedGuildStats],
    });
  },
};
