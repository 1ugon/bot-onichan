module.exports.run = async (client, message, args) => {
  const helpMessage = `**Comandos:**
    +anime "nome do anime" -> Detalhes do Anime
    +animes "nome do anime" -> Lista de Animes
    Bot Criado e Desenvolvido por twitch.tv/goka0`;
  message.channel.send(helpMessage);
};
