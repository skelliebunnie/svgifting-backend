module.exports = function(sequelize, DataTypes) {
  const Building = sequelize.define("Building", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    materials: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materialQuantities: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });
  Building.associate = function(models) {
    Building.hasMany(models.Animal)
  }
  return Building;
}