const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const config = require("../config");
const youtube = new YouTube("AIzaSyA3SCyMRpXpJCYCDRWq7wQeUTpHNiqfsYA");


exports.run = async (client, message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      

  youtube.searchVideos(args, 1)
      .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`Resultados de: ${args}`.split(',').join(' '), "https://cdn.discordapp.com/attachments/494189179383578624/503679656264990751/Sem_Titulo-1.png")
          .setImage(results[0].thumbnails.high.url)
          .setColor('#FF0000') 
          .addField('Nome do canal', results[0].channel.title, true)
          .addField('Titulo', results[0].title, true)
          .addField('Descrição', results[0].description)
          .addField("Publicado em", ` ${results[0].publishedAt}`)
          .addField('Link', `[Clique Aqui](https://youtu.be/${results[0].id})`);
          

          message.channel.send(ytEmbed);
      }).catch()
}