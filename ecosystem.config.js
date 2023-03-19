module.exports = {
  apps: [
    {
      name: "app-academy-bot",
      script: "src/index.js",
      env: {
        NODE_ENV: "production",
        WEBHOOK_ID: "your-webhook-id",
        WEBHOOK_TOKEN: "your-webhook-token",
        // ... other environment variables
      },
    },
  ],
};
