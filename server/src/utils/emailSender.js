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
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmailNotification = async (contactData) => {
  const { firstName, lastName, email, message, phone } = contactData;
  const sentData = { firstName, lastName, email, message, phone };
  if ((!firstName || !lastName || !email || !message, !phone)) {
    console.error(
      `Failed to receive expected data. Name: ${firstName} ${lastName}, phone ${phone}, Email ${email}, message ${message}`
    );
    return {
      error: `Failed to receive expected data. Name: ${firstName} ${lastName}, phone ${phone}, Email ${email}, message ${message}`,
    };
  }
  console.log(
    `SentData:${JSON.stringify(sentData)}, ENVs:${process.env.EMAIL_PASSWORD},${
      process.env.EMAIL_USER
    }, ${process.env.EMAIL_HOST}, ${process.env.EMAIL_PORT}`
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
