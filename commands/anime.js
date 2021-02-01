const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .findAnime("11597", "episodes", 1)
    .then((info) => message.channel.send(info))
    .catch((err) => message.channel.send(err));
};
