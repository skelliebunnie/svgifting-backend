module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    processingTime: DataTypes.INTEGER
  });

  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Item, { through: models.Ingredient });

    Recipe.belongsTo(models.Item, { allowNull: true });
  }
  return Recipe;
}