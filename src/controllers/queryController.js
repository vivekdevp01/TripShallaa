const { StatusCodes } = require("http-status-codes");
const { QueryService } = require("../services");

async function createQuery(req, res, next) {
  try {
    const { name, email, phone, message, campCode } = req.body;
    const response = await QueryService.createQuery({
      name,
      email,
      phone,
      message,
      campCode,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Query Created Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function findUserByNumber(req, res, next) {
  try {
    const phone = req.query.phone;
    const user = await QueryService.findUserByNumber(phone);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Query submitted successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
async function updatePaymentStatus(req, res, next) {
  try {
    const id = req.params.id;
    const updated = { paymentConfirmed: true };
    const result = await QueryService.updatePaymentStatus(id, updated);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Payment confirmed and confirmation email sent!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createQuery,
  findUserByNumber,
  updatePaymentStatus,
  // getAllQueries,
  // getQuery,
  // updateQuery,
  // deleteQuery,
  // toggleQueryVisibility,
  // getAllQueriesByCampCode,
  // getAllQueriesByStatus,
  // getAllQueriesByDateRange,
};
