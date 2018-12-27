const Discord = require('discord.js');

    exports.run = async (client, message, args) => {
        var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      

        if(!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed()
        .setColor(0x0000)
        .setTimestamp()
        .setDescription("`❎ | Você deve estar no mesmo canal de voz que eu estou para usar o comando!`"))
    
        var cccc = message.member.voiceChannel
    cccc.leave(); 
        var embed = new Discord.RichEmbed()
        .setColor(0x0000)
        .setTimestamp()
        .setDescription(`✅ | Estou saindo do canal: \`${cccc.name}\``)
        message.channel.send(embed)
    }

module.exports.help = {
    name: "sair"
    }