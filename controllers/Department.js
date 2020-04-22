const db = require("../models");

const getDepartments = async (req, res) => {
  const departments = await db.Department.findAll();
  res.status(200).send(departments);
};

module.exports = { getDepartments };
