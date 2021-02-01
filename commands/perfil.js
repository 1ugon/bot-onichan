const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  mal
    .findUser(args, "profile")
    .then(function (info) {
      message.channel.send("Perfil de: **" + info.username + "**");
      message.channel.send(
        `🕒 **${info.anime_stats.days_watched}** dias assistidos`
      );
      message.channel.send(
        `🔘 está assistindo **${info.anime_stats.watching}** animes`
      );
      message.channel.send(
        `🟢 completou **${info.anime_stats.completed}** animes`
      );
      message.channel.send(
        `🟡 deixou **${info.anime_stats.on_hold}** animes em espera`
      );
      message.channel.send(
        `🔴 desistiu de **${info.anime_stats.dropped}** animes`
      );
      message.channel.send(
        `👁️ **${info.anime_stats.episodes_watched}** episódios assistidos`
      );
      message.channel.send("--------------------------------------------");
      message.channel.send(`📚 **${info.manga_stats.days_read}** dias lidos`);
      message.channel.send(
        `🔘 está lendo **${info.manga_stats.reading}** mangás`
      );
      message.channel.send(
        `🟢 completou **${info.manga_stats.completed}** mangás`
      );
      message.channel.send(
        `🟡 deixou **${info.manga_stats.on_hold}** mangás em espera`
      );
      message.channel.send(
        `🔴 desistiu de **${info.manga_stats.dropped}** mangás`
      );
      message.channel.send(
        `🧠 **${info.manga_stats.volumes_read}** volumes lidos`
      );
    })
    .catch(function (err) {
      message.channel.send(`Ih papai deu o erro ${err}`);
    });
};
