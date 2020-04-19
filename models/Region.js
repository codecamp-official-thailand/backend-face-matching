module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      region: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "regions",
    }
  );

  Region.associate = (models) => {
    Region.hasMany(models.Province, { foreignKey: "region_id" });
    Region.hasMany(models.Maker, { foreignKey: "region_id" });
  };

  return Region;
};
