const db = require("../models");

const createNewRequest = (req, res) => {
  console.log(req.body);
  res.status(200).send();
};

module.exports = { createNewRequest };
