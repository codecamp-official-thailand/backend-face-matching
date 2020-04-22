const express = require("express");
const router = express.Router();
const provinceController = require("../controllers/Province");

router.get("/", provinceController.getAllProvincesByRegionId);

module.exports = router;
