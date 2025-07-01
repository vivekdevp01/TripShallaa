const Camping = require("../models/camping");

const generateCampCode = async () => {
  const lastCamping = await Camping.findOne().sort({ createdAt: -1 });

  let lastNumber = 0;
  if (lastCamping && lastCamping.code) {
    const match = lastCamping.code.match(/CAMP-(\d+)/);
    if (match) {
      lastNumber = parseInt(match[1], 10); // Extract numeric part
    }
  }

  const newCode = `CAMP-${String(lastNumber + 1).padStart(2, "0")}`;
  return newCode;
};

module.exports = generateCampCode;
