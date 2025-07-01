const mongoose = require("mongoose");
const Admin = require("../models/admin");

await mongoose.connect(
  "mongodb+srv://vivekpundir33:0hoNpq2fpRN1NneL@cluster0.lxankb0.mongodb.net/"
);

async function createSuperadmin() {
  try {
    await Admin.create({
      username: "Vivek01",
      password: "Abcd@1234", // plain password here
      role: "superadmin",
    });
    console.log("Superadmin created");
  } catch (error) {
    console.error("Error creating superadmin:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

createSuperadmin();
