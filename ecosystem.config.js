module.exports = {
  apps: [
    {
      name: "app-academy-bot",
      script: "src/index.js",
      env: {
        NODE_ENV: "production",
        TOKEN: process.env.TOKEN,
        CLIENT_ID: process.env.CLIENT_ID,
        GUILD_ID: process.env.GUILD_ID,
        CHECK_IN_CHANNEL_ID: process.env.CHECK_IN_CHANNEL_ID,
        WEBHOOK_URL: process.env.WEBHOOK_URL,
      },
    },
  ],
};
