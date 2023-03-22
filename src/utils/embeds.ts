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
  `check in                                 ☜(ﾟヮﾟ☜)${checkInLink}<@917335943692812289>`,
  ` ヽ༼ຈل͜ຈ༽_•︻ ┻̿═━一 ----o check in${checkInLink}`,
];

const content = `__||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||<@${everyone}>__`;

const embedContent = embeds[0];
const embed = new EmbedBuilder().setTitle(embedContent).setColor(0x00ffff);
export const message = { content, embeds: [embed] };
