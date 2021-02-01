module.exports.run = async (client, message, args) => {
  const helpMessage = `**Comandos:**
    +anime "nome do anime" -> Detalhes do Anime
    +animes "nome do anime" -> Lista de Animes

    Bot desenvolvido por twitch.tv/goka0`;
  message.channel.send(helpMessage);
};
