const Discord = require('discord.js');
module.exports = {
	name: 'user-info',
	description: 'Shows the mentioned user\'s info...',
	usage: '@user',
	cooldown: 5,
	aliases: ['userinfo'],  
	execute(message, args) {
		let inline = true
    let resence = true
    const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = " Yes";
  } else {
    bot = " No";
  }

  let embed = new Discord.MessageEmbed()
      .setAuthor(target.username, target.displayAvatarURL({dynamic: true}))
      .setThumbnail(target.displayAvatarURL({dynamic: true}))
      .setColor('#F8AA2A')
      .addField("Full Username", `${member.user.tag}`, inline)
      .addField("ID", member.user.id, inline)
      .addField("Nickname", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "None"}`, true)
      .addField("Bot", `${bot}`,inline, true)
      .addField("Status", `${status[member.user.presence.status]}`, inline, true)
      .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Not playing"}`,inline, true)
      .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || " No Roles"}`, true)
	  .addField("Joined Discord At", member.user.createdAt)
	  .addField("Joined Server At", member.joinedAt)
      .setFooter(`Information about ${member.user.username}\n${message.guild.name} ➤ Command ran by ${message.author.username}`)
      .setTimestamp()

  message.channel.send(embed);
	},
};