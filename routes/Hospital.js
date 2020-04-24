const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/Hospital");

router.get("/", hospitalController.getHospitalByPdsId);
router.get("/:id", hospitalController.getHospitalById);

module.exports = router;
