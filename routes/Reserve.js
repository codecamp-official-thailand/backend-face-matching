const express = require("express");
const router = express.Router();
const reserveController = require("../controllers/Reserve");
const passport = require("passport");

const auth = passport.authenticate("jwt", { session: false });

router.post("/", auth, reserveController.createNewReserve);

module.exports = router;
