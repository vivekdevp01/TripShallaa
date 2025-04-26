const nodemailer = require("nodemailer");
const { ServerConfig } = require("../config");
// require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ServerConfig.GMAIL_USER, // 👉 Your Gmail
    pass: ServerConfig.GMAIL_PASS, // 👉 Your App Password
  },
});

async function sendBookingConfirmation(to, name, campCode) {
  try {
    const info = await transporter.sendMail({
      from: `"Rafting & Camping Adventures" <${process.env.GMAIL_USER}>`, // Sender name
      to: to, // Receiver email
      subject: "🎉 Booking Confirmed: Your Adventure Awaits!",
      text: `Hello ${name}, your booking for camp/rafting (${campCode}) is confirmed!`, // backup plain text
      html: `
      <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Booking Confirmed! ✅</h1>
          <p style="margin: 5px 0 0;">Your Adventure Awaits</p>
        </div>
    
        <div style="padding: 20px; color: #333;">
          <p>Hi <strong>${name}</strong>,</p>
          <p>We are thrilled to let you know that your booking has been confirmed! 🎉</p>
    
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #4CAF50;">Booking Details:</h3>
            <p><strong>Camp/Rafting Code:</strong> ${campCode}</p>
            <p><strong>Status:</strong> Confirmed ✅</p>
          </div>
    
          <p>Please keep this code handy when you arrive at the campsite. 🏕️</p>
          <p>For any queries, simply reply to this email or contact us via WhatsApp 📞.</p>
    
          <p style="margin-top: 30px;">We can't wait to host you and create unforgettable memories together!</p>
          <p style="margin-top: 10px;">See you soon! 🌟</p>
          
          <p style="font-size: 12px; color: #777; margin-top: 40px; border-top: 1px solid #e0e0e0; padding-top: 10px;">
            Rafting & Camping Adventures Team<br>
            (This is an automated message. Please do not share your booking code with anyone.)
          </p>
        </div>
      </div>
    `,
    });

    // console.log("Confirmation Email sent: " + info.response);
    console.log(`✅ Booking confirmation email sent successfully!
        Recipient: ${to}
        Name: ${name}
        Camp/Rafting Code: ${campCode}
        `);
  } catch (error) {
    console.error("Error sending confirmation email: ", error);
  }
}

module.exports = { sendBookingConfirmation };
// +14155238886
