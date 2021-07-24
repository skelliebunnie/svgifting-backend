module.exports = function(sequelize, DataTypes) {
  const Equipment = sequelize.define("Equipment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });

  return Equipment;
}