export const validateClientId = (CLIENT_ID?: string) => {
  if (!CLIENT_ID) {
    throw new Error(
      "Cannot find application id. Make sure CLIENT_ID is set in env"
    );
  }
};
export const validateGuildId = (GUILD_ID?: string) => {
  if (!GUILD_ID) {
    throw new Error(
      "Cannot find discord server. Make sure GUILD_ID is set in env"
    );
  }
};
export const validateToken = (TOKEN?: string) => {
  if (!TOKEN) {
    throw new Error(
      "Cannot find discord token. Make sure TOKEN is set in env"
    );
  }
};
export const validateChannelId = (CHANNEL_ID?: string) => {
  if (!CHANNEL_ID) {
    throw new Error(
      "Cannot find channel id. Make sure CHANNEL_ID is set in env"
    );
  }
};
export const validateWebhookUrl = (WEBHOOK_URL: string | undefined) => {
  if (!WEBHOOK_URL) {
    return new Error(
      "Cannot find webhook url. Make sure WEBHOOK_URL is set in env"
    );
  }
  return WEBHOOK_URL;
};
