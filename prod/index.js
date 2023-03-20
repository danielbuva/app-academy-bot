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
const dotenv_1 = __importDefault(require("dotenv"));
const discord_js_1 = require("discord.js");
const IntentOptions_1 = require("./config/IntentOptions");
const utils_1 = require("./utils");
dotenv_1.default.config();
const TOKEN = process.env.TOKEN;
const checkInChannelId = process.env.CHECK_IN_CHANNEL_ID;
console.log("debug test TOKEN: ", process.env.TOKEN);
if (!TOKEN)
    throw new Error("Cannot find discord token. Make sure TOKEN is set in env");
console.log("debug test CHECK_IN_CHANNEL_ID: ", process.env.CHECK_IN_CHANNEL_ID);
if (!checkInChannelId)
    throw new Error("Cannot find check in channel id. Make sure CHECK_IN_CHANNEL_ID is set in env");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const aaBot = new discord_js_1.Client({ intents: IntentOptions_1.IntentOptions });
    aaBot.on("ready", () => {
        const channel = aaBot.channels.cache.get(checkInChannelId);
        if (!channel)
            return console.log("no channel found");
        return (0, utils_1.scheduleAction)(channel);
    });
    aaBot.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, utils_1.onInteraction)(interaction); }));
    yield aaBot.login(TOKEN);
}))();
