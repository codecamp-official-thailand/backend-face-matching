const db = require("../models");

const getAllProvincesByRegionId = async (req, res) => {
  const regionId = req.query.region_id;

  const provinces = await db.Province.findAll({
    where: { region_id: regionId },
  });

  res.status(200).send(provinces);
};

module.exports = { getAllProvincesByRegionId };
