const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    message.delete()
    var ids = ["297104318794825728"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
    
  
    let target = message.author
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("você não tem permissões!");
        const color = args[1]
        const text = args.slice(1).join(" ");
        if (text.length < 1) return message.channel.send("Você tem que usar da forma: ``p-changelog EQUIPE <msg>");
        const embed = new Discord.RichEmbed()
        .setColor(11543845)
        .setTitle("\:barber: Changelog:  \:barber: ")
        
        .setDescription("▫", text)
        .setFooter(`ChangeLog atualizada por: ${target.username}`, message.author.displayAvatarURL)
        .setTimestamp()
        .setThumbnail("http://www.workschedule.net/wp-content/uploads/2014/08/changelog1.png")
        message.channel.send("Quer que eu envie um @ everyone? Converse com um gerente responsável por isso.")
        message.channel.send({embed})

  }


module.exports.help = {
    name: "changelog"
}
