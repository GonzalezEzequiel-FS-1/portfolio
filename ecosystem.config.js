module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "./server.js",
      env: {
        PORT: 3000,
        DBURL:process.env.DBURL,
        EMAIL_HOST: process.env.EMAIL_HOST,
        EMAIL_PORT: process.env.EMAIL_PORT,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASSWORD
      },
    },
  ],
};
