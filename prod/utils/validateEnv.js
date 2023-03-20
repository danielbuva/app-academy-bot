"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWebhookUrl = exports.validateChannelId = exports.validateToken = exports.validateGuildId = exports.validateClientId = void 0;
const validateClientId = (CLIENT_ID) => {
    if (!CLIENT_ID) {
        throw new Error("Cannot find application id. Make sure CLIENT_ID is set in env");
    }
};
exports.validateClientId = validateClientId;
const validateGuildId = (GUILD_ID) => {
    if (!GUILD_ID) {
        throw new Error("Cannot find discord server. Make sure GUILD_ID is set in env");
    }
};
exports.validateGuildId = validateGuildId;
const validateToken = (TOKEN) => {
    if (!TOKEN) {
        throw new Error("Cannot find discord token. Make sure TOKEN is set in env");
    }
};
exports.validateToken = validateToken;
const validateChannelId = (CHANNEL_ID) => {
    if (!CHANNEL_ID) {
        throw new Error("Cannot find channel id. Make sure CHANNEL_ID is set in env");
    }
};
exports.validateChannelId = validateChannelId;
const validateWebhookUrl = (WEBHOOK_URL) => {
    if (!WEBHOOK_URL) {
        return new Error("Cannot find webhook url. Make sure WEBHOOK_URL is set in env");
    }
    return WEBHOOK_URL;
};
exports.validateWebhookUrl = validateWebhookUrl;
