const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")

exports.run = async (client, message, args) => {
  let acikmi = db.fetch(`seviyeacik_${message.guild.id}`)
  if (!acikmi) return message.reply("Seviye Sistemi Devre Dışı!")
  let rol = db.fetch(`rol_${message.guild.id}`)
  if (!rol) return message.reply("Rol Ayarlanmamış!")
  let log = db.fetch(`log_${message.guild.id}`)
  if (!log) return message.reply("Log Ayarlanmamış!")
  let kullanıcı = message.mentions.users.first() || message.author.id
    const seviye = db.fetch(`point_${message.guild.id}${kullanıcı}`)
    const seviye2 = db.fetch(`pointss_${kullanıcı}`)
    if(!db.fetch(`points_${message.guild.id}`)) {
      const embed = new EmbedBuilder()
      .setTitle("Godzilla - Seviye Sistemi!")
      .setDescription(`Kullanıcı: <@${kullanıcı}>\n\nSeviye: ${seviye}`)
      .setColor("#ff0000")
      message.reply({embeds: [embed]})
      db.set(`points_${message.guild.id}`, [])
      db.push(`points_${message.guild.id}`, [message.author.id])
      db.set(`pointss_${message.author.id}`, true)
    } else if(!seviye2) {
      const embed = new EmbedBuilder()
      .setTitle("Godzilla - Seviye Sistemi!")
      .setDescription(`Kullanıcı: <@${kullanıcı}>\n\nSeviye: ${seviye}`)
      .setColor("#ff0000")
      message.reply({ embeds: [embed]})
      db.set(`pointss_${message.author.id}`, true)
      db.push(`points_${message.guild.id}`, [message.author.id])
  } else {
    const embed = new EmbedBuilder()
      .setTitle("Godzilla - Seviye Sistemi!")
      .setDescription(`Kullanıcı: <@${kullanıcı}>\n\nSeviye: ${seviye}`)
      .setColor("#ff0000")
    message.reply({ embeds: [embed] })
  }
  

};
exports.conf = {
  aliases: ["rank"]
};

exports.help = {
  name: "seviye"
};
