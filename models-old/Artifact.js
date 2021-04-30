module.exports = function(sequelize, DataTypes) {
  const Artifact = sequelize.define("Artifact", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });
  Artifact.associate = function(models) {
    Artifact.belongsToMany(models.SubRegion, { through: models.ItemAvailability, as: 'itemId' })
  }
  return Artifact;
}