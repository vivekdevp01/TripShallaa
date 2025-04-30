const mongoose = require("mongoose");
const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
    validate: {
      validator: (arr) =>
        arr.every((url) => /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i.test(url)),
      message: "Invalid image URL in gallery",
    },
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  category: {
    type: String, // e.g., 'Historical', 'Adventure', 'Cultural'
  },
  isActive: {
    type: Boolean,
    default: true, // To mark if the place is active or not
  },
});
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
