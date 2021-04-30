module.exports = function(sequelize, DataTypes) {
  const Profession = sequelize.define("Profession", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Profession.associate = function(models) {
    Profession.belongsTo(models.Skill);
  }

  return Profession;
}