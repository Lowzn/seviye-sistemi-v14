const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});


module.exports = client;

require("./events/messageCreate.js")
require("./events/ready.js")

client.on("messageCreate", async (message) => {
    const db2 = require("croxydb")
    const prefix = config.prefix
    if (message.author.bot) return;
    db2.add(`point_${message.guild.id}${message.author.id}`, 5)
 
})
client.on("messageCreate", message => {
const db = require("croxydb")
    let varmi = db.fetch(`rol_${message.guild.id}`) || {puan: "300000000000", rol: "burayı hiç bir türlü ellemeyin."}
    let puan = varmi.puan
    let rol = varmi.rol 
    let seviye = db.fetch(`point_${message.guild.id}${message.author.id}`)
    let log = db.fetch(`log_${message.guild.id}`)
       if (seviye == puan) {
message.channel.send("Başarıyla **"+ puan + "** Puanına Ulaştın ve Belirtilen Rol Sana Verildi.")
message.guild.members.cache.get(message.author.id).roles.add(rol)
client.channels.cache.get(log).send("<@"+message.author + "> Adlı Kullanıcı " + puan + " Puanına Ulaştı Ve <@&"+rol+"> Rolü Verildi.")
db.add(`point_${message.guild.id}${message.author.id}`, 5)     
}
    
    })

client.login(config.token)