const express = require("express");
const { InfoController } = require("../../controllers");
const raftingRoutes = require("./raftingRoutes");
const adminRoutes = require("./adminRoutes");
const router = express.Router();

router.get("/info", InfoController.info);
router.use("/rafting", raftingRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
