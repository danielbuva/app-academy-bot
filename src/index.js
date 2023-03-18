const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

require("dotenv").config();
const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} = require("discord.js");
const { scheduleAction, setCommands, interactions } = require("./utils");

const TOKEN = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
setCommands(client.commands);

client.on(Events.InteractionCreate, (interaction) => {
  interactions(interaction, client);
});

client.on(Events.ClientReady, scheduleAction);

client.login(TOKEN);
