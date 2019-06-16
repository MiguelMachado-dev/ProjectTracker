'use strict'
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      name: DataTypes.STRING,
      time: DataTypes.INTEGER
    },
    {}
  )
  Project.associate = models => {
    Project.belongsTo(models.User, { foreignKey: 'user_id' })
  }
  return Project
}
