const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .findUser(args, "profile")
    .then(function (info) {
      message.channel.send(
        "Perfil de **" +
          info.username +
          "** ```🕒 " +
          info.anime_stats.days_watched +
          " dias assistidos \n🔘 está assistindo " +
          info.anime_stats.watching +
          " animes \n🟢 completou " +
          info.anime_stats.completed +
          " animes \n🟡 deixou " +
          info.anime_stats.on_hold +
          " animes em espera \n🔴 desistiu de " +
          info.anime_stats.dropped +
          " animes \n👁️ " +
          info.anime_stats.episodes_watched +
          " episódios assistidos \n \n📚 " +
          info.manga_stats.days_read +
          " dias lidos \n🔘 está lendo " +
          info.manga_stats.reading +
          " mangás\n🟢 completou " +
          info.manga_stats.completed +
          " mangás\n🟡 deixou " +
          info.manga_stats.on_hold +
          " mangás em espera\n🔴 desistiu de " +
          info.manga_stats.dropped +
          " mangás\n🧠 " +
          info.manga_stats.volumes_read +
          " volumes lidos```"
      );
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
