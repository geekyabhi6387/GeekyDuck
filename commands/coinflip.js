module.exports = {
	name: 'coinflip',
	description: 'Flips a coin for Heads or Tails!',
  aliases: ['flip'],
	execute(message, args) {
    var choises = ["heads", "tails"];
    var output = Math.floor(Math.random() * choises.length);
    message.reply(`You got **${choises[output]}!**`); 
	},
};