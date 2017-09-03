const Discord = require('discord.js');
const self = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix

self.on('ready', () => {
        console.log("Logged in as " + self.user.tag + "!\nPrefix: " + prefix);
});

self.on('message', message => {
if (message.author.tag != self.user.tag){return;}

  if (message.content === (prefix + 'ping')) {
    message.channel.send('Pong! ' + Math.round(self.ping) + "ms");
  }
  if (message.content === (prefix + 'embed')) {
      let embed = new Discord.RichEmbed()
      //let embedOpts = message.content.substring(prefix.length + 6).slice("|")
.setTitle("Here's a title, premade")
.setDescription(message.content.substring((prefix.length + 6)))
     
        message.channel.send({embed})
}
        
});

self.login(config.token)