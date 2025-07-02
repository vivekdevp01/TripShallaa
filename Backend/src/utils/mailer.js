const nodemailer = require("nodemailer");
const { ServerConfig } = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ServerConfig.GMAIL_USER,
    pass: ServerConfig.GMAIL_PASS,
  },
});

async function sendBookingConfirmation(
  email,
  name,
  phone,
  campCode,
  numberOfPeople,
  packageName,
  totalAmount,
  advanceReceived,
  balanceAmount,
  checkInDate,
  checkOutDate
) {
  try {
    const info = await transporter.sendMail({
      from: `"Tripshalla" <${ServerConfig.GMAIL_USER}>`,
      to: email,
      subject: "🎉 Booking Confirmed: Your Adventure Details Inside!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #FF5722; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Booking Confirmed ✅</h1>
            <p style="margin: 5px 0 0;">Your Adventure Awaits!</p>
          </div>
  
          <div style="padding: 20px; color: #333;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>We are thrilled to confirm your booking! Here are your details:</p>
  
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #FF5722;">Booking Summary:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Package:</strong> ${packageName}</p>
              <p><strong>Camp Code:</strong> ${campCode}</p>
              <p><strong>Number of People:</strong> ${numberOfPeople}</p>
              <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
              <p><strong>Advance Paid:</strong> ₹${advanceReceived}</p>
              <p><strong>Balance to Pay:</strong> ₹${balanceAmount}</p>
              <p><strong>Check-In:</strong> ${checkInDate}</p>
              <p><strong>Check-Out:</strong> ${checkOutDate}</p>
            </div>
  
            <p>✅ Please save this email for your reference.</p>
            <p>🏕️ Get ready for an amazing experience with us!</p>
  
            <p style="margin-top: 30px;">See you soon! 🌟</p>
            <p style="font-size: 12px; color: #777; margin-top: 40px; border-top: 1px solid #e0e0e0; padding-top: 10px;">
              Tripshalla Team<br>
              (This is an automated message. Please do not share your booking details with anyone.)
            </p>
          </div>
        </div>
      `,
    });

    console.log(`✅ Booking confirmation email sent successfully!
          Recipient: ${email}
          Name: ${name}
      `);
  } catch (error) {
    console.error("Error sending confirmation email: ", error);
  }
}

module.exports = { sendBookingConfirmation };
