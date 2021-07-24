module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define("Event", {
  	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // Birthday (most common, default), Festival, Checkup
    // Other (e.g. 'extra forageables')
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Birthday'
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '2:00'
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '23:59'
    },
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });
  Event.associate = function(models) {
  	Event.belongsTo(models.Npc, {
  		foreignKey: 'NpcId',
  		constraints: false,
  		allowNull: true
  	});

  	Event.belongsTo(models.Season, {
  		foreignKey: 'SeasonId',
  		constraints: false,
  		allowNull: true
  	});

    Event.belongsTo(models.SubRegion, {
    	foreignKey: 'SubRegionId',
    	constraints: false,
    	allowNull: true
    });
  }
  return Event;
}