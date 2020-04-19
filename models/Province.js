module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define(
    "Province",
    {
      province: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "provinces",
    }
  );

  Province.associate = (models) => {
    Province.belongsTo(models.Region, { foreignKey: "region_id" });
    Province.hasMany(models.District, { foreignKey: "province_id" });
  };

  return Province;
};
