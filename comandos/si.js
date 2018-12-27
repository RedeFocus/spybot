exports.run = (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
    const Discord = require("discord.js");
    
let simg = `${message.guild.iconURL}?size=2048`
        let icone = new Discord.RichEmbed()
        .setDescription("Ícone do grupo:")
        .setImage(simg)
        message.channel.send(icone)
}