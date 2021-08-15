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
    residence: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    },
    hasForage: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: true
    },
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'standard'
    }
  });

  Location.associate = function(models) {
    // Locations may have many villagers as residents
    Location.hasMany(models.Npc, { as: "residents" });

    // Locations belong to one subregion (e.g. 1 Willow Lane can only be found in Pelican Town)
    Location.belongsTo(models.SubRegion)

    // Locations, like Seasons, "belong to" many items through the ItemAvailabilities table
    Location.belongsToMany(models.Item, { through: models.ItemAvailability })
  }

  return Location
}