module.exports = function(sequelize, DataTypes) {
  const DungeonLocation = sequelize.define("DungeonLocation", {
    Floors: DataTypes.STRING
  });
  DungeonLocation.associate = function(models) {
    DungeonLocation.hasMany(models.Item, { foreignKey: 'itemId' })
  }
  return DungeonLocation;
}