const mongoose = require("mongoose");

const raftingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Rafting title is required"],
      trim: true,
      minlength: [5, "Title must be at least 5 characters"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    pricePerPerson: {
      type: Number,
      required: [true, "Price is required"],
      min: [100, "Minimum price must be ₹100"],
    },
    durationInKm: {
      type: Number,
      required: [true, "Distance in kilometers is required"],
      min: [10, "Minimum distance should be 10 km"],
    },
    durationInHours: {
      type: Number,
      required: [true, "Duration in hours is required"],
      min: [1, "Minimum duration should be 1 hours"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [2000, "Description should be under 2000 characters"],
    },
    highlights: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "At least one highlight is required",
      },
    },
    includes: {
      type: [String],
      default: [],
      example: ["Raft & safety gear", "Professional guide", "Pickup & drop"],
    },
    whatToExpect: {
      type: [String],
      default: [],
    },
    meetingPoint: {
      type: String,
      required: [true, "Meeting point is required"],
    },
    pickupDetails: {
      type: String,
      default: "",
    },
    cancellationPolicy: {
      type: String,
      default: "Non-refundable",
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
    availableDates: {
      type: [Date],
      required: [true, "Available dates must be specified"],
      validate: {
        validator: (v) => v.length > 0,
        message: "Add at least one available date",
      },
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
      trim: true,
      lowercase: true,
    },
    groupDiscountAvailable: {
      type: Boolean,
      default: false,
    },
    minimumAge: {
      type: Number,
      required: [true, "Minimum age is required"],
      min: [5, "Minimum age must be at least 5"],
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const Rafting = mongoose.model("Rafting", raftingSchema);
module.exports = Rafting;
