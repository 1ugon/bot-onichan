const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .search("anime", args)
    .then(function (info) {
      mal.findAnime(info.results[0].mal_id).then(function (infoAnime) {
        message.channel.send(infoAnime.image_url);
        message.channel.send(
          `**${infoAnime.title}**`
        );
        message.channel.send(
          "```Sinopse: " +
            infoAnime.synopsis +
            "\n🏅 Nota: " +
            infoAnime.score +
            " 🏆 Rank: " +
            infoAnime.rank +
            "\n" +
            `⏰ ${
              infoAnime.episodes == null
                ? "O MAL cansou de contar os"
                : infoAnime.episodes
            } episódios (${
              infoAnime.airing ? "ainda" : "não"
            } está saindo mais ${infoAnime.airing ? "😁" : "😭"})` +
            "\n👪 " +
            infoAnime.members +
            " pessoas colocaram em sua lista e " +
            infoAnime.favorites +
            " favoritaram \n📅 Data: " +
            infoAnime.aired.string +
            "```"
        );
      });
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
