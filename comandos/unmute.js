const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")

let membro = message.mentions.users.first() || client.users.get(args[0]);
if(!membro) return message.reply('não encontrei este membro')
if(message.guild.members.get(membro.id).roles.get("519558446400405528")) return message.channel.send("Esse usuário não está mutado!");
let muteRole = message.guild.roles.get("519558446400405528");
if(message.guild.members.get(membro.id).roles.get(muteRole)) return message.channel.send("Esse usuário não está mutado!");
membro.removeRole(muteRole.id);
let Embed = new Discord.RichEmbed() ///member
.setAuthor(`Unmute`)
.addField("Staff:", message.author)
.addField("Membro com a punição revogada:", membro)

message.channel.send(Embed);

}