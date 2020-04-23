const db = require("../models");

const createNewRequest = async (req, res) => {
  console.log(req.body);
  const subDistrictId = Number(req.body.sub_district_id);
  const requestAmount = Number(req.body.amount);
  const requestName = req.body.name;
  const requestLineId = req.body.line_id;

  let departmentId = Number(req.body.department_id);
  let hospitalId = Number(req.body.hospital_id);

  if (departmentId === -1) {
    const departmentName = req.body.department_name;
    const targetDepartment = await db.Department.findOne({
      where: { department: departmentName },
    });

    if (targetDepartment) {
      departmentId = Number(targetDepartment.id);
    } else {
      const newDepartment = await db.Department.create({
        department: departmentName,
        isAccept: false,
      });

      departmentId = Number(newDepartment.id);
    }
  }

  if (hospitalId === -1) {
    const hospitalName = req.body.hospital_name;
    const targetHospital = await db.Hospital.findOne({
      where: { hospital: hospitalName },
    });

    if (targetHospital) {
      hospitalId = Number(targetHospital.id);
    } else {
      const newHospital = await db.Hospital.create({
        hospital: hospitalName,
        pds_id: subDistrictId,
        isAccept: false,
      });

      hospitalId = Number(newHospital.id);
    }
  }

  const newMagicalStaff = await db.MedicalStaff.create({
    name: requestName,
    line_id: requestLineId,
    department_id: departmentId,
    hospital_id: hospitalId,
  });

  const newRequest = await db.Request.create({
    request_amount: requestAmount,
    reserve_amount: 0,
    delivered_amount: 0,
    isUrgent: false,
    medical_staff_id: newMagicalStaff.id,
  });

  res.status(201).send(newRequest);
};

const getAllRequest = async (req, res) => {
  const hospitalId = Number(req.query.hosiptalId);
  const pageSize = Number(req.query.page_size);
  const page = Number(req.query.page);

  if (hospitalId) {
    const requests = await db.Request.findAll({
      where: { hospital_id: hospitalId },
    });

    res.status(200).send(requests);
  } else {
    const offset = page - 1;

    const { count, rows } = await db.Request.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });

    res.status(200).send(rows);
  }
};

module.exports = { createNewRequest, getAllRequest };
