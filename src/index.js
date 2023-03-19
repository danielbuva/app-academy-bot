const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} = require("discord.js");
const { scheduleAction, setCommands, interactions } = require("./utils");
require("dotenv").config();

const TOKEN = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
setCommands(client.commands);

client.on(Events.InteractionCreate, (interaction) => {
  interactions(interaction, client);
});

client.on(Events.ClientReady, scheduleAction);

client.login(TOKEN);
