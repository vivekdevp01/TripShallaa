const express = require("express");
const { PlaceController } = require("../../controllers");
const { AuthMiddleware } = require("../../middlewares");
const { setUploadFolder, multipleUpload } = require("../../utils/image");

const router = express.Router();
router.use(AuthMiddleware.isLoggedIn);
router.post(
  "/",
  setUploadFolder("places"),
  multipleUpload,
  PlaceController.createPlace
);
router.delete("/:id", PlaceController.deletePlace);
router.get("/:id", PlaceController.getPlaceId);
router.put("/:id", PlaceController.updatePlace);
router.patch("/:id/visibility", PlaceController.togglePlaceVisibility);
router.get("/", PlaceController.getAllPlaces);

module.exports = router;
