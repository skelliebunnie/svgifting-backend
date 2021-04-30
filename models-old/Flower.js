module.exports = function(sequelize, DataTypes) {
  const Flower = sequelize.define("Flower", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });
  Flower.associate = function(models) {
    Flower.belongsToMany(models.SubRegion, { through: models.ItemAvailability, as: 'itemId' })
  }
  return Flower;
}