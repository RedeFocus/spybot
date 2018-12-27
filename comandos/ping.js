const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    const ms = await message.channel.send("Algumas informações sobre o Ping...")
    ms.edit(`:signal_strength:  **| Ping:** ` + Math.round(bot.ping) + `ms`);
}
module.exports.help = {
    name: "ping"
}
