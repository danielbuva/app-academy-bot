import {
  type CommandInteraction,
  type GuildMember,
  SlashCommandBuilder,
} from "discord.js";
import type { Command } from "../utils/interfaces";

export const user: Command = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),
  async execute(interaction: CommandInteraction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    const dateJoined = (interaction.member as GuildMember).joinedAt;
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${dateJoined}.`
    );
  },
};
