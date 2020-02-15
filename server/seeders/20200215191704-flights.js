'use strict';

//airlines used - jetblue, delta, american, united
///airports used - JFK LGA SFO LAX ORD DFW


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', [

      {
      airline: 'Jetblue',
      depart_airport: 'JFK',
      arrival_airport: 'SFO',
      price: 500.54,
      flight_number: "12345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Delta',
      depart_airport: 'JFK',
      arrival_airport: 'LAX',
      price: 300.45,
      flight_number: "22345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'SFO',
      price: 100.34,
      flight_number: "12445",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'ORD',
      price: 420.34,
      flight_number: "16645",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      airline: 'United',
      depart_airport: 'SFO',
      arrival_airport: 'ORD',
      price: 350.34,
      flight_number: "13345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Jetblue',
      depart_airport: 'JFK',
      arrival_airport: 'ORD',
      price: 320.34,
      flight_number: "13345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 2,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Delta',
      depart_airport: 'JFK',
      arrival_airport: 'DFW',
      price: 350.34,
      flight_number: "93345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Delta',
      depart_airport: 'DFW',
      arrival_airport: 'ORD',
      price: 310.84,
      flight_number: "5s3345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'American',
      depart_airport: 'LGA',
      arrival_airport: 'ORD',
      price: 220.35,
      flight_number: "16345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'SFO',
      arrival_airport: 'ORD',
      price: 530.94,
      flight_number: "12385",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Delta',
      depart_airport: 'LAX',
      arrival_airport: 'DFW',
      price: 420.68,
      flight_number: "83345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Delta',
      depart_airport: 'LGA',
      arrival_airport: 'ORD',
      price: 520.34,
      flight_number: "19345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'American',
      depart_airport: 'JFK',
      arrival_airport: 'DFW',
      price: 220.45,
      flight_number: "83345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 2,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'American',
      depart_airport: 'DFW',
      arrival_airport: 'ORD',
      price: 820.34,
      flight_number: "19345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'JFK',
      arrival_airport: 'DFW',
      price: 500.34,
      flight_number: "13345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Jetblue',
      depart_airport: 'JFK',
      arrival_airport: 'LAX',
      price: 620.34,
      flight_number: "13345",
      depart_time:  new Date(),
      arrival_time: new Date(),
      rating: 5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Jetblue',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 421.84,
      flight_number: "13345",
      depart_time: new Date(),
      arrival_time:  new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'ORD',
      arrival_airport: 'SFO',
      price: 333.33,
      flight_number: "72345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};
