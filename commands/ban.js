module.exports = {
	name: 'ban',
	description: 'Bans the mentioned user',
  usage: '@user',
  guildOnly: true,
  args: true,
  cooldown: 10,
	execute(message, args) {
   if (!message.member.hasPermission("BAN_MEMBERS")) return;
    var user = message.mentions.members.first();
    if (user.hasPermission("BAN_MEMBERS"))
      return message.reply("you cant ban a staff member");
    user.ban().then(user => {
      message.channel.send(
        ":wave: " + user.displayName + " has been successfully banned "
      );
    });
	},
};