const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .search("anime", args)
    .then(function (info) {
      message.channel.send(
        `**${info.results[0].title}** -> ${info.results[0].url}`
      );
      message.channel.send(
        `**${info.results[1].title}** -> ${info.results[1].url}`
      );
      message.channel.send(
        `**${info.results[2].title}** -> ${info.results[2].url}`
      );
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
