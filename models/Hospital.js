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
      timestamps: false,
    }
  );

  Hospital.associate = (models) => {
    Hospital.hasMany(models.MedicalStaff, { foreignKey: "hospital_id" });
    Hospital.belongsTo(models.ProvinceDistrictSubdistrict, {
      foreignKey: "pds_id",
    });
  };

  return Hospital;
};
