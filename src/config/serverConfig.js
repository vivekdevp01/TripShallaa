const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  ATLAS_URL: process.env.ATLAS_URL,
};
