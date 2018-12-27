module.exports.run = async (bot, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
    if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
if (!args.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! Use m-denuncia (usuario) (motivo + prova)')
var canal = message.guild.channels.find("name", "denúncias");
if (!canal) return;
canal.send({embed:{
    'title':'Denuncias 📸',
    'description':args.slice(1).join(' '),
    'thumbnail':{
        'url':message.mentions.users.first().avatarURL
    }
    ,'footer':{
        'text':'Denúncia enviada por: ' + message.author.tag
    },
    'color':message.member.displayColor
}})
message.reply('📸 **| Obrigado por denunciar o usuário, iremos conferir o mais rápido possível sua denuncia!\n\n **Lembrete: Apenas ajudantes/superiores podem olhar a categoria de denúncias. ')
}


