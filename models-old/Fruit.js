module.exports = function(sequelize, DataTypes) {
  const Fruit = sequelize.define("Fruit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });
  Fruit.associate = function(models) {
    Fruit.belongsToMany(models.SubRegion, { through: models.ItemAvailability, as: 'itemId' })
    Fruit.belongsToMany(models.Villager, {
      through: models.Gift
    });
  }
  return Fruit;
}