'use strict';
const moment = require('moment');


//airlines used - jetblue, delta, american, united
///airports used - JFK LGA SFO LAX ORD DFW
//for our presentation, JFK will be our home base, as it has the most flights leaving from it. For our presentation we will be doing JFK - SFO
//all other airports will have flights to JFK with green options, + to LGA if we want to use "New York" for the search insteak of just JFK
//most airports have flightroutes to each other airport but not all are connected fully w green options yet.
//not high priority for 5 minute presentaiton


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DepartingFlights', [


      //leaving JFK

        //to SFO
    {
      airline: 'Jetblue',
      depart_airport: 'JFK',
      arrival_airport: 'SFO',
      price: 500.54,
      flight_number: "12345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 

    {
      airline: 'American',
      depart_airport: 'JFK',
      arrival_airport: 'SFO',
      price: 470.22,
      flight_number: "66646",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'JFK',
      arrival_airport: 'SFO',
      price: 511.59,
      flight_number: "14335",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'American',
      depart_airport: 'JFK',
      arrival_airport: 'SFO',
      price: 479.44,
      flight_number: "11246",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'Jetblue',
      depart_airport: 'JFK',
      arrival_airport: 'SFO',
      price: 600.18,
      flight_number: "13366",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },


       //to LAX
    {
      airline: 'Delta',
      depart_airport: 'JFK',
      arrival_airport: 'LAX',
      price: 300.45,
      flight_number: "22345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'American',
      depart_airport: 'JFK',
      arrival_airport: 'LAX',
      price: 270.48,
      flight_number: "22345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 3,
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },


    //to ORD
    {
      airline: 'Jetblue',
      depart_airport: 'JFK',
      arrival_airport: 'ORD',
      price: 320.34,
      flight_number: "13345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 2,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'JFK',
      arrival_airport: 'ORD',
      price: 290.38,
      flight_number: "13345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    //to DFW
    {
      airline: 'Delta',
      depart_airport: 'JFK',
      arrival_airport: 'DFW',
      price: 350.34,
      flight_number: "93345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    //leaving LGA

  //to SFO
  {
          airline: 'Delta',
          depart_airport: 'LGA',
          arrival_airport: 'SFO',
          price: 422.34,
          flight_number: "19345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
 },
 {
  airline: 'United',
  depart_airport: 'LGA',
  arrival_airport: 'SFO',
  price: 430.34,
  flight_number: "28348",
  depart_time: new Date(moment()),
  arrival_time: new Date(moment().add(4, 'hours')),
  rating: 5,
  eco: false,
  createdAt: new Date(),
  updatedAt: new Date()
 },


    //to ORD
    {
          airline: 'American',
          depart_airport: 'LGA',
          arrival_airport: 'ORD',
          price: 220.35,
          flight_number: "16345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      airline: 'American',
      depart_airport: 'LGA',
      arrival_airport: 'ORD',
      price: 530.33,
      flight_number: "19444",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'LGA',
      arrival_airport: 'ORD',
      price: 520.34,
      flight_number: "19345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'Delta',
      depart_airport: 'LGA',
      arrival_airport: 'ORD',
      price: 510.54,
      flight_number: "19388",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
          airline: 'Delta',
          depart_airport: 'LGA',
          arrival_airport: 'ORD',
          price: 530.99,
          flight_number: "19345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
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
          flight_number: "39335",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
   },



    //leaving LAX
                //to JFK
   {
                  airline: 'Delta',
                  depart_airport: 'LAX',
                  arrival_airport: 'JFK',
                  price: 420.68,
                  flight_number: "83345",
                  depart_time: new Date(moment()),
                  arrival_time: new Date(moment().add(4, 'hours')),
                  rating: 4,
                  eco: true,
                  createdAt: new Date(),
                  updatedAt: new Date()
   },
   {
                  airline: 'American',
                  depart_airport: 'LAX',
                  arrival_airport: 'JFK',
                  price: 428.98,
                  flight_number: "99946",
                  depart_time: new Date(moment()),
                  arrival_time: new Date(moment().add(4, 'hours')),
                  rating: 4,
                  eco: false,
                  createdAt: new Date(),
                  updatedAt: new Date()
   }, 
   {
                  airline: 'United',
                  depart_airport: 'LAX',
                  arrival_airport: 'JFK',
                  price: 390.98,
                  flight_number: "88895",
                  depart_time: new Date(moment()),
                  arrival_time: new Date(moment().add(4, 'hours')),
                  rating: 3,
                  eco: true,
                  createdAt: new Date(),
                  updatedAt: new Date()
   },
                 //to LGA
    {
      airline: 'American',
      depart_airport: 'LAX',
      arrival_airport: 'LGA',
      price: 328.88,
      flight_number: "48445",
      depart_time: new Date(moment()),
      arrival_time:  new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'LGA',
      price: 338.,
      flight_number: "37245",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

            //to SFO
    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'SFO',
      price: 100.34,
      flight_number: "12445",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 3,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'Delta',
      depart_airport: 'LAX',
      arrival_airport: 'SFO',
      price: 130.38,
      flight_number: "22447",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'SFO',
      price: 135.38,
      flight_number: "22499",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'ORD',
      price: 420.34,
      flight_number: "16645",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
              //to ORD
    {
      airline: 'Jetblue',
      depart_airport: 'LAX',
      arrival_airport: 'LGA',
      price: 321.68,
      flight_number: "23945",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'ORD',
      price: 445.37,
      flight_number: "19945",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      airline: 'United',
      depart_airport: 'LAX',
      arrival_airport: 'ORD',
      price: 420.34,
      flight_number: "16645",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },


    //leaving SFO
                 //to JFK
  
    {
      airline: 'United',
      depart_airport: 'SFO',
      arrival_airport: 'JFK',
      price: 530.94,
      flight_number: "12385",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'American',
      depart_airport: 'SFO',
      arrival_airport: 'JFK',
      price: 532.92,
      flight_number: "12300",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

        //to LGA
      {
          airline: 'United',
          depart_airport: 'SFO',
          arrival_airport: 'LGA',
          price: 530.94,
          flight_number: "12385",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
       },
     {
          airline: 'Jetblue',
          depart_airport: 'SFO',
          arrival_airport: 'LGA',
          price: 630.24,
          flight_number: "44365",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
    {
          airline: 'American',
          depart_airport: 'SFO',
          arrival_airport: 'LGA',
          price: 532.92,
          flight_number: "12300",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 2,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
      },      

      //to ORD
    {
      airline: 'United',
      depart_airport: 'SFO',
      arrival_airport: 'ORD',
      price: 350.34,
      flight_number: "13345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'Delta',
      depart_airport: 'SFO',
      arrival_airport: 'ORD',
      price: 320.24,
      flight_number: "22345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    //to DFW

    {
      airline: 'United',
      depart_airport: 'SFO',
      arrival_airport: 'DFW',
      price: 353.54,
      flight_number: "13245",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airline: 'Delta',
      depart_airport: 'SFO',
      arrival_airport: 'DFW',
      price: 322.24,
      flight_number: "44345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 2,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
     //to LAX 
    {
      airline: 'American',
      depart_airport: 'SFO',
      arrival_airport: 'LAX',
      price: 332.92,
      flight_number: "32395",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
     depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      flight_number: "23345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     
    {
      airline: 'Delta',
      depart_airport: 'DFW',
      arrival_airport: 'JFK',
      price: 320.34,
      flight_number: "19345",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      flight_number: "72348",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      flight_number: "55349",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 3,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  

    {
      airline: 'United',
      depart_airport: 'ORD',
      arrival_airport: 'JFK',
      price: 139.32,
      flight_number: "74745",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
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
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 4,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DepartingFlights', null, {});
  }
};
