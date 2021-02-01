const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .search("anime", args)
    .then(function (info) {
      message.channel.send("**" + info.results[0].title + "**");
      message.channel.send(info.results[0].url);
      message.channel.send(
        `🏅 Nota: ${info.results[0].score}               ⏰ **${
          info.results[0].episodes
        }** Episódios (${
          info.results[0].airing ? "ainda" : "não"
        } está saindo mais ${
          info.results[0].airing ? "😁" : "😭"
        })               `
      );
      message.channel.send(
        `👪 Aproximadamente **${info.results[0].members}** colocaram esse anime em sua lista`
      );
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
