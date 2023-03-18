const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} = require("discord.js");
const { TOKEN } = require("./config.json");
const { scheduleAction, setCommands, interactions } = require("./utils");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
setCommands(client.commands);

client.on(Events.InteractionCreate, (interaction) => {
  interactions(interaction, client);
});

client.on(Events.ClientReady, () => {
  scheduleAction(client);
});

client.login(TOKEN);
