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
    .addIntegerOption((option) =>
      option
        .setName("amouut")
        .setDescription("The amount of messages to delete")
        .setMinValue(1)
        .setMaxValue(500)
        .required(true)
    ),
  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({ content: "You don't have permission", ephemeral: true})

    let number = interaction.options.getInteger('amount');

    const embed = new EmbedBuilder().setDescription(`✅ Deleted ${number} messages`);
    
    await interaction.channel.bulkDelete(number)

    const button = new ActionRowBuilder().addComponents()
  },
};
