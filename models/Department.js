module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      department: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "departments",
      timestamps: false,
    }
  );

  Department.associate = (models) => {
    Department.hasMany(models.MedicalStaff, { foreignKey: "department_id" });
  };

  return Department;
};
