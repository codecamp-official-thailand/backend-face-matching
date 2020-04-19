module.exports = (sequelize, DataTypes) => {
  const SubDistrict = sequelize.define(
    "SubDistrict",
    {
      sub_district: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "sub_districts",
    }
  );

  SubDistrict.associate = (models) => {
    SubDistrict.belongsTo(models.District, { foreignKey: "district_id" });
    SubDistrict.hasMany(models.Hospital, { foreignKey: "sub_district_id" });
  };

  return SubDistrict;
};
