const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")

exports.run = async (client, message, args) => {
message.reply("Seviye Sistemi Başarıyla Devre Dışı Edildi.")
db.set(`seviyekapat_${message.guild.id}`, true)
db.delete(`seviyeacik_${message.guild.id}`)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "seviye-kapat"
};
