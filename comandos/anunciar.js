const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    message.delete()
    var ids = ["297104318794825728"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!!")
      
    
  
    let target = message.author
   if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissões!");
        const color = args[1]
        const text = args.slice(1).join(" ");
        if (text.length < 1) return message.channel.send("Você não colocou a mensagem que vai ser anunciada!");
        const embed = new Discord.RichEmbed()
        .setAuthor(`Postado por: ${target.username}`, message.author.displayAvatarURL)
        .setColor(11543845)
        .setTitle("📢 Anúncio:")
        .setDescription(text)
        .setFooter("-", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send("@everyone")
        message.channel.send({embed})

  }
};

module.exports.help = {
    name: "anunciar"
}
