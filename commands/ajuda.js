module.exports.run = async (client, message, args) => {
  const helpMessage = `**Comandos:**
    +perfil "nome do perfil" -> Perfil do My Anime List
    +animes "nome do anime" -> Três Primeiros Animes
    +anime "nome do anime" -> Detalhes do Anime
    +top anime|manga -> Top 15



    Bot desenvolvido por twitch.tv/goka0`;
  message.channel.send(helpMessage);
};
