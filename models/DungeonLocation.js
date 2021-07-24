module.exports = function(sequelize, DataTypes) {
  const DungeonLocation = sequelize.define("DungeonLocation", {
    Floors: DataTypes.STRING
  });
  return DungeonLocation;
}