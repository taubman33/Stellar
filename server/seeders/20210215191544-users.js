'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Charles Mingus',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 2,
      departingFlightId: 1,
      arrivingFlightId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Miles Davis',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 3,
      departingFlightId: 1,
      arrivingFlightId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'John Coltrane',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 4,
      departingFlightId: 1,
      arrivingFlightId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      name: 'Thelonious Monk',
      hashed_password: 'password',
      number_adults: 1,
      number_children: 1,
      departingFlightId: 3,
      arrivingFlightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      name: 'Paul Chambers',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 3,
      departingFlightId: 4,
      arrivingFlightId: 1,
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Tommy Flannigan',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 4,
      departingFlightId: 2,
      arrivingFlightId: 3,
      departingFlightId: 1,
      arrivingFlightId: 2,
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Wayne Shorter',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 1,
      departingFlightId: 1,
      arrivingFlightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Wes Montgomery',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 1,
      departingFlightId: 1,
      arrivingFlightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sonny Rollins',
      hashed_password: 'password',
      number_adults: 2,
      number_children: 3,
      departingFlightId: 1,
      arrivingFlightId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};