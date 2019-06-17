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
  Project.belongsTo(models.User)
  return Project
}
