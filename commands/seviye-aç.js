const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")

exports.run = async (client, message, args) => {
  let rol = db.fetch(`rol_${message.guild.id}`)
  if (!rol) return message.reply("Rol Ayarlanmamış!")
  let log = db.fetch(`log_${message.guild.id}`)
  if (!log) return message.reply("Log Ayarlanmamış!")
message.reply("Seviye Sistemi Başarıyla Aktifleştirildi.")
db.set(`seviyeacik_${message.guild.id}`, "acik")
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "seviye-aç"
};
