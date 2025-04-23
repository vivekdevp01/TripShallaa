const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  ATLAS_URL: process.env.ATLAS_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
