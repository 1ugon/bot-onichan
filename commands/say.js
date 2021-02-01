module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete();
  message.channel.send(sayMessage);
};
