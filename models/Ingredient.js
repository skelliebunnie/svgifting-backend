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