module.exports = function(sequelize, DataTypes) {
  const ItemAvailability = sequelize.define("ItemAvailability", {
    chance: DataTypes.FLOAT,
    time: DataTypes.STRING,
    weather: DataTypes.STRING
  });

  ItemAvailability.associate = function(models) {
    ItemAvailability.belongsTo(models.Location)
  }

  return ItemAvailability;
}