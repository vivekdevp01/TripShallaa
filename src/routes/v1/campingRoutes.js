const express = require("express");
const { CampingController } = require("../../controllers");
// const { multipleCampingUpload } = require("../../utils/image");
const { setUploadFolder, multipleUpload } = require("../../utils/image");

const { AuthMiddleware } = require("../../middlewares");
const router = express.Router();
router.use(AuthMiddleware.isLoggedIn);
router.post(
  "/",
  setUploadFolder("camping"),
  multipleUpload,
  CampingController.createCamping
);
router.delete("/:id", CampingController.deleteCamping);
router.get("/:id", CampingController.getCamping);
router.put("/:id", CampingController.updateCamping);
router.get("/", CampingController.getCampings);
module.exports = router;
