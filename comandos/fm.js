/* module.exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
    
      
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author},  **Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`${message.author},  **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
    message.delete().catch(O_o=>{});  
})

} catch (err) {
message.reply(' **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
}
} */
