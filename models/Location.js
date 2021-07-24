module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    standardHours: {
    	type: DataTypes.STRING,
    	allowNull: true
    },
    closed: {
    	type: DataTypes.STRING,
    	allowNull: true
    },
    image: DataTypes.TEXT,
    residence: DataTypes.BOOLEAN,
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'standard'
    }
  });

  Location.associate = function(models) {
    // Locations may have many villagers as residents
    Location.hasMany(models.Npc, { as: "residents" });

    Location.belongsTo(models.SubRegion)
  }

  return Location
}