exports.run = (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
    const Discord = require("discord.js");
    const moment = require('moment')
    moment.locale('pt-br')

    var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first() || client.users.get(args[0]);
    if (!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(`Erro! | ${message.author} Você não pode fazer isso, pois você não tem permissões. `)

    if (!membro) return message.reply("Mencione o membro que deseja dar warn!")
    if (!membro.bannable) return message.reply("Eu não posso punir este usuário, meu cargo é menor que o do usuário a ser punido!")

    message.delete()

    if (razao.length < 1) return message.reply("Adicione um motivo válido!")

    const warnembed = new Discord.RichEmbed()

        .setThumbnail(membro.user.avatarURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`O usuário foi punido(a) por desrespeitar as regras do servidor!`)
        .addField("🚫 | Punição", `Warn`)
        .addField("👮🏻 | Staff", `${message.author.username}`)
        .addField("🔧 | Id do staff", `${message.author.id}`)
        .addField("👤 | Usuário", `${membro}`)
        .addField("⚙️ | Id do usuário:", `${membro.id}`)
        .addField("📑 | Motivo", razao)
        .setTimestamp(new Date())
        message.channel.send(warnembed)
        let role = message.guild.roles.get('519590534185091072');
        membro.addRole(role.id);
}
