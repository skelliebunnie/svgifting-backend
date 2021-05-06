module.exports = function(sequelize, DataTypes) {
  const ItemAvailability = sequelize.define("ItemAvailability", {
    chance: DataTypes.FLOAT,
    time: DataTypes.TIME,
    weather: DataTypes.STRING
  });

  return ItemAvailability;
}