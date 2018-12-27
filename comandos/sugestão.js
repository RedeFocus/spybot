/* const Discord = require('discord.js');

module.exports.run = async (client,  message, args) => {
            
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
    } */