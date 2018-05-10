const Discord = require('discord.js');
const client = new Discord.Client();

client.on('Ready', () => {
    console.log('im ready boi');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('ping');
    }
});

client.login(process.env.BOT_TOKEN);
