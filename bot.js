const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`ok je suis ready`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

//this is definitely de wae 
client.login(process.env.BOT_TOKEN);
