const express = require("express");
const { RaftingController } = require("../../controllers");
const router = express.Router();

router.post("/", RaftingController.createRafting);
router.delete("/:id", RaftingController.deleteRafting);
router.put("/:id", RaftingController.updateRafting);
router.patch("/:id/visibility", RaftingController.toggleRaftingVisibility);
router.get("/:id", RaftingController.getRafting);
router.get("/", RaftingController.getAllRaftings);
module.exports = router;
