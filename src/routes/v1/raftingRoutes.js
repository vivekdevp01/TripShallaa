const express = require("express");
const { RaftingController } = require("../../controllers");
const { AuthMiddleware } = require("../../middlewares");
// const { multipleUpload } = require("../../utils/image");
const { setUploadFolder, multipleUpload } = require("../../utils/image");

const upload = require("../../utils/image");
const router = express.Router();
router.use(AuthMiddleware.isLoggedIn);
router.post(
  "/",
  AuthMiddleware.isLoggedIn,
  setUploadFolder("rafting"),
  multipleUpload,
  RaftingController.createRafting
);
router.delete("/:id", RaftingController.deleteRafting);
router.put("/:id", RaftingController.updateRafting);
router.patch("/:id/visibility", RaftingController.toggleRaftingVisibility);
router.get("/:id", RaftingController.getRafting);
router.get("/", RaftingController.getAllRaftings);
module.exports = router;
