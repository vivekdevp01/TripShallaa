const express = require("express");

const router = express.Router();

const { QueryController } = require("../../controllers");

router.post("/", QueryController.createQuery);
router.get("/search", QueryController.findUserByNumber);
router.patch("/:id/payment", QueryController.updatePaymentStatus);
module.exports = router;
