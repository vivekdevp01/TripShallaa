const { StatusCodes } = require("http-status-codes");
const { QueryRepository } = require("../repositories");
const NotFoundError = require("../errors/notFound");
const BadRequestError = require("../errors/badRequest");
const { sendBookingConfirmation } = require("../utils/mailer");
const { sendWhatsAppBookingConfirmation } = require("../utils/whatsapp");

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
    const updated = await queryRepository.update(id, updateData);
    if (updated.paymentConfirmed === true) {
      await sendBookingConfirmation(user.email, user.name, user.campCode);
      await sendWhatsAppBookingConfirmation(
        user.phone,
        user.name,
        user.campCode
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
module.exports = {
  createQuery,
  findUserByNumber,
  updatePaymentStatus,
};
