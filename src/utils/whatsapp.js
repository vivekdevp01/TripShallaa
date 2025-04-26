const twilio = require("twilio");
const { ServerConfig } = require("../config");

const client = twilio(
  ServerConfig.TWILIO_ACCOUNT_SID,
  ServerConfig.TWILIO_AUTH_TOKEN
);

async function sendWhatsAppBookingConfirmation(toPhoneNumber, name, campCode) {
  try {
    if (!toPhoneNumber.startsWith("+")) {
      toPhoneNumber = `+91${toPhoneNumber}`; // <-- assuming most users are from India 🇮🇳
    }
    const message = await client.messages.create({
      from: "whatsapp:+14155238886", // <-- Twilio Sandbox WhatsApp number (fixed)
      to: `whatsapp:${toPhoneNumber}`, // <-- User's WhatsApp number, must be verified with join code
      body: `
      *🎉 Congratulations ${name}!* Your booking for camp/rafting adventure (Code: *${campCode}*) is *CONFIRMED!* 🏕️
      
      🌄 _Get ready for an unforgettable experience with nature, thrilling activities, and lots of fun!_
      
      📍 *Important:* Please keep your booking code safe. Show it upon arrival for a smooth check-in.
      
      🕐 If you have any questions, just reply to this message — we're here for you!
      
      ✨ *See you soon at Rafting & Camping Adventures!* 🚣‍♂️🔥
      `,
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
