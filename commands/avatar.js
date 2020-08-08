module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of you or your friends :)',
  cooldown: 5,
  aliases: ['ava', 'pfp', 'icon'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};