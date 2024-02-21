require("dotenv").config();
mainColor = process.env.color;
const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("regras")
    .setDescription("Não utilize fora do chat de regras"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("☆ Regras ☆")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        `1. Sempre seja respeitoso com as outras pessoas.
2. Não use calúnias ou linguagem difamatória contra outros membros.
3. Qualquer linguagem que possa discriminar outras pessoas com base em sexo, gênero, raça, etc., levará ao banimento
4. Sem spam de texto, imagens ou marcações
5. Nenhum anúncio neste servidor. Os infratores serão silenciados.
6. Discussões políticas ou religiosas são proibidas neste servidor.
7. Não compartilhe conteúdo +18 ou conteúdo ilegal.
8. Não leve problemas no servidor para fora dele, não toleramos atos como vazamentos de dados e ameaças.
9. SEM CAÇA AS BRUXAS, NÃO APOIAMOS ESSE TIPO DE ATITUDE.`
      )
      .setColor(mainColor);
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rulebutton")
        .setLabel("Punições")
        .setEmoji("1209675104930496512")
        .setStyle(ButtonStyle.Primary)
    );
    await interaction.channel.send({
      embeds: [embed],
      components: [button],
    });
  },
};
