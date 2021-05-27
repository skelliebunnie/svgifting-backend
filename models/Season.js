module.exports = function(sequelize, DataTypes) {
  const Season = sequelize.define("Season", {
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  });
  Season.associate = function(models) {
    Season.belongsToMany(models.Item, { through: models.ItemAvailability })
    Season.belongsToMany(models.Villager, { through: models.Event });
  }
  return Season;
}