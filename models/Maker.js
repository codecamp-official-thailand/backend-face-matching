module.exports = (sequelize, DataTypes) => {
  const Maker = sequelize.define(
    "Maker",
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      nick_name: {
        type: DataTypes.STRING,
      },
      line_id: {
        type: DataTypes.STRING,
      },
      phone_no: {
        type: DataTypes.STRING(10),
      },
    },
    {
      tableName: "makers",
    }
  );

  Maker.associate = (models) => {
    Maker.belongsToMany(models.Request, {
      through: { model: models.Reserve, unique: false },
      foreignKey: "maker_id",
    });
    Maker.belongsTo(models.School, { foreignKey: "school_id" });
    Maker.belongsTo(models.GraduateLevel, { foreignKey: "graduate_level_id" });
    Maker.belongsTo(models.CareerType, { foreignKey: "career_type_id" });
    Maker.belongsTo(models.District, { foreignKey: "district_id" });
    Maker.belongsTo(models.Province, { foreignKey: "province_id" });
    Maker.belongsTo(models.Region, { foreignKey: "region_id" });
    Maker.belongsTo(models.SubDistrict, { foreignKey: "sub_district_id" });
  };

  return Maker;
};
