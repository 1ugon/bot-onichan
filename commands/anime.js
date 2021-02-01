const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  var message = "";

  mal
    .findAnime("11597", "episodes", 1)
    .then((info) => (message = info))
    .catch((err) => (message = err));

  message.channel.send(message);
};
