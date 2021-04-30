module.exports = function(sequelize, DataTypes) {
  const Stat = sequelize.define("Stat", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  return Stat;
}