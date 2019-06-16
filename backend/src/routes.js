const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/api', (req, res) =>
  res.status(200).send({
    message: 'Server on!'
  })
)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

module.exports = routes
