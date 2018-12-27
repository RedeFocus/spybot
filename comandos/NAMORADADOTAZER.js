module.exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
  if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
        
      const m = await message.channel.send("O Tazer tinha namorada?!");
          m.edit(`Fotos da namorada do tazer: **ATUALIZANDO** `);
    }