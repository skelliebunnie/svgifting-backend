module.exports = function(sequelize, DataTypes) {
  const Type = sequelize.define("Type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Type.associate = function(models) {
    Type.hasMany(models.Item)
  }
  return Type;
}