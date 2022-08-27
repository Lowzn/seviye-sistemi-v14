const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")

exports.run = async (client, message, args) => {
let log = message.mentions.channels.first()
if (!log) return message.reply("Lütfen bir kanal etiketle!")
message.reply("Log Kanalı Başarıyla <#"+ log+ "> Olarak Ayarlandı!")
db.set(`log_${message.guild.id}`, log.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "seviye-log"
};
