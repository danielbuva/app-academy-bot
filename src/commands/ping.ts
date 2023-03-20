import { type CommandInteraction, SlashCommandBuilder } from "discord.js";
import type { Command } from "../utils/interfaces";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply("Pong!");
  },
};
