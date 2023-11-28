'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Routines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
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
      worksID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Works',
          key: 'id'
        }
      },
      category: {
        type: Sequelize.ENUM("Routine", "Regulation", "Challenge", "Request", "Deadline")
      },
      status: {
        type: Sequelize.ENUM("Progress", "Finished", "Unfinished")
      },
      time: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Routines');
  }
};