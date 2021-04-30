module.exports = function(sequelize, DataTypes) {
  const Gem = sequelize.define("Gem", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });

  return Gem;
}