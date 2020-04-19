module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define(
    "District",
    {
      district: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "districts",
    }
  );

  District.associate = (models) => {
    District.belongsTo(models.Province, { foreignKey: "province_id" });
    District.hasMany(models.SubDistrict, { foreignKey: "district_id" });
  };

  return District;
};
