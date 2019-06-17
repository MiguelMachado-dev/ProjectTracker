const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const DashboardController = require('./app/controllers/DashboardController')
const ProjectController = require('./app/controllers/ProjectController')

const authMiddleware = require('./app/middlewares/auth')

routes.get('/api', (req, res) =>
  res.status(200).send({
    message: 'Server on!'
  })
)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware) // every routes below this line will use auth

routes.get('/users', DashboardController.index)

routes.post('/projects', ProjectController.store)
routes.get('/projects', ProjectController.create)

routes.get('/dashboard', (req, res) => {
  return res.status(200).send()
})
module.exports = routes
