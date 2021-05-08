module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    standardHours: DataTypes.STRING,
    closed: DataTypes.STRING,
    image: DataTypes.TEXT
  });

  Location.associate = function(models) {
    // Locations may have many villagers as residents
    Location.hasMany(models.Villager, { as: "residents" });

    Location.belongsTo(models.SubRegion)
  }

  return Location
}