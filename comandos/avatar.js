const discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = member.displayAvatarURL;
    if (avatar.endsWith(".gif")) {
        avatar = `${member.displayAvatarURL}?size=2048`
    }
    message.channel.send({
        embed: {
            title: `${member.tag}`,
            description: `[Link Direto](${avatar})`,
            image: {
                url: avatar
            }
        }
    })
}