const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
message.delete();

const embed = new Discord.RichEmbed()

.setColor('0x00F40101')
.setDescription('**Requisitos para Tag Youtuber:**')
.addField('TAG YouTuber', `Ter no mínimo 600 inscritos e um feedback de acordo.\n\n`)
.addField('TAG Mini-YouTuber', `Ter no mínimo 200 inscritos e um feedback de acordo.\n\n`)
.addField('Como solicito?', `Você deve usar p-ticket e reagir ao "youtuber", junto com as informações:\nNick do Minecraft:\nLink do canal:`)
.addField('Nosso canal!', `[Clique aqui para ir ao nosso canal!](https://www.youtube.com/channel/canal)`)
.setImage("https://cdn.discordapp.com/icons/517496999721828371/b4b70bcfd4bb32cc71720613c0f06b6d.png?size=2048")
.setFooter('Todos direitos reservados | FantasticMC')
.setTimestamp(new Date())
message.channel.send('', embed)

}