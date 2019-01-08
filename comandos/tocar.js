const Discord = require("discord.js");
exports.run = async (client, message, args) => {



if (msg.author.id === midi || msg.author.id === "519576639382749199" || msg.member.roles.some(r => ["STAFF"].includes(r.name))) {
    if (!msg.content.startsWith(config.prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(config.prefix.length)
    if (command === 'tocar') {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('Você deve estar em um canal para eu entrar e soltar o batidão!');
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(`Playlist: **${playlist.title}** foi adicionada com sucesso!`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send(`
__**Seleção de música:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Por favor, relate um número de 1 - 10 para tocar a sua música.
                `);
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('Valor inválido.');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send('Eu não obtive nenhum resultados.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
        }
    }
    if (command === 'fav') {
        var url = favsong[args[1]] ? favsong[args[1]].replace(/<(.+)>/g, '$1') : '';
        console.log(favsong[args[1]]);
        console.log(" ")
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('Você deve estar em um canal para eu entrar e soltar o batidão!');
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(`Playlist: **${playlist.title}** foi adicionada com sucesso!`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    msg.channel.send(`__**Seleção de música:**__\nPor favor, escolha entre 1-` + favsong.length + "\na músicas.");
                    var songarnum = 1;
                    while (songarnum < favsong.length) {
                        msg.channel.send(songarnum + ". " + favsong[songarnum])
                        songarnum++
                    }
                } catch (err) {
                    console.error(err);
                    return msg.channel.send('Eu não achei resultados.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === 'pular') {
        if (!msg.member.voiceChannel) return msg.channel.send('Você não está no canal!');
        if (!serverQueue) return msg.channel.send('Não tem nada tocando.');
        serverQueue.connection.dispatcher.end('Pulado com sucesso!');
        return undefined;
    } else if (command === 'parar') {
        if (!msg.member.voiceChannel) return msg.channel.send('Você não está no canal!');
        if (!serverQueue) return msg.channel.send('Não tem nada tocando.');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Música parada!');
        return undefined;
    } else if (command === 'volume' || command === 'vol') {
        if (!msg.member.voiceChannel) return msg.channel.send('Você não está no canal!');
        if (!serverQueue) return msg.channel.send('Não tem nada tocando.');
        if (!args[1]) return msg.channel.send(`Agora o volume é: **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        var volval;
        if (serverQueue.volume == 1) {
            volval = `?---- :loud_sound:?`
        }
        if (serverQueue.volume == 2) {
            volval = `-?--- :loud_sound:?`
        }
        if (serverQueue.volume == 3) {
            volval = `--?-- :loud_sound:?`
        }
        if (serverQueue.volume == 4) {
            volval = `---?- :loud_sound:?`
        }
        if (serverQueue.volume == 5) {
            volval = `----? :loud_sound:?`
        }
        msg.channel.send(volval)

    } else if (command === 'tocando') {
        if (!serverQueue) return msg.channel.send('Não tem nada tocando no momento.');
        return msg.channel.send(`Agora está tocando: **${serverQueue.songs[0].title}**`);
    } else if (command === 'queue') {
        if (!serverQueue) return msg.channel.send('There is nothing playing.');
        return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
    `);
    } else if (command === 'pausar') {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('Pausei a música.');
        }
        return msg.channel.send('Não tem nada tocando.');
    } else if (command === 'resume') {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Resumida!');
        }
        return msg.channel.send('Não tem nada tocando no momento.');
    }
    return undefined;
}

async function handleVideo(video, msg, voiceChannel, playlist = false) {
const serverQueue = queue.get(msg.guild.id);
console.log(chalk.red("MOOOOSIK"));
const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
};
if (!serverQueue) {
    const queueConstruct = {
        textChannel: msg.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
    };
    queue.set(msg.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
    try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
        console.error(`Eu não consigo entrar no canal de voz: ${error}`);
        queue.delete(msg.guild.id);
        return msg.channel.send(`Eu não consigo entrar no canal de voz: ${error}`);
    }
} else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return msg.channel.send(`? **${song.title}** foi adicionada!`);
}
return undefined;
}

function play(guild, song) {
const serverQueue = queue.get(guild.id);
if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
}
console.log(serverQueue.songs);
const dispatcher = serverQueue.connection.playStream(ytdl(song.url)).on('end', reason => {
    if (reason === 'Stream is not generating quickly enough.') console.log(reason);
    else console.log(reason);
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
}).on('error', error => console.error(error));
var volval;
if (serverQueue.volume == 1) {
    volval = `?---- :loud_sound:?`
}
if (serverQueue.volume == 2) {
    volval = `-?--- :loud_sound:?`
}
if (serverQueue.volume == 3) {
    volval = `--?-- :loud_sound:?`
}
if (serverQueue.volume == 4) {
    volval = `---?- :loud_sound:?`
}
if (serverQueue.volume == 5) {
    volval = `----? :loud_sound:?`
}
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
var NowEmbed = new Discord.RichEmbed().setColor("990033")
.addField(`=========================================================`,`
 **${song.title}**
:white_circle:------------------------------------------- 
  ${volval}       
========================================================= `)
.setFooter("Gostou?")
.addField("Meu dono:","PedroMzika")
serverQueue.textChannel.send(NowEmbed);


}
}
