const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Ping! Shows the bot latency in ms.',
  cooldown: 5,
	execute(message, args) {
    message.channel.send('<a:GD_Loading:740655814271828070> Pinging...').then(sent => {
    sent.edit(`**Latency**\n> <a:GD_line:740859379036717077> Bot's Latency:- ${sent.createdTimestamp - message.createdTimestamp}ms\n> <a:GD_heartbeat:740656308881064008> API\'s Latency:- ${message.client.ws.ping}ms`);
    });
	},  
}; 
// ${sent.createdTimestamp - message.createdTimestamp}