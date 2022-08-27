const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")

exports.run = async (client, message, args) => {
  message.reply("yakında :) discord.gg/altyapilar")

};
exports.conf = {
  aliases: ["top"]
};

exports.help = {
  name: "seviye-sıralama"
};
