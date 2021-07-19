module.exports = function(sequelize, DataTypes) {
  const Region = sequelize.define("Region", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    standardHours: DataTypes.STRING,
    closed: DataTypes.STRING,
    image: DataTypes.TEXT,
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'standard'
    }
  });

  Region.associate = function(models) {
    Region.hasMany(models.SubRegion);
  }

  return Region
}