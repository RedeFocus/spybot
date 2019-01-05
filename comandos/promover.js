//comando addrole
//addrole @membro cargo
if(comando === "addrole") {
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");
const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!member) return;
const role = args.join(" ").slice(22);
if(!role) return;
const aRole = message.guild.roles.find(`name`, role);
if(!aRole) return;
if(member.roles.has(aRole.id)) return message.channel.send("O membro já tem esse cargo");
await(member.addRole(aRole.id));
message.channel.send(`${member} acabou de receber o cargo ${aRole.name}.`)
}
