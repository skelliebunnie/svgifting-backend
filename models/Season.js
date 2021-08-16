module.exports = function(sequelize, DataTypes) {
  const Season = sequelize.define("Season", {
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  });
  Season.associate = function(models) {
    Season.belongsToMany(models.Item, { through: models.ItemAvailability })
    Season.belongsToMany(models.Npc, { through: models.Event, constraints: false });
  }
  return Season;
}