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
  };

  return Maker;
};
