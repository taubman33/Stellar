'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItineraryFlights', [
      {
      itineraryId: 1,
      flightId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 1,
      flightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 1,
      flightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 2,
      flightId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 2,
      flightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 3,
      flightId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 3,
      flightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      itineraryId: 3,
      flightId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItineraryFlights', null, {});
  }
};
