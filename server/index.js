const express = require("express");
const path = require('path');
const dotenv = require('dotenv').config({ path:__dirname+'/.env' });
const Discord = require('discord.js');
const client = new Discord.Client();

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));

// Routes
app.use('/routes/api/discord', require('./routes/api/discord'));

// Error Catcher
app.use((err, req, res, next) => {
    switch (err.message) {
      case 'NoCodeProvided':
        return res.status(400).send({
          status: 'ERROR',
          error: err.message,
        });
      default:
        return res.status(500).send({
          status: 'ERROR',
          error: err.message,
        });
    }
});


//Discordbot
var roles = require('./discordbot/commands/roles.js');

client.login(process.env.TOKEN);

client.on('ready', ()=> {
  console.log('The bot is online!');
});



client.on("message", async message => {
  const prefix = "_";

  if(message.content.toLowerCase().startsWith(prefix + "addrole")){
    var args = message.content.toLowerCase().split(" ");
    console.log(args);
    if(args[1] === 'pnp')
    {
      roles.addUserRole('pnp', message);
      message.channel.send('Role successfully addded!');
    }
    else if(args[1] === 'exiles'){
      roles.addUserRole('exiles', message);
      message.channel.send('Role successfully addded!');
    }
  } 
});

