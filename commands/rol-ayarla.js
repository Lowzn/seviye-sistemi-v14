const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")

exports.run = async (client, message, args) => {  
let puan = args[0]
if (!puan) return message.reply("Lütfen bir puan gir!")
let rol = message.mentions.roles.first()
if (!rol) return message.reply("Lütfen bir rol etiketle!")
message.reply("Başarılı!")
db.set(`rol_${message.guild.id}`, {rol: rol.id, puan: puan})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "seviye-rol"
};
