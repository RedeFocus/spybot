const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete();

const embed = new Discord.RichEmbed()

.setColor('0x00F40101')
.setDescription('**Requisitos para Tag Youtuber:**')
.addField('TAG YouTuber', `Ter no mínimo 800 inscritos e um feedback de acordo.\n\n`)
.setFooter('Todos direitos reservados | RedeSpy')
.setTimestamp(new Date())
message.channel.send('', embed)

}
