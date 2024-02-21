require("dotenv").config();
const mainColor = process.env.color;
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ButtonStyle,
  ButtonBuilder,
  PermissionsBitField,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("limpar")
    .setDescription("Limpa uma quantidade especifica de mensagens")
    .addIntegerOption(option =>
      option
        .setName("quantidade")
        .setDescription("Quantidade de mensagens que deseja deletar")
        .setMinValue(1)
        .setMaxValue(500)
        .setRequired(true)
    ),
  async execute(interaction) {
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.ManageMessages
      )
    )
      return interaction.reply({
        content: "Você não possui permissão para utilizar esse comando..",
        ephemeral: true,
      });

    let number = interaction.options.getInteger("quantidade");

    const embed = new EmbedBuilder()
      .setColor(mainColor)
      .setDescription(`✅ **${number}** mensagens deletadas`);

    await interaction.channel.bulkDelete(number);

    const message = await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });

    const collector = message.createMessageComponentCollector();

    collector.on("collect", async (i) => {
      if (i.customId === "purge") {
        if (!i.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
          return;

        interaction.deleteReply();
      }
    });
  },
};
