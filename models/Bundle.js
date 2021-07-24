module.exports = function (sequelize, DataTypes) {
  const Bundle = sequelize.define("Bundle", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isRemix: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    availableIn: {
      type: DataTypes.STRING,
      defaultValue: 'Vanilla'
    }
  });

  Bundle.associate = function (models) {
    Bundle.belongsToMany(models.Item, { through: models.BundleItem });
    Bundle.belongsToMany(models.Item, { through: models.BundleReward });
  }
  return Bundle;
}