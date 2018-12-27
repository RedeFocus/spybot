const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
        moment.locale('pt-BR');
        let usuario = message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author);
        let cor = 0x4286f4; /*aqui você pode colocar a cor que quiser*/
        let administrador;
        if(usuario.hasPermission("ADMINISTRATOR") === true) administrador = "sim";
        if(usuario.hasPermission("ADMINISTRATOR") === false) administrador = "não";
        let statusmebro;
        if(usuario.presence.status === "dnd") statusmebro = "Não pertubar";
        if(usuario.presence.status === "idle") statusmebro = "Ausente";
        if(usuario.presence.status === "stream") statusmebro = "Transmitindo";
        if(usuario.presence.status === "offline") statusmebro = "Invisível";
        if(usuario.presence.status === "online") statusmebro = "Disponível";
        let userinfoembed = new Discord.RichEmbed()
          .setThumbnail(usuario.user.displayAvatarURL)
          .setTimestamp()
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .addField(`ℹInformações principais:`, `:white_small_square:Usuário: ${usuario.user.tag}\n:white_small_square:Id: ${usuario.user.id}\n:white_small_square:Status: ${statusmebro}\n:white_small_square:Jogando: ${usuario.user.presence.game ? usuario.user.presence.game.name : 'jogando nada no momento'}\n:white_small_square:Criada em: ${moment(usuario.createdAt).format("LLLL")}`)
          .addField(`📑Informações no servidor:`, `:white_small_square:Apelido: ${usuario.user.nickname || "sem apelido"}\n:white_small_square:Entrou: ${moment(usuario.user.joinedAt).format('LLLL')}\n:white_small_square:Cargos: ${usuario.roles.size || "sem cargos"}\n:white_small_square:Administrador: ${administrador}`)
          .setAuthor(`Informações do usuário: ${usuario.user.username}`, usuario.user.displayAvatarURL)
          .setColor(cor)
            message.channel.send(userinfoembed);
};