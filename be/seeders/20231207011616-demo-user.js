'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'John',
      password: 'password123',
      username: 'JohnDoe',
      posisiID: 1,
      role : 'Staff',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Amiya',
      password: 'password1235',
      username: 'Amiya',
      posisiID: 1,
      role : 'Guru',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
