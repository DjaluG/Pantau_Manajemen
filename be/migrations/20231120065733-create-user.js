'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      divisiID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Divisis',
          key: 'id'
        }
      },
      posisiID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posisis',
          key: 'id'
        }
      },
      role: {
        type: Sequelize.ENUM('KepalaSekolah', 'Staff', 'Guru'),
        defaultValue: 'Guru'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};