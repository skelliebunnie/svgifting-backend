module.exports = function(sequelize, DataTypes) {
  const Animal = sequelize.define("Animal", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    purchasePrice: DataTypes.INTEGER
  });
  Animal.associate = function(models) {
    Animal.belongsTo(models.Building)
  }
  return Animal;
}