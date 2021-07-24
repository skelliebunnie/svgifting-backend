module.exports = function(sequelize, DataTypes) {
  const Source = sequelize.define("Source", {
  	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    availableIn: {
    	type: DataTypes.STRING,
    	defaultValue: 'Vanilla'
    }
  });

  return Source;
}