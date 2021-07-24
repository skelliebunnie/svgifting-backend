/**
 * SKILLS
 * Farming, Mining, Foraging, Fishing, Combat
 */
module.exports = function(sequelize, DataTypes) {
  const Skill = sequelize.define("Skill", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Skill;
}