module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define(
    "Request",
    {
      request_amount: {
        type: DataTypes.INTEGER,
      },
      reserve_amount: {
        type: DataTypes.INTEGER,
      },
      delivered_amount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "requests",
    }
  );

  Request.associate = (models) => {
    Request.belongsTo(models.MedicalStaff, { foreignKey: "medical_staff_id" });
    Request.belongsToMany(models.Maker, {
      through: { model: models.Reserve, unique: false },
      foreignKey: "request_id",
    });
  };

  return Request;
};
