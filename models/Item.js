module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    processingTime: DataTypes.INTEGER,
    color: DataTypes.STRING,
    qiColorQuest: DataTypes.BOOLEAN,
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });
  Item.associate = function(models) {
    Item.belongsToMany(models.Npc, { through: models.Gift })

    Item.belongsToMany(models.Recipe, { through: models.Ingredient })

    Item.belongsToMany(models.Season, { through: models.ItemAvailability }, { allowNull: true })
  }
  return Item;
}