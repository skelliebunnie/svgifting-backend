module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // Festival (most common, default)
    // Other (e.g. 'extra forageables')
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Festival'
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '9:00'
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '22:00'
    }
  });
  Event.associate = function(models) {
    Event.belongsTo(models.Villager, { allowNull: true });
    Event.belongsTo(models.Season);
    Event.belongsTo(models.SubRegion, { allowNull: true });
  }
  return Event;
}