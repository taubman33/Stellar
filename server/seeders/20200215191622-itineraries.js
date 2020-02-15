'use strict';

const itineraries = [

  
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('itinerary', itineraries, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('itinerary', null, {});
  }
};
