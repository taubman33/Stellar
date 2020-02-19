'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DepartingFlights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airline: {
        type: Sequelize.STRING
      },
      depart_airport: {
        type: Sequelize.STRING
      },
      arrival_airport: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      flight_number: {
        type: Sequelize.STRING
      },
      depart_time: {
        type: Sequelize.DATE
      },
      arrival_time: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      eco: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('DepartingFlights');
  }
};