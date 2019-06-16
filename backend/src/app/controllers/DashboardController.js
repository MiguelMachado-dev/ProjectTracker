const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email']
    })

    return res.json(users)
  }
}

module.exports = new DashboardController()
