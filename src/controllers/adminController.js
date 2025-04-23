const { StatusCodes } = require("http-status-codes");
const { AdminService } = require("../services");

async function createAdmin(req, res, next) {
  try {
    const admin = await AdminService.createAdmin({
      username: req.body.username,
      password: req.body.password,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Admin Created Successfully",
      data: admin,
    });
  } catch (error) {
    next(error);
  }
}
async function signIn(req, res, next) {
  try {
    const user = await AdminService.signIn({
      username: req.body.username,
      password: req.body.password,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "User signed in successfully",
      token: user.token, // Send token in response body
      data: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createAdmin,
  signIn,
};
