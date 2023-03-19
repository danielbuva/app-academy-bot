require("dotenv").config();
const cron = require("node-cron");
const path = require("node:path");
const fs = require("node:fs");
const { WebhookClient } = require("discord.js");
const WEBHOOK_URL = process.env.WEBHOOK_URL;

console.log("debug test WEBHOOK_URL:", process.env.WEBHOOK_URL);

// console.log(process.env.WEBHOOK_URL);
const webhook = new WebhookClient({
  url: WEBHOOK_URL,
  username: "AA bot",
});

function sendReminders() {
  webhook.send("check in ~");
}

function clearReminders() {
  webhook
    .fetchMessages({ limit: 100 })
    .then((messages) => {
      webhook.bulkDelete(messages);
      console.log(`All messages deleted from webhook ${webhook.name}.`);
    })
    .catch((error) => {
      console.error(
        `Error deleting messages from webhook ${webhook.name}: ${error}`
      );
    });
}

function scheduleAction() {
  const timezone = "America/Los_Angeles";

  // Schedule reminders for Monday to Friday at 7:54am, 12:24pm, and 2:54pm PST
  cron.schedule("54 7,12,14 * * 1-5", () => sendReminders(), {
    timezone,
  });

  // Clear reminders at midnight PST Monday to Friday
  cron.schedule("0 0 * * 1-5", () => clearReminders(), {
    timezone,
  });
}

function setCommands(commands) {
  const commandsPath = path.join(__dirname, "../commands");
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.set(command.data.name, command);
  }
}

async function interactions(interaction, client) {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
}

// my test function (runs every second)
// function scheduleAction(client) {
//   cron.schedule("* * * * * *", () => sendReminders(client), {
//     timezone: "America/Los_Angeles",
//   });
// }

module.exports = { scheduleAction, setCommands, interactions };
