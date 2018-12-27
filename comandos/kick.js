exports.run = async (client, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!");
var userid = ["385928513536131084"]
if (!message.author.id === userid) return message.reply("Vc n tem o ID para usar esse comando")
      
    
    //adicione o nome dos cargos que vc quer que use esse comando!
        if(!message.member.roles.some(r=>['name', "Administrador", "STAFF", "DONO", "Dono(a) do grupo", "DEV", "Administrador"].includes(r.name)) )
          return message.reply("desculpe, você não tem permissão para usar isto!  ");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply(" |ERR| Mencione um membro válido deste servidor");
        if(!member.kickable) 
          return message.reply("|ERR| Eu não posso expulsar este usuário! Ele pode ter um cargo mais alto ou eu não tenho permissões de expulsar, solução: https://i.imgur.com/SBAEu25.gif");
        
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Nenhuma razão fornecida";
        
        await member.kick(reason)
          .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
        message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo: ${reason}`);
    
      }