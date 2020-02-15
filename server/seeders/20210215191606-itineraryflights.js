'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItineraryFlights', [{
      itinerary_id: 1,
      flight_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itinerary_id: 1,
      flight_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itinerary_id: 1,
      flight_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItineraryFlights', null, {});
  }
};
