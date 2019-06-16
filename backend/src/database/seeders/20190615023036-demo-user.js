'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@gmail.com',
          password_hash: Math.random().toString(),
          superuser: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Programador 1',
          email: 'coder1@gmail.com',
          password_hash: Math.random().toString(),
          superuser: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Programador 2',
          email: 'coder2@gmail.com',
          password_hash: Math.random().toString(),
          superuser: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
