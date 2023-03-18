const cron = require("node-cron");
const path = require("node:path");
const fs = require("node:fs");

const GUILD_ID = process.env.GUILD_ID;
const CHECK_IN_CHANNEL_ID = process.env.CHECK_IN_CHANNEL_ID;

function sendReminders(channel) {
  channel.send("check in ~");
}

function clearReminders(channel) {
  channel
    .bulkDelete(100)
    .then(() => {
      console.log(`All messages deleted from channel ${channel.name}.`);
    })
    .catch((error) => {
      console.error(
        `Error deleting messages from channel ${channel.name}: ${error}`
      );
    });
}

function scheduleAction(client) {
  const guild = client.guilds.cache.get(GUILD_ID);
  if (!guild) return console.log("no guild found");
  const channel = guild.channels.cache.get(CHECK_IN_CHANNEL_ID);
  if (!channel || channel.type !== 0) {
    return console.log("no channel found");
  }

  cron.schedule("54 7,12,14 * * *", () => sendReminders(channel), {
    timezone: "America/Los_Angeles",
  });

  cron.schedule("0 0 * * *", () => clearReminders(channel), {
    timezone: "America/Los_Angeles",
  });
}

function setCommands(commands) {
  const commandsPath = path.join(__dirname, "commands");
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
