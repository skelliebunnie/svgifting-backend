module.exports = function(sequelize, DataTypes) {
  const Vegetable = sequelize.define("Vegetable", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });
  Vegetable.associate = function(models) {
    Vegetable.belongsToMany(models.SubRegion, { through: models.ItemAvailability, as: 'itemId' })

    Vegetable.belongsToMany(models.Villager, {
      through: models.Gift,
      foreignKey: 'vegetableId',
      as: 'itemId'
    });
  }
  return Vegetable;
}