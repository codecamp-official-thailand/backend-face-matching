const db = require("../models");

const getHospitalByPdsId = async (req, res) => {
  const pds_id = req.query.pds_id;

  const hospital = await db.Hospital.findAll({
    where: { pds_id, isAccept: true },
  });

  res.status(200).send(hospital);
};

const getHospitalById = async (req, res) => {
  const hospitalId = Number(req.params.id);

  const targetHospital = await db.Hospital.findOne({
    where: { id: hospitalId },
  });

  res.status(200).send(targetHospital);
};

module.exports = { getHospitalById, getHospitalByPdsId };
