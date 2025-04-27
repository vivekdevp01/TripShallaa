const { StatusCodes } = require("http-status-codes");
const { QueryRepository } = require("../repositories");
const NotFoundError = require("../errors/notFound");
const BadRequestError = require("../errors/badRequest");
const { sendBookingConfirmation } = require("../utils/mailer");
const {
  sendWhatsAppBookingConfirmation,
  sendWhatsappRemainder,
} = require("../utils/whatsapp");

const queryRepository = new QueryRepository();

async function createQuery(data) {
  try {
    const response = await queryRepository.create(data);
    return response;
  } catch (error) {
    if (error.name === "ValidationError") {
      // error.errors is an object where each key is the name of an invalid field.
      const errors = Object.keys(error.errors).map((field) => ({
        field, // Field name (e.g., "password")
        message: error.errors[field].message, // Error message (e.g., "Path password (1234) is shorter than the minimum allowed length (8).")
      }));
      throw new BadRequestError(
        "Validation failed for the provided data. Please correct the errors and try again.",
        errors
      );
    }

    // If the error is not validation-related, log it properly and rethrow
    console.error("Error creating rafting route:", error);
    throw error;
  }
}
async function findUserByNumber(phone) {
  try {
    const user = await queryRepository.findUserByNumber(phone);
    if (!user) {
      throw new NotFoundError("no user found on this number", phone);
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function updatePaymentStatus(id, updateData) {
  try {
    const user = await queryRepository.get(id);

    if (!user) {
      throw new NotFoundError("User not found with given ID", id);
    }

    if (user.paymentConfirmed) {
      throw new BadRequestError("Booking already confirmed!");
    }
    if (updateData.totalAmount) {
      const totalAmount = updateData.totalAmount;
      const advancePercent = 0.2;
      updateData.advanceReceived = Math.round(totalAmount * advancePercent);
      updateData.balanceAmount = totalAmount - updateData.advanceReceived;
    }
    const updated = await queryRepository.update(id, updateData);
    if (updated.paymentConfirmed === true) {
      await sendBookingConfirmation(
        user.email,
        user.name,
        user.phone,
        user.campCode, // ✅ instead of campCode
        updated.numberOfPeople, // Check if this is populated correctly
        updated.packageName, // Check if this is populated correctly
        updated.totalAmount, // Check if this is populated correctly
        updated.advanceReceived, // Check if this is populated correctly
        updated.balanceAmount, // Check if this is populated correctly
        updated.checkInDate, // Check if this is populated correctly
        updated.checkOutDate // Check if this is populated correctly
      );

      await sendWhatsAppBookingConfirmation(
        user.email,
        user.name,
        user.phone,
        user.campCode, // ✅ instead of campCode
        updated.numberOfPeople, // Check if this is populated correctly
        updated.packageName, // Check if this is populated correctly
        updated.totalAmount, // Check if this is populated correctly
        updated.advanceReceived, // Check if this is populated correctly
        updated.balanceAmount, // Check if this is populated correctly
        updated.checkInDate, // Check if this is populated correctly
        updated.checkOutDate // Check if this is populated correctly
      );
    }
    return updated;
  } catch (error) {
    console.log(error);
    // if (error.statusCode == StatusCodes.NOT_FOUND) {
    //   throw new NotFoundError("Rafting", id);
    // }
    throw error;
  }
}
async function sendCheckInRemainder() {
  try {
    const now = new Date();
    const tomorrowStart = new Date(now);
    tomorrowStart.setDate(now.getDate() + 1);
    tomorrowStart.setHours(0, 0, 0, 0); // Set to start of tomorrow
    const tomorrowEnd = new Date(now);
    tomorrowEnd.setDate(now.getDate() + 1);
    tomorrowEnd.setHours(23, 59, 59, 999); // Set to end of tomorrow
    console.log("Tomorrow start:", tomorrowStart);
    console.log("Tomorrow end:", tomorrowEnd);
    const users = await queryRepository.findByCheckInRange(
      tomorrowStart,
      tomorrowEnd
    );
    for (const user of users) {
      await sendWhatsappRemainder(user.phone, user.name, user.checkInDate);
    }
  } catch (error) {
    console.log("Error sending check-in remainder:", error);
    throw error;
  }
}
// checkOutRemainder
// async function sendCheckOutRemainder(){
//     try{

//     }
//     catch(error){
//         console.log("Error sending check-out remainder:", error);
//         throw error;
//     }
// }
module.exports = {
  createQuery,
  findUserByNumber,
  updatePaymentStatus,
  sendCheckInRemainder,
};
