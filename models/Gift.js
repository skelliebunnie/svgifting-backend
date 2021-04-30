module.exports = function(sequelize, DataTypes) {
  const Gift = sequelize.define("Gift", {
    preference: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Gift;
}