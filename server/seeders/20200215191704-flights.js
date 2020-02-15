'use strict';
const flights = [

  
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flight', flights, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flight', null, {});
  }
};
