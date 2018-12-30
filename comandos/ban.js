const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado? Digite /ticket.");
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return null;
  
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("mencione algum usuário para que ele possa ser punido.");
    if (!message.guild.member(user).bannable) return message.reply("o usuário mencionado possui um cargo superior ao meu.");
    if (message.author.id === user.id) return message.reply("eu não posso te banir, haha.")
    message.reply(`você está prestes a banir ${user}. Para confirmar a operação, clique no emoji abaixo.`).then(msg => {
        msg.react('✅')
        const sure = (reaction, user) => reaction.emoji.name === `✅` && user.id === message.author.id;
        const r1 = msg.createReactionCollector(sure, {time: 60000 });

    r1.on('collect', r => {
        r.remove(message.author.id);
        message.guild.member(user).ban(reason);
        message.reply(`você acabou de banir ${user} (\`${user.tag}\` - \`${user.id}\`).`);
        
        let modlog = bot.channels.find("name", "punicoes");
        if (!modlog) return message.reply("Como um canal para arquivar punições não existe neste servidor, esta punição não será salva.");
        let memberavatar = user.avatarURL
        var embed = new Discord.RichEmbed()
        .setTitle("**Um membro foi banido...**")
        .setColor("#36393e")
        .setTimestamp()
        .addField("Autor da punição: ", message.author.username, true)
        .addField("Usuário punido: " , user.username, true)
        .addField("ID: " , user.id, true)
        .setThumbnail(memberavatar)
        .addField("Provas: " , reason, true);
        modlog.send(embed)
    });
    })

module.exports.help = {
    name: "banir"
}
