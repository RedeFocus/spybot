/* const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!");
if(message.author.bot) return
 
     
    message.delete()
 
        await message.author.createDM();
        message.author.send(`Olá, ${message.author.username}.
Você acabou de solicitar o envio de uma sugestão sua! Digite sua sugestão, dando o máximo de detalhes possíveis.`);
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let player = r.content;
            message.author.send("Qual o destino? ``Discord`` ou ``Servidor``?");
            
            var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
            tazer1.on('collect', r=> {
                let destino = r.content;
                message.author.send("Está tudo certo? Responda esta mensagem caso queira mesmo enviar sua sugestão.");

            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                let usuarioicone = message.author.displayAvatarURL;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Sugestão:** ${player}
**Destino:** ${destino}`)
                .setThumbnail(usuarioicone);
                let canal = client.channels.get("524785282357264395").send(reportplayer)
                })
            })
        })
    } */