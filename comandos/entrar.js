const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      

    const permissions = message.member.voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) {
        return message.channel.send(new Discord.RichEmbed()
        .setColor(0x0000)
        .setTimestamp()
        .setDescription("`❌ | Não tenho permissão de entrar na sala!`"))
}

    if(!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed()
    .setColor(0x0000)
    .setTimestamp()
    .setDescription("`❌ | Você deve estar em um canal de voz!`"))
    var con = message.member.voiceChannel; 
    con.join().then(async conn => {
        var embed = new Discord.RichEmbed()
        .setColor(0x0000)
        .setTimestamp()
        .setDescription(`✅ | Conectado ao canal de voz: \`${con.name}\``)
    message.channel.send(embed)
    })
}

module.exports.help = {
    name: "summon"
    }