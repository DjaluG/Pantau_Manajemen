'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Divisis', [
    {
      name: 'Kurikulum',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kesiswaan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sarana & Prasarana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tata usaha & Humas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'BKK & Hubinak',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pelayanan Data & Informasi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Manajemen Mutu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kesehatan & Lingkungan',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Divisis', null, {});
  }
};
