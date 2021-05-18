module.exports = function(sequelize, DataTypes) {
  const Villager = sequelize.define("Villager", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    // ID of Season
    // birthdaySeason: DataTypes.INTEGER,
    birthdayDate: DataTypes.INTEGER,
    // ID of Season
    // checkupSeason: DataTypes.INTEGER,
    checkupDate: DataTypes.INTEGER,
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  });

  Villager.associate = function(models) {
    // gifts table is separate from the item tables
    Villager.belongsToMany(models.Item, { through: models.Gift });

    Villager.hasMany(models.Item, { as: 'Gift' })
    
    // Villager.belongsTo(models.Season, { foreignKey: 'birthdaySeasonId', as: 'birthdaySeason' })
    // Villager.belongsTo(models.Season, { foreignKey: 'checkupSeasonId', as: 'checkupSeason' })

    Villager.belongsTo(models.Location);

    // family members
    Villager.belongsToMany(models.Villager, {
      as: "family",
      through: "villagerFamily",
    });

    // friends
    Villager.belongsToMany(models.Villager, {
      as: "friend",
      through: "villagerFriends",
    });
  };

  return Villager;
};
