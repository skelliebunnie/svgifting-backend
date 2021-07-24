/**
 * INGREDIENTS
 * This is strictly for setting the required items and quantity for a recipe
 * recipes can be cooking or crafting
 * NOTE: There is an item type "Ingredient", but that is not a restriction on this table!
 */
module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  });
  
  return Ingredient;
}