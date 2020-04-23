const db = require("../models");

const getHospitalById = async (req, res) => {
  const pds_id = req.query.pds_id;

  const hospital = await db.Hospital.findAll({
    where: { pds_id, isAccept: true },
  });

  res.status(200).send(hospital);
};

module.exports = { getHospitalById };
