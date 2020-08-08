const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { prefix } = require('../config.json')
const client = new Discord.Client();
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Displays this message",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("GeekyDuck Help")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=654713977103712291&permissions=8&scope=bot")
      .setDescription("List of all commands")
      .setColor("#F8AA2A")
      .setFooter("© Developers: Ducky#6060, GeekyAbhi#2020");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};