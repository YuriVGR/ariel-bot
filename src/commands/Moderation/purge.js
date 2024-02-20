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
    .setName("purge")
    .setDescription("Clear a certain amount of messages")
    .addIntegerOption(option =>
      option
        .setName("amount")
        .setDescription("The amount of messages to delete")
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
        content: "You don't have permission to use this command.",
        ephemeral: true,
      });

    let number = interaction.options.getInteger("amount");

    const embed = new EmbedBuilder()
      .setColor(mainColor)
      .setDescription(`✅ Deleted ${number} messages`);

    await interaction.channel.bulkDelete(number);

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("purge")
        .setLabel("Confirm")
        .setStyle(ButtonStyle.Success)
    );

    const message = await interaction.reply({
      embeds: [embed],
      components: [button],
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
