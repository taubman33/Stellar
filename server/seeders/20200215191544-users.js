'use strict';

const users = []


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};