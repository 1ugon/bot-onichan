const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .search("anime", args)
    .then(function (info) {
      mal.findAnime(info.results[0].mal_id).then(function (infoAnime) {
        message.channel.send(
          `**${infoAnime.title} - ${infoAnime.title_japanese}**`
        );
        message.channel.send(infoAnime.image_url);
        message.channel.send("**Sinopse: **" + infoAnime.synopsis);
        message.channel.send(
          `🏅 Nota: **${infoAnime.score}** Rank: **${infoAnime.rank}**`
        );
        message.channel.send(
          `⏰ **${
            infoAnime.episodes == null ? "Zero" : infoAnime.episodes
          }** episódios (${
            infoAnime.airing ? "ainda" : "não"
          } está saindo mais ${infoAnime.airing ? "😁" : "😭"})`
        );
        message.channel.send(
          `👪 **${infoAnime.members}** pessoas colocaram em sua lista e **${infoAnime.favorites}** favoritaram`
        );
        message.channel.send(`📅 Datas: **${infoAnime.aired.string}**`);
      });
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
