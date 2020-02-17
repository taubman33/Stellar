'use strict';

//airlines used - jetblue, delta, american, united
///airports used - JFK LGA SFO LAX ORD DFW


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', [


      //leaving JFK
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
      //green 10% off to LAX
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
      depart_airport: 'JFK',
      arrival_airport: 'LAX',
      price: 600.17,
      flight_number: "13345",
      depart_time:  new Date(),
      arrival_time: new Date(),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

       //green 10% off option - to DFW
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
      depart_airport: 'JFK',
      arrival_airport: 'DFW',
      price: 209.85,
      flight_number: "83345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },




    //leaving LGA
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

        //green 10% off option

   {
          airline: 'Delta',
          depart_airport: 'LGA',
          arrival_airport: 'ORD',
          price: 530.99,
          flight_number: "19345",
          depart_time: new Date(),
          arrival_time: new Date(),
          rating: 5,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
   },


   {
          airline: 'United',
          depart_airport: 'LGA',
          arrival_airport: 'ORD',
          price: 520.34,
          flight_number: "19335",
          depart_time: new Date(),
          arrival_time: new Date(),
          rating: 5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
   },



    //leaving LAX
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
      airline: 'Jetblue',
      depart_airport: 'LAX',
      arrival_airport: 'LGA',
      price: 321.68,
      flight_number: "83945",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },


    //leaving SFO
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
      airline: 'United',
      depart_airport: 'SFO',
      arrival_airport: 'JFK',
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
      airline: 'Jetblue',
      depart_airport: 'SFO',
      arrival_airport: 'JFK',
      price: 630.24,
      flight_number: "44385",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'American',
      depart_airport: 'SFO',
      arrival_airport: 'JFK',
      price: 532.92,
      flight_number: "12385",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
     //10% off option
    {
      airline: 'American',
      depart_airport: 'SFO',
      arrival_airport: 'LAX',
      price: 332.92,
      flight_number: "32395",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Jetblue',
      depart_airport: 'SFO',
      arrival_airport: 'LAX',
      price: 312.32,
      flight_number: "55395",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },


   


    //leaving DFW
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
      depart_airport: 'DFW',
      arrival_airport: 'ORD',
      price: 320.34,
      flight_number: "19345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },


      //green options - to JFK
    {
      airline: 'American',
      depart_airport: 'DFW',
      arrival_airport: 'JFK',
      price: 320.34,
      flight_number: "19345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

   
    {
      airline: 'American',
      depart_airport: 'DFW',
      arrival_airport: 'JFK',
      price: 310.44,
      flight_number: "33345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'DFW',
      arrival_airport: 'ORD',
      price: 380.17,
      flight_number: "19333",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Jetblue',
      depart_airport: 'DFW',
      arrival_airport: 'ORD',
      price: 420.34,
      flight_number: "22345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },






  //leaving from ORD
   
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
    },

    {
      airline: 'American',
      depart_airport: 'ORD',
      arrival_airport: 'LGA',
      price: 333.33,
      flight_number: "72349",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 383.43,
      flight_number: "42345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Jetblue',
      depart_airport: 'ORD',
      arrival_airport: 'LAX',
      price: 239.33,
      flight_number: "44345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'American',
      depart_airport: 'ORD',
      arrival_airport: 'LGA',
      price: 739.32,
      flight_number: "64345",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    //green options
    {
      airline: 'United',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 139.32,
      flight_number: "74745",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'American',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 143.99,
      flight_number: "14749",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Southwest',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 133.99,
      flight_number: "42749",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'Delta',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 130.19,
      flight_number: "43349",
      depart_time: new Date(),
      arrival_time: new Date(),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};
