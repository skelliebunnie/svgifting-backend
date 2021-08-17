module.exports = function(sequelize, DataTypes) {
  const Season = sequelize.define("Season", {
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  });
  Season.associate = function(models) {
    Season.belongsToMany(models.Item, { through: models.ItemAvailability }, { allowNull: true, constraints: false })
    Season.belongsToMany(models.Npc, { through: models.Event }, { allowNull: true, constraints: false});
  }
  return Season;
}