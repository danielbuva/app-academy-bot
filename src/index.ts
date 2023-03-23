import dotenv from "dotenv";
import { Client } from "discord.js";
import { ReactionRole } from "discordjs-reaction-role";
import { IntentOptions, PartialsOptions } from "./config/Options";
import { onInteraction, scheduleAction } from "./utils";
import { roleReactionConfig } from "./utils/content";

dotenv.config();

const TOKEN = process.env.TOKEN;
const checkInChannelId = process.env.CHECK_IN_CHANNEL_ID;
console.log("debug test TOKEN: ", process.env.TOKEN);
if (!TOKEN)
  throw new Error(
    "Cannot find discord token. Make sure TOKEN is set in env"
  );
console.log(
  "debug test CHECK_IN_CHANNEL_ID: ",
  process.env.CHECK_IN_CHANNEL_ID
);
if (!checkInChannelId)
  throw new Error(
    "Cannot find check in channel id. Make sure CHECK_IN_CHANNEL_ID is set in env"
  );

(async () => {
  const aaBot = new Client({
    partials: PartialsOptions,
    intents: IntentOptions,
  });

  const roleManager = new ReactionRole(aaBot, roleReactionConfig);

  aaBot.on("ready", () => {
    console.log("~ bot is online ~");
    const channel = aaBot.channels.cache.get("1088256933997334528");
    if (!channel) return console.log("no channel found");
    return scheduleAction(channel);
  });

  aaBot.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await aaBot.login(TOKEN);
})();
