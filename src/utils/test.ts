// import {
//   type Interaction,
//   WebhookClient,
//   Channel,
//   TextChannel,
// } from "discord.js";
// import dotenv from "dotenv";
// import cron from "node-cron";
// import { message } from "./embeds";
// import { CommandList } from "../commands/_CommandList";

// dotenv.config();
// const testUrl = process.env.TEST_URL;
// if (!testUrl) {
//   throw new Error("Cannot find testUrl. Make sure TEST_URL is set in env");
// }

// const testChannel = new WebhookClient({
//   url: testUrl,
// });

// async function testPing() {
//   await testChannel.send(message);
// }


// export const scheduleAction = (channel: Channel) => {
  // const timezone = "America/Los_Angeles";
  // const textChannel = 0;


  // if (channel.type === textChannel) {
  //   };
  // }

  // // my test function (runs every second)
  // cron.schedule("* * * * * *", () => testPing(), {
  //   timezone,
  // });
// };


// const red = "🍓 -> <@&1087368597510312047>\n";
// const orange = "🍊 -> <@&1087370130729746443>\n";
// const yellow = "🍌 -> <@&1087369114030448700>\n";
// const green = "🍏 -> <@&1087370538533539901>\n";
// const blue = "💎 -> <@&1087370623891808388>\n";
// const indigo = "🍇 -> <@&1087370731706400808>\n";
// const violet = "💜 -> <@&1087370853571907594>\n";
// const pink = "💗 -> <@&1087371629128056963>\n";
// const deferred = "💙 -> <@&1087371956157956317>\n";
// const rolesString =
//   red + orange + yellow + green + blue + indigo + violet + pink + deferred;
// // const embed = new EmbedBuilder().setTitle(rolesString).setColor(0xc00a0a);


// function sendMessage(channel: TextChannel) {
//   channel.send({ content: rolesString });
// }