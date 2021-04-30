module.exports = function(sequelize, DataTypes) {
  const Equipment = sequelize.define("Equipment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
  });
  Equipment.associate = function(models) {
    Equipment.hasMany(models.Item);
  }
  return Equipment;
}