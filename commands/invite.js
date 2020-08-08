module.exports = {
	name: 'invite',
    description: 'Give the link to invite the bot you your server',
    cooldown: 2,
	execute(message, args) {
        message.reply("**Invite me to your server**:-\nhttps://discord.com/api/oauth2/authorize?client_id=736564845075365938&permissions=8&scope=bot")
	},
};