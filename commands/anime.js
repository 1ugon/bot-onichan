const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .findAnime("11597", "episodes", 1)
    .then(function (info) {
      message.channel.send(info);
    })
    .catch((err) => console.log(err));
  /* message.channel.send(findAnime()) */
};
