'use strict';

// Dependencies
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        person_id: 1,
        password: await bcrypt.hash('123456789', 10),
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        person_id: 2,
        password: await bcrypt.hash('123456789', 10),
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null);
  }
};
