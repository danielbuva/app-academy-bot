import { type CommandInteraction, SlashCommandBuilder } from "discord.js";
import type { Command } from "../utils/interfaces";

export const aaa: Command = {
  data: new SlashCommandBuilder()
    .setName("aaa")
    .setDescription("Replies with aaaaaaaaaaaaaaaaa!"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply("aaaaaaaaaaaaaaaaa!");
  },
};
