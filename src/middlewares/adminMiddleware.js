const BadRequestError = require("../errors/badRequest");

function validateUser(requiredFields) {
  return (req, res, next) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length > 0) {
      const details = missingFields.map((field) => ({
        field,
        message: `${field} field is required`,
      }));
      throw new BadRequestError(
        "Validation failed. Please provide all required fields.",
        details
      );
    }
    next();
  };
}

module.exports = {
  validateUser,
};
