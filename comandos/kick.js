exports.run = async (client, message, args) => {
 
      
    
    //adicione o nome dos cargos que vc quer que use esse comando!
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando")
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
