// emailService.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'krushnabiradar1998@gmail.com',
    pass: process.env.PASSWORD
  }
});

exports.sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "krushnabiradar1998@gmail.com",
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
