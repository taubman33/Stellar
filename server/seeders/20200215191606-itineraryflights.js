'use strict';


const itineraryFlights = [

  
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('itineraryFlight', itineraryFlights, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('itinerary', null, {});
  }
};
