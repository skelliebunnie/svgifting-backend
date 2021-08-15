module.exports = function(sequelize, DataTypes) {
  const Animal = sequelize.define("Animal", {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		autoIncrement: true,
  		onDelete: "CASCADE"
  	},
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    purchasePrice: DataTypes.INTEGER,
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });
  Animal.associate = function(models) {
    Animal.belongsTo(models.Building)
    Animal.belongsTo(models.Building, { as: "unlockedWithBuilding" })

    Animal.hasMany(models.Item)
  }
  return Animal;
}