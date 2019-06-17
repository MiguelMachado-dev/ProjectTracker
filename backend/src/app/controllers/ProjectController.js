const { User, Project } = require('../models')

class ProjectController {
  async store (req, res) {
    const project = await Project.create(req.body)

    return res.json(project)
  }

  async create (req, res) {
    const user = await User.findByPk(req.params.name)

    return res.json(user)
  }
}

module.exports = new ProjectController()
