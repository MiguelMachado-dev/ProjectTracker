const request = require('supertest')

const app = require('../../src/server')
const truncate = require('../utils/truncate')
const { User } = require('../../src/app/models')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('Should be able to authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Miguel',
      email: 'miguel2@gmail.com',
      password: '123123',
      superuser: false
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123'
      })

    expect(response.status).toBe(200)
  })

  it('should not be able to authenticate with invalid credentials', async () => {
    const user = await User.create({
      name: 'Miguel',
      email: 'miguel2@gmail.com',
      password: '123123',
      superuser: false
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.status).toBe(401)
  })
})
