module.exports = function(sequelize, DataTypes) {
  const MonsterLoot = sequelize.define("MonsterLoot", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: DataTypes.STRING,
    sellPrice: DataTypes.INTEGER
  });

  return MonsterLoot;
}