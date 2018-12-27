const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
message.delete();

const embed = new Discord.RichEmbed()

.setColor('#36393e')
.setDescription('**Embed**')
.addField('Embed', `Embed\n\n`)
.addField('embed', `embed\n\n`)
.addField('embed', `embed`)
.setImage("")
.setFooter('')
.setTimestamp(new Date())
message.channel.send('', embed)

}