module.exports = function(sequelize, DataTypes) {
  const Geode = sequelize.define("Geode", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });

  return Geode;
}