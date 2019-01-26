const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!");

      
    message.delete()

        await message.author.createDM();
        message.author.send(`Olá, ${message.author.username}.
Diga a sua dúvida.`);
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let player = r.content;
            message.author.send("Confirme digitando: **SIM**.");
          

            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                let usuarioicone = message.author.displayAvatarURL;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Dúvida:** ${player}`)
                .setThumbnail(usuarioicone)
                let canal = client.channels.get("523912283383005186").send(reportplayer);
                message.author.send("✅ **Sua dúvida foi enviado com sucesso!**")
                
            })
        })
    }
