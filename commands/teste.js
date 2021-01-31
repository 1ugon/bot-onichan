module.exports.run = async (client, message, args) => {
  const testeMessage = args.join(" ");
  message.channel.send(testeMessage);
};
