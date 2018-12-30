const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
message.delete();

const embed = new Discord.RichEmbed()

.setColor('0x00F40101')
.setDescription('**Requisitos para Tag Youtuber:**')
.addField('TAG YouTuber', `Ter no mínimo 1000inscritos e um feedback de acordo.\n\n`)
.addField('TAG Mini-YouTuber', `Ter no mínimo 500 inscritos e um feedback de acordo.\n\n`)
.addField('Como solicito?', `Você deve usar p-ticket e reagir ao "youtuber", junto com as informações:\nNick do Minecraft:\nLink do canal:`)
.addField('Nosso canal!', `[Clique aqui para ir ao nosso canal!](https://www.youtube.com/channel/canalundefined)`)
.setFooter('Todos direitos reservados | RedeSpy')
.setTimestamp(new Date())
message.channel.send('', embed)

}
