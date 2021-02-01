const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  const anime = mal
    .findAnime("11597", "episodes", 1)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));

  message.chanel.send(anime);
};
