module.exports = function(sequelize, DataTypes) {
  const Gift = sequelize.define("Gift", {
    preference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availableIn: {
    	type: DataTypes.STRING,
    	defaultValue: 'Vanilla'
    }
  });

  return Gift;
}