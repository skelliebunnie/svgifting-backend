module.exports = function(sequelize, DataTypes) {
  const SubRegion = sequelize.define("SubRegion", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  SubRegion.associate = function(models) {
    SubRegion.belongsTo(models.Region)
    // SubRegion.belongsToMany(models.Item, { through: models.ItemAvailability })
    SubRegion.hasMany(models.Location)
  }
  return SubRegion;
}