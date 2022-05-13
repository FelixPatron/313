const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message) => {
   let c = message.mentions.channels.first()
   if (!c) return message.channel.send('L�tfen bir kanal etiketleyiniz.')
   db.set(`guvenlik${message.guild.id}`, c.id)
   message.channel.send(':inbox_tray: | G�venlik kanal� ba�ar�yla ayarland�.')
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g�venlik'],
  permLevel: 3
};

module.exports.help = {
  name: 'g�venlik',
  description: 'guvenlik',
  usage: 'g�venlik-ayarla'
};