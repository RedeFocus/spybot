/*module.exports.run = (client, message, args) => {

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["STAFF", "Dono"].includes(r.name)) )
      return message.reply("desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor mencione um membro válido deste servidor");
    if(!member.bannable) 
      return message.reply("Eu não posso banir este usuário! Ele pode ter um cargo mais alto ou eu não tenho permissões de banir, solução: https://i.imgur.com/SBAEu25.gif");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o : ${error}`));
    message.reply(`${member.user.tag} foi banido!\n Staff ${message.author.tag}\n Motivo: ${reason}`);
  }
}*/
const discord = require('discord.js')
module.exports.run = (client, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.roles.some(r=>['name', "Administrador", "STAFF", "DONO", "Dono(a) do grupo", "DEV"].includes(r.name)) )
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).bannable) return message.reply("eu não posso banir essa pessoa")
    if(razão.length < 1) return message.reply("você não colocou uma razão")  

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("**Usuário banido do server**")
   .setColor("#36393e")
   .setTimestamp()
   .addField("Staff: " , message.author.username, true)
   .addField("Usuário: " , usuario.username,true)
   .addField("ID: " , usuario.id,true)
   .setThumbnail(message.author.displayAvatarURL)
   .addField(":hammer: Razão: " , razão, true);

   message.channel.send(embed)
}