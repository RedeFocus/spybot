const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!args[0]){
        message.reply('especifique o nome do jogador desejado.')

        return;
    };
    var player = message.content.split(" ").slice(1).join(" ");
    var url = `https://minotar.net/armor/body/` + player + `/100.png`
    let embedskin = new Discord.RichEmbed()
    .addField("Skin de " + player + ":", `Para baixar, [clique aqui.](https://minotar.net/armor/body/${player}/100.png)`)
    .setImage(url)
    message.channel.send(embedskin);
}