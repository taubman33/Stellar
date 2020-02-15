'use strict';
const indexes = [

  
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('index', indexes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('index', null, {});
  }
};
