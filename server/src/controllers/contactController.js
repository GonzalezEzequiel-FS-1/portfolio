const Contact = require("../db/models/Contact");
const sendEmailNotification = require("../utils/emailSender");

const createContact = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message || !phone) {
    return res
      .status(400)
      .json({ success: false, error: "Contact Data not provided" });
  }

  try {
    const savedContactData = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Send email asynchronously (fire-and-forget)
    sendEmailNotification(savedContactData);

    return res
      .status(201)
      .json({ success: true, contactData: savedContactData });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

const getContact = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: "No email provided.",
    });
  }

  try {
    const messages = await Contact.find({ email: email.trim() }).sort({
      createdAt: -1,
    });

    if (!messages || messages.length === 0) {
      return res.status(404).json({
        success: false,
        error: "No messages found for this email.",
      });
    }

    return res.status(200).json({
      success: true,
      messages,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};

module.exports = {
  createContact,
  getContact,
};
