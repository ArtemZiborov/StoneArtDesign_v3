/* eslint-env node */
// This file is used to configure ESLint for the Firebase Functions folder
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

exports.sendEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@gmail.com",
    subject: "New Contact Form Submission",
    html: `<p>Name: ${data.name}</p>
           <p>Email: ${data.email}</p>
           <p>Telephone: ${data.telephone}</p>
           <p>Message: ${data.message}</p>
           <p>File: <a href="${data.fileURL}">Download</a></p>`,
  };

  return transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return { success: false, error: error.toString() };
    }
    return { success: true };
  });
});
