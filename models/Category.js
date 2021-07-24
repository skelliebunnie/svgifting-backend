/**
 * TYPE, FOR ITEMS
 * Artisan Good, Animal Product, Ingredient, [Monster] Loot, Artifact, Cooked Dish, 
 * Crop (fruit), Crop (vegetable), Crop (seed), Crop (flower), Fish, Fruit Tree Fruit,
 * Gem, Geode, Mineral, Resource, Trash
 * Forage e.g. mushrooms, but also anything classified strictly as Forage in game such as Daffodils and Dandelions; Leeks, Salmonberry, Blackberry, etc. are considered vegetable & fruit [respectively] even though they are only found by foraging [or spring seeds, for Leeks]
 * "other" e.g. ginger (a root, so technically a "vegetable", and can be pickled, but grants no XP from harvesting and can only be foraged [with a hoe]), and other "special" items such as dragon tooth and gold pumpkin. Pearl is also "other" even though it's technically a gem b/c it's classified as a "special item" in game.
 */

module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Category.associate = function(models) {
    Category.hasMany(models.Item)
  }
  return Category;
}