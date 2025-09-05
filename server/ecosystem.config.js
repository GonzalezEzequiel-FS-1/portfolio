module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: './server.js',
      env: {
        PORT: 3000,
        DBURL: 'mongodb+srv://djzekz_db_user:sGKvASiVoAaicvZu@contactdata.uscilbs.mongodb.net/?retryWrites=true&w=majority',
        EMAIL_HOST: 'smtp.gmail.com',
        EMAIL_PORT: 465,
        EMAIL_USER: 'djzekz@gmail.com',
        EMAIL_PASS: 'your_password_here'
      }
    }
  ]
}
