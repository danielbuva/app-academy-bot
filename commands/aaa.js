const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aaa")
    .setDescription("Replies with aaaaaaaaaaaaaaaaa!"),
  async execute(interaction) {
    await interaction.reply("aaaaaaaaaaaaaaaaa!");
  },
};
