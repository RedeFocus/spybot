const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
let usuario = client.users.get(args[0]) || message.mentions.members.first() || message.guild.members.get(args[0]);
if (!usuario) return message.reply('esse usuário não existe, ou o mesmo não está banido.');

try {
    message.guild.unban(usuario).then(() => {
  
    let embed = new Discord.RichEmbed()
   .setTitle("Desbanimento")
   .setColor("RANDOM")
   .addField("Usuário desbanido", `<@${usuario.id}>`)
   .addField("Staffer", message.author)
   .setImage('https://i.imgur.com/vXRfAd6.gif'); 
  
    message.channel.send(embed);
  });
  } catch(e){
    message.reply(`ocorreu um erro: ${e}`);
  }
} 
