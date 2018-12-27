const Discord = require('discord.js');

module.exports.run = async (client,  message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
    message.delete()



    var sugestao = args.join(" ")
    
    if(!sugestao) return message.channel.send("Coloque uma sugestão para ser enviada.");
    
    var sugestaocanal = message.guild.channels.find(ch => ch.name == "sugestões");
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Autor: ${message.author}\nSugestão: ${sugestao}`)
let msg = await sugestaocanal.send(embed);
await msg.react("✅")
await msg.react("❎")

}