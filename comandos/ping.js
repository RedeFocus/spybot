module.exports.run = async (client, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
    const m = await message.channel.send("Ping?");
        m.edit(`Pong!! O ping do bot: ${m.createdTimestamp - message.createdTimestamp}ms.O seu ping: ${Math.round(client.ping)}ms`);
  }