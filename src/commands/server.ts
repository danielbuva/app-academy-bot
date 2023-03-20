import { type CommandInteraction, SlashCommandBuilder } from "discord.js";
import type { Command } from "../utils/interfaces";

export const server: Command = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction: CommandInteraction) {
    // interaction.guild is the object representing the Guild in which the command was run
    if (!interaction.guild) {
      await interaction.reply("Cannot find server");
    } else {
      const serverName = interaction.guild.name;
      const memberCount = interaction.guild.memberCount;
      await interaction.reply(
        `This server is ${serverName} and has ${memberCount} members.`
      );
    }
  },
};
