const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/Department");

router.get("/", departmentController.getDepartments);

module.exports = router;
