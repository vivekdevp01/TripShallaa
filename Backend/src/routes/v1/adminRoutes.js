const express = require("express");

const router = express.Router();

const { AdminController } = require("../../controllers");
const { AdminMiddleware, AuthMiddleware } = require("../../middlewares");

router.post(
  "/add",
  AuthMiddleware.isLoggedIn,
  AuthMiddleware.requireSuperadmin,
  AdminController.createAdmin
);
router.post(
  "/signin",
  AdminMiddleware.validateUser(["username", "password"]),
  AdminController.signIn
);
module.exports = router;
