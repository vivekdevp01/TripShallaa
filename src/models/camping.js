const mongoose = require("mongoose");

const campingSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true, // Ensure camp codes are unique
  },
  title: {
    type: String,
    required: [true, "Camp title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true,
  },
  pricePerNight: {
    type: Number,
    required: [true, "Price per night is required"],
    min: [0, "Price must be a positive number"],
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: (arr) =>
        arr.every((url) => /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i.test(url)),
      message: "Invalid image URL in gallery",
    },
  },
  services: [
    {
      type: String, // like 'Bonfire', 'Meals', 'Tents', 'Toilets'
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Camping = mongoose.model("Camping", campingSchema);
module.exports = Camping;
