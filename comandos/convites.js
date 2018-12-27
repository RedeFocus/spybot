const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      
    if(message.channel.type === 'dm') return;
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
        }
    });

    var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .addField("**• Membros Recrutados •**", `\`\`\`js\n(${invitesUses}) - Membros\`\`\``)
    .setColor("RANDOM")
    .setFooter(`${user.tag}`)
    .setTimestamp();

    message.channel.send(embed);
};

module.exports.config = {
    name: "div"
};