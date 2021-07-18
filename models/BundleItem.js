module.exports = function (sequelize, DataTypes) {
  const BundleItem = sequelize.define("BundleItem", {
    quantity: DataTypes.INTEGER,
    quality: DataTypes.STRING
  });

  return BundleItem;
}