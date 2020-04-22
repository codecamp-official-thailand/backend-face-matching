const express = require("express");
const router = express.Router();
const requestController = require("../controllers/Request");

router.post("/", requestController.createNewRequest);

module.exports = router;
