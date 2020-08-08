module.exports = {
	name: 'say',
	description: 'Says what you want the bot to say ;)',
	execute(message, args) {
   var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You need ADMINISTRATOR permissions to use this command");
    }  
    else if (!text)
      return message.reply(
        "the command failed you must type .say and then the text"
      );
    message.channel.send(text);
	},
}