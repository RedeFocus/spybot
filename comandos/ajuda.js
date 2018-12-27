const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
  let bicon = bot.user.displayAvatarURL;
  message.channel.sendMessage({
    embed: {
      color: 363933,
    description: "📪" + message.author + " os comandos foram enviados em seu privado"
    }
  })

  let msg1 = new Discord.RichEmbed()
  .setColor('#36393e')
  .setTitle('📋**Help**📋')
  .setThumbnail(bicon)
  .setDescription("Veja todos os meus comandos e aprenda a me usar !")
  .addField('Administrativo' + ' - Clique 👮 para saber comandos de membros da equipe!', "Exemplo: p-kick" , true)
  .addField('Voltar', 'Para voltar clique ◀', true)
  .addField('Diversão', 'Clique no 🎲 para ver os comandos de diversão', true)
  .addField('Úteis', 'Clique no 🇺 para ver os comandos úteis.', true)
  .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
  
  let msg2 = new Discord.RichEmbed()
  .setTitle('👮**Administrador**👮')
  .setColor('#36393e')
  .setThumbnail(bicon)
  .addField('p-kick', `serve para você expulsar um membro do seu servidor.`)
  .addField('p-ban', `serve para você banir permanetemente ou não um membro do seu servidor.`)
  .addField('p-delete', `Apaga de duas até 100 mensagens.`)
  .addField('p-say', `serve para você falar pelo bot`)
  .addField('p-mi', `para ver informações de algum usuário.`)
  .addField('p-warn', `serve para você aletar um usuário`)
  .addField('p-unban', `Para utilizar esse comando, é necessário você usar: p-unban <id do usuário banido>.`)
  .addField('p-tempmute', `serve para você mutar um usuário, use **m-tempmute @usuário <tempo>**, porém você tem que tirar o cargo muted da pessoa. `)
  .addField('p-sugerir', `sugestão para membros da equipe`)

  let msg3 = new Discord.RichEmbed()
  .setTitle('🎲**Diversão**🎲')
  .setColor('#36393e')
  .setThumbnail(bicon)
  .addField('p-beijar', `Beija alguém`)
  .addField('p-ship', `Shipa duas pessoas`)
  .addField('p-bc', `Busca um vídeo no YouTube`)
  .addField('p-play', `faz o bot tocar uma música`)
  .addField('p-sair', `Faz o bot sair da canal de voz`)
  .addField('p-servericon', `Para você ver o ícone do servidor.`)


  let msg4 = new Discord.RichEmbed()
  .setTitle('🇺**Úteis**🇺')
  .setColor('#36393e')
  .setThumbnail(bicon)
  .addField('p-convite', `Cria um convite.`)
  .addField('p-convites', `Você vê seus convites.`)
  .addField('p-report', `Realiza uma denúncia contra alguém, sendo do Minecraft ou Discord.`)
  .addField('p-sugerir', `Realiza uma sugestão para o servidor.`)
  .addField('p-youtuber', `comando em atualização`)
  .addField('p-vips', `comando em atualização. `)

  message.author.send(msg1).then(msg=>{
  msg.react('◀').then(r=>{
  msg.react('👮')
  msg.react('🎲')
  msg.react('🇺') 
  })
  
  const help = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;  //colocar emoji diferente troca name por id
  const help2 = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id; //colocar emoji diferente troca name por id
  const help3 = (reaction, user) => reaction.emoji.name === '🎲' && user.id === message.author.id;  //colocar emoji diferente troca name por id
  const help4 = (reaction, user) => reaction.emoji.name === '🇺' && user.id === message.author.id;  //colocar emoji diferente troca name por id
  

  const helpp = msg.createReactionCollector(help, { time: 60000 });
  const helpp2 = msg.createReactionCollector(help2, { time: 60000 });
  const helpp3 = msg.createReactionCollector(help3, { time: 60000 });
  const helpp4 = msg.createReactionCollector(help4, { time: 60000 });
  

  helpp.on('collect', r => { 
      msg.edit(msg1);
      r.remove(message.author.id)
    })
  helpp2.on('collect', r2 => { 
      msg.edit(msg2);
      r2.remove(message.author.id)
    })
    helpp3.on('collect', r2 => { 
        msg.edit(msg3);
        r2.remove(message.author.id)
    })
    helpp4.on('collect', r2 => { 
      msg.edit(msg4);
      r2.remove(message.author.id)
    })
  })
}
