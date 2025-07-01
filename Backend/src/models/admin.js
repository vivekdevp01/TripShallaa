const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: [4, "Username must be at least 4 characters long"],
    maxlength: [20, "Username must be less than 20 characters"],
    match: [
      /^[a-zA-Z0-9_.-]*$/,
      "Username can only contain letters, numbers, and _ . -",
    ],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  },

  role: {
    type: String,
    enum: ["admin", "superadmin"],
    default: "admin",
    required: [true, "Role is required"],
  },
});
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
