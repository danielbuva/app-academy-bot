import {
  type Interaction,
  WebhookClient,
  Channel,
  TextChannel,
} from "discord.js";
import dotenv from "dotenv";
import cron from "node-cron";
import { message } from "./content";
import { CommandList } from "../commands/_CommandList";

dotenv.config();
const url = process.env.WEBHOOK_URL;
console.log("debug test WEBHOOK_URL: ", url);
if (!url) {
  throw new Error(
    "Cannot find webhook url. Make sure WEBHOOK_URL is set in env"
  );
}

const checkInChannel = new WebhookClient({
  url,
});

async function sendReminders() {
  await checkInChannel.send(message);
}

// const messageId = "1088269429659422822";

async function clearReminders(channel: TextChannel) {
  await channel.bulkDelete(69);
}

export const scheduleAction = (channel: Channel) => {
  const timezone = "America/Los_Angeles";
  const textChannel = 0;

  // Schedule reminders for Monday to Friday at 7:54:45am, 12:24:45pm, and 2:54:45pm PST
  cron.schedule("45 54 7,14 * * 1-5", () => sendReminders(), {
    timezone,
  });
  cron.schedule("45 24 12 * * 1-5", () => sendReminders(), {
    timezone,
  });

  // Clear reminders at midnight PST Monday to Friday
  if (channel.type === textChannel) {
    cron.schedule("0 0 * * 1-5", () => clearReminders(channel), {
      timezone,
    });
  }
};

export const onInteraction = async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;
  for (const Command of CommandList) {
    if (interaction.commandName === Command.data.name) {
      await Command.execute(interaction);
      break;
    }
  }
};
