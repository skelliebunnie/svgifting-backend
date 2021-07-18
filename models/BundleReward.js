module.exports = function (sequelize, DataTypes) {
  const BundleReward = sequelize.define("BundleReward", {
    quantity: DataTypes.INTEGER
  });

  return BundleReward;
}