const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/Hospital");

router.get("/", hospitalController.getHospitalById);

module.exports = router;
