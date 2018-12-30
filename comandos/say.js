exports.run = async (client, message, args) => {
  var ids = ["341046919025524746", "503398173524623360", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de usar esse comando.")
      
if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("você não tem permissões!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
