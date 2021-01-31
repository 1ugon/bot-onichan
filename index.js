const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const token = process.env.TOKEN;
const port = process.env.PORT;

const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});

app.listen(port);

const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.login(token);
