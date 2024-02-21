require("dotenv").config();
mainColor = process.env.color;
const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  EmbedBuilder,
  Attachment,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("regras")
    .setDescription("Não utilize fora do chat de regras"),
  async execute(interaction, client) {
    const imgembed = new EmbedBuilder()
      .setImage("https://i.imgur.com/TeuUM7V.png")
      .setColor(mainColor);
    const embed = new EmbedBuilder()
      .setDescription(
        "**SUA PRESENÇA NESSE SERVIDOR IMPLICA QUE VOCÊ LEU E CONCORDA COM AS REGRAS A SEGUIR** \n## Regras gerais \n:one: Seja sempre respeitoso.\n:two: Proibido uso de linguagens difamatória, caluniosas ou discriminatórias.\n:three: Sem spam de textos, menções ou imagens.\n:five: Discussões políticas ou religiosas são proibidas neste servidor.\n:six: Não inicie ou participe de brigas. \n:seven: Não desenvolva discussão de moderação de canais públicos (sem mini mods).\n## Regras de membro da comunidade\n:one: Proibido nomes, foto de perfil, bios, pronomes ou banners NSFW.\n:two: Todos os nomes devem ser possíveis de ser pingados\n:three: Não utilize a função de pronomes para diminuir nenhuma comunidade\n:four: Não quebre os [Termos de Serviço](https://discord.com/terms) ou as [orientações de comunidade do Discord](https://discord.com/guidelines)\n:five: Modificações do Cliente [Discord](https://discord.com/app) contando que não sejam usadas para causar problema á nada ou ninguém"
      )
      .setColor(mainColor);
    const button = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("rulebutton")
          .setLabel("Punições")
          .setEmoji("1209693412668739614")
          .setStyle(ButtonStyle.Primary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Termos de Serviço do Discord")
          .setURL("https://discord.com/terms")
          .setStyle(ButtonStyle.Link)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Orientações de Comunidade do Discord")
          .setURL("https://discord.com/guidelines")
          .setStyle(ButtonStyle.Link)
      );

    await interaction.channel.send({
      content: "https://i.imgur.com/TeuUM7V.png",
    });

    await interaction.channel.send({
      content:
        "☆ Seja bem vindo ao meu servidor, não tenha medo de contatar um admin caso tenha qualquer dúvida ☆",
      embeds: [embed],
      components: [button],
    });
  },
};
