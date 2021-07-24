module.exports = function(sequelize, DataTypes) {
  const Buff = sequelize.define("Buff", {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    duration: DataTypes.INTEGER,
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });
  Buff.associate = function(models) {
    Buff.belongsToMany(models.Recipe, { through: models.RecipeBuff })
  }
  return Buff;
}