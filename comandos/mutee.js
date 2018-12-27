const Discord = require('discord.js')
const ms = require('ms')
let member = message.guild.member(message.mentions.users.first())

module.exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      

    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send({embed: {description: ":errado: **|** **404 ERROR:** ``Você não tem permissão para executar esse comando.``", color: 0x00F40101}});
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send({embed: {description: ":errado: **|**``Falta de conteúdo`` \n _.tempmute <@Usuário> <10s/10m/10h/10d> <razão>_", color: 0x00F40101}}); //se não tiver mencionado o usuario vamos retornar
    let reason = args.slice(2).join(" ");
    if (!reason) return message.channel.send({embed: {description: ":errado: **|**``Informe o motivo do mute.``", color: 0x00F40101}});
  
    let muterole = message.guild.roles.find(c => c.name == '🔕 | Space-Mute');
    let unrole = message.guild.roles.find(c => c.name == '🎈 | Registado')

    
    member.removeRole(unrole)

    //fim da criação do cargo
    let mutetime = args[1];
    if (!mutetime) return message.channel.send({embed: {description: ":errado: **|** ``Indique o tempo do mute.``", color: 0x00F40101}});
  
    message.delete().catch(O_o => {});
let muteembed = new Discord.RichEmbed()
        .setAuthor(`Server Mutes:`, message.author.displayAvatarURL)
        .setThumbnail(tomute.user.avatarURL)
        .setFooter(`🌌ƤΔŘΔŁŁ€Ł ŞƤΔĆ€🌌© Todos os direitos reservados.`)    
        .setColor('0x00F40101')
        .addField("Usuario Silenciado:", tomute)
        .addField("Silenciado por:", message.author)
        .addField("Tempo silenciado:", mutetime)
        .addField("Motivo", reason);
  
    let incidentschannel = message.guild.channels.find(c => c.name == '🔕┃punições') 
    if(!incidentschannel) return message.channel.send(`${message.author}, Crie um canal com o nome 🔕┃punições`);
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> Foi mutado com sucesso!`)
    await (tomute.addRole(muterole.id));
  
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`${message.author} o membro <@${tomute.id}> foi desmutado com sucesso!`);
    }, ms(mutetime));
  }
  
  member.addRole(unrole);