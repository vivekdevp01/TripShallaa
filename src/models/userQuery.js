const mongoose = require("mongoose");

const userQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[6-9]\d{9}$/.test(v),
      message: "Invalid Indian phone number",
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\S+@\S+\.\S+$/.test(v),
      message: "Invalid email format",
    },
  },
  campCode: { type: String, required: true },
  message: { type: String },
  paymentConfirmed: {
    type: Boolean,
    default: false,
  },
  numberOfPeople: { type: Number },
  packageName: { type: String },
  totalAmount: { type: Number },
  advanceReceived: { type: Number },
  balanceAmount: { type: Number },
  checkInDate: { type: Date },
  checkOutDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});
const UserQuery = mongoose.model("UserQuery", userQuerySchema);
module.exports = UserQuery;
