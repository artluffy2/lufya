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

//avatar
bot.on('message', message => {
  if (message.content === 'lufya quel est mon avatar ?') {
    message.reply(message.author.avatarURL);
    message.reply('voila ton avatar')
  }
});

//bon j'essay de mettre les trucs de l'ancien bot
//commandes qui servent à rien
bot.on('message', message => {
  if (message.content === 'pong') {
    message.reply(' ... ')
    message.reply(' tu te fous de moi ? ')
  }
})

bot.on('message', message => {
  if (message.content === 'leviosa') {
    message.reply('wingardium leviosaannnn')
    message.reply('https://i.ytimg.com/vi/kWWNFMwOPj8/maxresdefault.jpg')
  }
})

bot.on('message', message => {
  if (message.content === 'OMAE WA MOU SHINDEIRU') {
    message.reply(' https://media.discordapp.net/attachments/331051504347906055/371591438665777162/hqdefault_1.jpg ')
    message.reply(' NANI ?! ')
  }
})

bot.on('message', message => {
  if (message.content === 'lufya help') {
    message.reply('regarde en message privé :wink:')
    message.author.sendMessage("yen a pas casse toi, bonne chance")
  }
})
