const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  const anime = await mal
    .findAnime("11597", "episodes", 1)
    .then((info) => info)
    .catch((err) => err);

  message.channel.send(anime);
};
