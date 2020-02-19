'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      hashed_password: {
        type: Sequelize.STRING
      },
      number_adults: {
        type: Sequelize.INTEGER
      },
      number_children: {
        type: Sequelize.INTEGER
      },
      departingFlightId: {
        type: Sequelize.INTEGER
      },
      arrivingFlightId: { 
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};