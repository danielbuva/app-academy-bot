import { ReactionRoleConfiguration } from "discordjs-reaction-role";
import { EmbedBuilder } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const everyone = process.env.TEST_URL;
console.log("debug test EVERYONE_ID: ", everyone);
if (!everyone) {
  throw new Error(
    "Cannot find everyone id. Make sure EVERYONE_ID is set in env"
  );
}
const checkInLink = "\nhttps://progress.appacademy.io/me";

const embeds = [
  `check in                                 ☜(ﾟヮﾟ☜)${checkInLink}`,
  ` ヽ༼ຈل͜ຈ༽_•︻ ┻̿═━一 ----o check in${checkInLink}`,
];

const content = `__||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||<@${everyone}>__`;

const embedContent = embeds[0];
const embed = new EmbedBuilder().setTitle(embedContent).setColor(0xc00a0a);
export const message = { content, embeds: [embed] };

const messageId = "1088269429659422822";
export const roleReactionConfig: ReactionRoleConfiguration[] = [
  { messageId, reaction: "🍓", roleId: "1087368597510312047" },
  { messageId, reaction: "🍊", roleId: "1087370130729746443" },
  { messageId, reaction: "🍌", roleId: "1087369114030448700" },
  { messageId, reaction: "🍏", roleId: "1087370538533539901" },
  { messageId, reaction: "💎", roleId: "1087370623891808388" },
  { messageId, reaction: "🍇", roleId: "1087370731706400808" },
  { messageId, reaction: "💜", roleId: "1087370853571907594" },
  { messageId, reaction: "💗", roleId: "1087371629128056963" },
  { messageId, reaction: "💙", roleId: "1087371956157956317" },
];
