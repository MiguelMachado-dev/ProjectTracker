const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/api', (req, res) =>
  res.status(200).send({
    message: 'Server on!'
  })
)

routes.post('/users', UserController.store)

module.exports = routes
