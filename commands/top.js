const Jikan = require("jikan-node");
const mal = new Jikan();

var rank = "";

module.exports.run = async (client, message, args) => {
  mal
    .findTop(args)
    .then(function (info) {
      for (var i = 0; i < 15; i++) {
        let rankindice = `#${info.top[i].rank} - ${info.top[i].title} -> 🏅 ${info.top[i].score}\n`;
        rank = rank + rankindice;
      }
      message.channel.send("```" + rank + "```");
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
