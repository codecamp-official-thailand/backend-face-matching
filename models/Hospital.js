module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define(
    "Hospital",
    {
      hospital: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "hospitals",
    }
  );

  Hospital.associate = (models) => {
    Hospital.belongsTo(models.SubDistrict, { foreignKey: "sub_district_id" });
    Hospital.hasMany(models.MedicalStaff, { foreignKey: "hospital_id" });
  };

  return Hospital;
};
