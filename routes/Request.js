const express = require("express");
const router = express.Router();
const requestController = require("../controllers/Request");

router.post("/", requestController.createNewRequest);
router.get("/", requestController.getAllRequest);
router.get("/:id", requestController.getRequestById);

module.exports = router;
