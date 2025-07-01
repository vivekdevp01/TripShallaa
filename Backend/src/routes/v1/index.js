const express = require("express");
const { InfoController } = require("../../controllers");
const raftingRoutes = require("./raftingRoutes");
const adminRoutes = require("./adminRoutes");
const campingRoutes = require("./campingRoutes");
const userRoutes = require("./userRoutes");
const placeRoutes = require("./placeRoutes");
const router = express.Router();

router.get("/info", InfoController.info);
router.use("/rafting", raftingRoutes);
router.use("/admin", adminRoutes);
router.use("/camping", campingRoutes);
router.use("/query", userRoutes);
router.use("/place", placeRoutes);

module.exports = router;
