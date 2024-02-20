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
    .setDescription("Show the server general stats."),
  async execute(interaction, client) {
    const embedGuildStats = new EmbedBuilder()
      .setTitle(`*${interaction.guild.name}*`)
      .setDescription(`Running guildstats for __${interaction.guild.name}__`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(mainColor)
      .addFields(
        {
          name: "Requested by:",
          value: `${interaction.user.tag}`,
        },
        {
          name: "Membercount:",
          value: `${interaction.guild.memberCount}`,
          inline: true,
        },
        {
          name: "User joined at:",
          value: `${moment.utc(interaction.member.joinedAt).format('MM/DD/YYYY')}`,
          inline: true,
        }
      );
    await interaction.reply({
      embeds: [embedGuildStats],
    });
  },
};
