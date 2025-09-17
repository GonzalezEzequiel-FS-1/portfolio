// src/utils/emailSender.js
const nodemailer = require("nodemailer");
const dotEnv = require("dotenv");
dotEnv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: "snhx mmru tgte zenj",
  },
});

const sendEmailNotification = async (contactData) => {
  const { firstName, lastName, email, message, phone } = contactData;
  const sentData = { firstName, lastName, email, message};
  console.log(
    `SentData:${sentData}, ENVs:${process.env.EMAIL_PASS},${process.env.EMAIL_USER}`
  );
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
  } catch (err) {
    console.error("Error sending email: ", err.message);
  }
};

module.exports = sendEmailNotification;

