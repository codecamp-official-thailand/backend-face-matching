const db = require("../models");

const createNewReserve = (req, res) => {
  console.log({ maker: req.user });

  res.status(200).send({ maker: req.user });
};

module.exports = { createNewReserve };
