const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const dotenv = require('dotenv').config({ path:__dirname+'/./../../.env' });
const { catchAsync } = require('../../utils');

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const port = process.env.PORT || 5000;
const redirect = encodeURIComponent(`http://localhost:${port}/routes/api/discord/callback`);

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});


/*router.get('/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  res.redirect(`/?token=${json.access_token}`);
}));*/

router.get('/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  res.redirect(`http://localhost:8080/?token=${json.access_token}`);
}));

router.post('/callback', catchAsync(async (req, res) => {
  const fetchDiscordUserInfo = await fetch('http://discordapp.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${json.access_token}`,
    }
  });
  const userInfo = await fetchDiscordUserInfo.json();

  yourUserId = `${userInfo.id}`;
  yourUserName = `${userInfo.username}`;

  // or simply...
  console.log(userInfo);
}));

module.exports = router;