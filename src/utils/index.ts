import {
  type Interaction,
  WebhookClient,
  EmbedBuilder,
  Channel,
  TextChannel,
} from "discord.js";
import dotenv from "dotenv";
import cron from "node-cron";
import { embeds } from "./embeds";
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

const embedContent = embeds[0];
const embed = new EmbedBuilder().setTitle(embedContent).setColor(0x00ffff);

async function sendReminders() {
  await checkInChannel.send({ embeds: [embed] });
}

async function clearReminders(channel: TextChannel) {
  await channel.bulkDelete(69);
}

export const scheduleAction = (channel: Channel) => {
  const timezone = "America/Los_Angeles";
  const textChannel = 0;

  // Schedule reminders for Monday to Friday at 7:54am, 12:24pm, and 2:54pm PST
  cron.schedule("54 7,12,14 * * 1-5", () => sendReminders(), {
    timezone,
  });

  // Clear reminders at midnight PST Monday to Friday
  if (channel.type === textChannel) {
    cron.schedule("0 0 * * 1-5", () => clearReminders(channel), {
      timezone,
    });
  }
};

// // my test function (runs every second)
// const timezone = "America/Los_Angeles";
// export const scheduleAction = () => {
//   cron.schedule("* * * * * *", () => sendReminders(), {
//     timezone,
//   });
// };

export const onInteraction = async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;
  for (const Command of CommandList) {
    if (interaction.commandName === Command.data.name) {
      await Command.execute(interaction);
      break;
    }
  }
};
