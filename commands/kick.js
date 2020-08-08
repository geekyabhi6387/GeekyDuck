module.exports = {
	name: 'kick',
	description: 'Kicks the mentioned user',
  usage: '@user',
  guildOnly: true,
  args: true,
  cooldown: 10,
	execute(message, args) {
   if (!message.member.hasPermission("KICK_MEMBERS")) return;
    var user = message.mentions.members.first();
    if (user.hasPermission("KICK_MEMBERS"))
      return message.reply("you cant kick a staff member");
    user.kick().then(user => {
      message.channel.send(
        ":wave: " + user.displayName + " has been successfully kicked "
      );
    });
	},
};