import { GatewayIntentsString, Partials } from "discord.js";

export const IntentOptions: GatewayIntentsString[] = [
  "Guilds",
  "GuildMessages",
  "GuildMessageReactions",
];

export const PartialsOptions: Partials[] = [
  Partials.Message,
  Partials.Reaction,
];
