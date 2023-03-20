"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onInteraction = exports.scheduleAction = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const node_cron_1 = __importDefault(require("node-cron"));
const embeds_1 = require("./embeds");
const _CommandList_1 = require("../commands/_CommandList");
dotenv_1.default.config();
const url = process.env.WEBHOOK_URL;
console.log("debug test WEBHOOK_URL: ", url);
if (!url) {
    throw new Error("Cannot find webhook url. Make sure WEBHOOK_URL is set in env");
}
const checkInChannel = new discord_js_1.WebhookClient({
    url,
});
const embedContent = embeds_1.embeds[0];
const embed = new discord_js_1.EmbedBuilder().setTitle(embedContent).setColor(0x00ffff);
function sendReminders() {
    return __awaiter(this, void 0, void 0, function* () {
        yield checkInChannel.send({ embeds: [embed] });
    });
}
function clearReminders(channel) {
    return __awaiter(this, void 0, void 0, function* () {
        yield channel.bulkDelete(69);
    });
}
const scheduleAction = (channel) => {
    const timezone = "America/Los_Angeles";
    const textChannel = 0;
    // Schedule reminders for Monday to Friday at 7:54am, 12:24pm, and 2:54pm PST
    node_cron_1.default.schedule("54 7,12,14 * * 1-5", () => sendReminders(), {
        timezone,
    });
    // Clear reminders at midnight PST Monday to Friday
    if (channel.type === textChannel) {
        node_cron_1.default.schedule("0 0 * * 1-5", () => clearReminders(channel), {
            timezone,
        });
    }
};
exports.scheduleAction = scheduleAction;
// // my test function (runs every second)
// const timezone = "America/Los_Angeles";
// export const scheduleAction = () => {
//   cron.schedule("* * * * * *", () => sendReminders(), {
//     timezone,
//   });
// };
const onInteraction = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isCommand())
        return;
    for (const Command of _CommandList_1.CommandList) {
        if (interaction.commandName === Command.data.name) {
            yield Command.execute(interaction);
            break;
        }
    }
});
exports.onInteraction = onInteraction;
