const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  try {

let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = client.users.get(args[0]);
    }
    
    if (args[0] == null) {return message.channel.send(`**${message.author.username}**, :xShiininha: **Mencione** um **bot** ou diga seu **ID** !`)}
  const embed = new Discord.RichEmbed()
  .addField(`:links: Invite do(a) ${user.username} :`, `[Sem Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0) \n[Permissão Administrador](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=8) \n[Todas Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958591)`)
  .setFooter(message.author.tag,message.author.avatarURL )
  .setTimestamp(new Date())
  .setColor('#FE2E64')
   .setThumbnail(user.avatarURL)       
    if (user.bot) return message.channel.send(embed)
    message.channel.send(`**${message.author.username}**,  este usuário não é um **bot**!`)

} catch (err) {
    message.channel.send(`**${message.author.username}**, bobinho! Isto não é um **bot**!`)
}
}