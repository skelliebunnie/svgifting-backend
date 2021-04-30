module.exports = function(sequelize, DataTypes) {
  const Forage = sequelize.define("Forage", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });
  Forage.associate = function(models) {
    Forage.belongsToMany(models.SubRegion, { through: models.ItemAvailability, as: 'itemId' })
  }
  return Forage;
}