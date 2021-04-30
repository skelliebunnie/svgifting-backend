module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER,
    edible: DataTypes.BOOLEAN,
    difficulty: DataTypes.INTEGER,
    behavior: DataTypes.STRING,
    size: DataTypes.STRING,
    initialGrowthTime: DataTypes.INTEGER,
    reproductionTime: DataTypes.INTEGER,
    processingTime: DataTypes.INTEGER
  });
  Item.associate = function(models) {
    Item.belongsToMany(models.Villager, { through: models.Gift })

    Item.belongsToMany(models.Recipe, { through: models.Ingredient })
    
    Item.belongsTo(models.Equipment, { allowNull: true })
    Item.belongsTo(models.Animal, { allowNull: true })
  }
  return Item;
}