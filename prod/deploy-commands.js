"use strict";
// import dotenv from "dotenv";
// import { type ApplicationCommand, REST, Routes } from "discord.js";
// import fs from "node:fs";
// import path from "node:path";
// dotenv.config();
// const CLIENT_ID = process.env.CLIENT_ID;
// const GUILD_ID = process.env.GUILD_ID;
// const TOKEN = process.env.TOKEN;
// console.log("debug test CLIENT_ID", process.env.CLIENT_ID);
// console.log("debug test GUILDt_ID", process.env.GUILD_ID);
// if (!CLIENT_ID)
//   throw new Error(
//     "Cannot find application id. Make sure CLIENT_ID is set in env"
//   );
// if (!TOKEN)
//   throw new Error(
//     "Cannot find discord token. Make sure TOKEN is set in env"
//   );
// if (!GUILD_ID)
//   throw new Error(
//     "Cannot find discord server. Make sure GUILD_ID is set in env"
//   );
// const commands = [];
// // Grab all the command files from the commands directory you created earlier
// const commandsPath = path.join(__dirname, "commands");
// const commandFiles = fs
//   .readdirSync(commandsPath)
//   .filter((file) => file.endsWith(".js"));
// // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);
//   commands.push(command.data.toJSON());
// }
// // Construct and prepare an instance of the REST module
// const rest = new REST({ version: "10" }).setToken(TOKEN);
// // and deploy your commands!
// (async () => {
//   try {
//     console.log(
//       `Started refreshing ${commands.length} application (/) commands.`
//     );
//     // The put method is used to fully refresh all commands in the guild with the current set
//     const data = (await rest.put(
//       Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
//       { body: commands }
//     )) as ApplicationCommand[];
//     console.log(
//       `Successfully reloaded ${data.length} application (/) commands.`
//     );
//   } catch (error) {
//     // And of course, make sure you catch and log any errors!
//     console.error(error);
//   }
// })();
