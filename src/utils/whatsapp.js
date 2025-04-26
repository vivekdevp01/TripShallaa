const twilio = require("twilio");
const { ServerConfig } = require("../config");

const client = twilio(
  ServerConfig.TWILIO_ACCOUNT_SID,
  ServerConfig.TWILIO_AUTH_TOKEN
);

async function sendWhatsAppBookingConfirmation(
  email,
  name,
  toPhoneNumber,
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
    if (!toPhoneNumber.startsWith("+")) {
      toPhoneNumber = `+91${toPhoneNumber}`; // <-- assuming most users are from India 🇮🇳
    }
    const messageBody =
      `🎉 Hello ${name}!\n\n` +
      `✅ Your booking is CONFIRMED!\n\n` +
      `👤 Name: ${name}\n📞 Phone: ${toPhoneNumber}\n\n` +
      `🏕️ Camp Code: ${campCode}\n📦 Package: ${packageName}\n👥 No. of People: ${numberOfPeople}\n\n` +
      `💵 Total Amount: ₹${totalAmount}\n💰 Advance Paid: ₹${advanceReceived}\n💳 Balance Amount: ₹${balanceAmount}\n\n` +
      `🗓️ Check-In: ${checkInDate}\n🗓️ Check-Out: ${checkOutDate}\n\n` +
      `✨ Thank you for choosing us! Adventure awaits! ✨`;
    const message = await client.messages.create({
      from: "whatsapp:+14155238886", // <-- Twilio Sandbox WhatsApp number (fixed)
      to: `whatsapp:${toPhoneNumber}`, // <-- User's WhatsApp number, must be verified with join code
      body: messageBody,
    });

    console.log(`✅ WhatsApp message sent successfully! 
        To: ${toPhoneNumber}
        Name: ${name}
        Camp/Rafting Code: ${campCode}
        Message SID: ${message.sid}
    `);
  } catch (error) {
    console.error("❌ Error sending WhatsApp message:", error);
  }
}

module.exports = { sendWhatsAppBookingConfirmation };
