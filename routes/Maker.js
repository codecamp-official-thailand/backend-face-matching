const express = require("express");
const router = express.Router();
const makerController = require("../controllers/Maker");

router.post("/register", makerController.registerMaker);
router.post("/login", makerController.loginMaker);

module.exports = router;
