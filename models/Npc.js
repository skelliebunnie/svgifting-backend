module.exports = function(sequelize, DataTypes) {
  const Npc = sequelize.define("Npc", {
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
    marriageable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    availableIn: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'standard'
    }
  });

  Npc.associate = function(models) {
    // gifts table is separate from the item tables
    Npc.belongsToMany(models.Item, { through: models.Gift });
    Npc.belongsToMany(models.Season, { through: models.Event });

    Npc.hasMany(models.Item, { as: 'Gift' })

    Npc.belongsTo(models.Location);

    // family members
    Npc.belongsToMany(models.Npc, {
      as: "family",
      through: "npcFamily",
    });

    // friends
    Npc.belongsToMany(models.Npc, {
      as: "friend",
      through: "npcFriends",
    });
  };

  return Npc;
};
