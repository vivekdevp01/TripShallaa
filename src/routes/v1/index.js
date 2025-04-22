const express = require("express");
const { InfoController } = require("../../controllers");
const raftingRoutes = require("./raftingRoutes");
const router = express.Router();

router.get("/info", InfoController.info);
router.use("/rafting", raftingRoutes);

module.exports = router;
