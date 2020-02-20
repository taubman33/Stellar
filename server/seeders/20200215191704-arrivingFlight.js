'use strict';
const moment = require('moment');

//airlines used - jetblue, delta, american, united
///airports used - New York (JFK) New York (LGA)'San Francisco (SFO) Los Angeles (LAX) Chicago (ORD) Dallas (DFW)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ArrivingFlights', [


      //leaving New York (JFK)
        //to San Francisco (SFO)
        {
          airline: 'Jetblue',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'San Francisco (SFO)',
          price: 500.54,
          flight_number: "12345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.2,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          airline: 'American',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'San Francisco (SFO)',
          price: 470.22,
          flight_number: "66646",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'San Francisco (SFO)',
          price: 511.59,
          flight_number: "14335",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.2,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'San Francisco (SFO)',
          price: 479.44,
          flight_number: "11246",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 6.9,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'San Francisco (SFO)',
          price: 600.18,
          flight_number: "13366",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
           //to Los Angeles (LAX)
        {
          airline: 'Delta',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 300.45,
          flight_number: "22345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.2,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 270.48,
          flight_number: "22345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.3,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 620.34,
          flight_number: "13345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.5,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
    
        //to Chicago (ORD)
        {
          airline: 'Jetblue',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Chicago (ORD)',
          price: 320.34,
          flight_number: "13345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.2,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Chicago (ORD)',
          price: 290.38,
          flight_number: "13345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Chicago (ORD)',
          price: 280.38,
          flight_number: "88345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
        //to Dallas (DFW)
        {
          airline: 'Delta',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Dallas (DFW)',
          price: 350.34,
          flight_number: "93345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.9,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Dallas (DFW)',
          price: 500.34,
          flight_number: "13345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.3,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Dallas (DFW)',
          price: 220.45,
          flight_number: "83345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.2,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'New York (JFK)',
          arrival_airport: 'Dallas (DFW)',
          price: 209.85,
          flight_number: "83388",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
    
        //leaving New York (LGA)
      //to San Francisco (SFO)
      {
              airline: 'Delta',
              depart_airport: 'New York (LGA)',
              arrival_airport: 'San Francisco (SFO)',
              price: 422.34,
              flight_number: "19345",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 6.5,
              eco: false,
              createdAt: new Date(),
              updatedAt: new Date()
     },
     {
      airline: 'United',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'San Francisco (SFO)',
      price: 430.34,
      flight_number: "28348",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 8.5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      airline: 'Jetblue',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'San Francisco (SFO)',
      price: 410.77,
      flight_number: "28377",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 8.5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    
     //to LAX
     {
      airline: 'Jetblue',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'Los Angeles (LAX)',
      price: 410.77,
      flight_number: "28227",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 8.5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    
     {
      airline: 'United',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'Los Angeles (LAX)',
      price: 415.57,
      flight_number: "28217",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 9.5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      airline: 'Delta',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'Los Angeles (LAX)',
      price: 435.27,
      flight_number: "44417",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 8.5,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    
    
     //to DFW
     {
      airline: 'Delta',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'Dallas (DFW)',
      price: 435.27,
      flight_number: "34417",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 8.5,
      eco: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      airline: 'American',
      depart_airport: 'New York (LGA)',
      arrival_airport: 'Dallas (DFW)',
      price: 445.87,
      flight_number: "34997",
      depart_time: new Date(moment()),
      arrival_time: new Date(moment().add(4, 'hours')),
      rating: 8.7,
      eco: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    
        //to Chicago (ORD)
        {
              airline: 'American',
              depart_airport: 'New York (LGA)',
              arrival_airport: 'Chicago (ORD)',
              price: 220.35,
              flight_number: "16345",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 8.3,
              eco: true,
              createdAt: new Date(),
              updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'New York (LGA)',
          arrival_airport: 'Chicago (ORD)',
          price: 530.33,
          flight_number: "19444",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'New York (LGA)',
          arrival_airport: 'Chicago (ORD)',
          price: 520.34,
          flight_number: "19345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Delta',
          depart_airport: 'New York (LGA)',
          arrival_airport: 'Chicago (ORD)',
          price: 510.54,
          flight_number: "19388",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
       {
              airline: 'Delta',
              depart_airport: 'New York (LGA)',
              arrival_airport: 'Chicago (ORD)',
              price: 530.99,
              flight_number: "19345",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 7.5,
              eco: true,
              createdAt: new Date(),
              updatedAt: new Date()
       },
       {
              airline: 'United',
              depart_airport: 'New York (LGA)',
              arrival_airport: 'Chicago (ORD)',
              price: 520.34,
              flight_number: "39335",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 9.5,
              eco: false,
              createdAt: new Date(),
              updatedAt: new Date()
       },
    
    
        //leaving Los Angeles (LAX)
                //to New York (JFK)
       {
                      airline: 'Delta',
                      depart_airport: 'Los Angeles (LAX)',
                      arrival_airport: 'New York (JFK)',
                      price: 420.68,
                      flight_number: "83345",
                      depart_time: new Date(moment()),
                      arrival_time: new Date(moment().add(4, 'hours')),
                      rating: 8.4,
                      eco: true,
                      createdAt: new Date(),
                      updatedAt: new Date()
       },
       {
                      airline: 'American',
                      depart_airport: 'Los Angeles (LAX)',
                      arrival_airport: 'New York (JFK)',
                      price: 428.98,
                      flight_number: "99946",
                      depart_time: new Date(moment()),
                      arrival_time: new Date(moment().add(4, 'hours')),
                      rating: 7.4,
                      eco: false,
                      createdAt: new Date(),
                      updatedAt: new Date()
       }, 
       {
                      airline: 'United',
                      depart_airport: 'Los Angeles (LAX)',
                      arrival_airport: 'New York (JFK)',
                      price: 390.98,
                      flight_number: "88895",
                      depart_time: new Date(moment()),
                      arrival_time: new Date(moment().add(4, 'hours')),
                      rating: 9.3,
                      eco: true,
                      createdAt: new Date(),
                      updatedAt: new Date()
       },
                     //to New York (LGA)
        {
          airline: 'American',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'New York (LGA)',
          price: 328.88,
          flight_number: "48445",
          depart_time: new Date(moment()),
          arrival_time:  new Date(moment().add(4, 'hours')),
          rating: 6.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'New York (LGA)',
          price: 338.50,
          flight_number: "37245",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'New York (LGA)',
          price: 338.88,
          flight_number: "97245",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
                    
         {
                        airline: 'Jetblue',
                        depart_airport: 'Los Angeles (LAX)',
                        arrival_airport: 'New York (LGA)',
                        price: 321.68,
                        flight_number: "23945",
                        depart_time: new Date(moment()),
                        arrival_time: new Date(moment().add(4, 'hours')),
                        rating: 9.4,
                        eco: true,
                        createdAt: new Date(),
                        updatedAt: new Date()
        },
    
                //to San Francisco (SFO)
        {
          airline: 'United',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'San Francisco (SFO)',
          price: 100.34,
          flight_number: "12445",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(1, 'hours')),
          rating: 7.3,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Delta',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'San Francisco (SFO)',
          price: 130.38,
          flight_number: "22447",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(1, 'hours')),
          rating: 8.5,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'San Francisco (SFO)',
          price: 135.38,
          flight_number: "22499",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(1, 'hours')),
          rating: 9.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
          //to Chicago (ORD)
            {
                    airline: 'United',
                    depart_airport: 'Los Angeles (LAX)',
                    arrival_airport: 'Chicago (ORD)',
                    price: 420.34,
                    flight_number: "16645",
                    depart_time: new Date(moment()),
                    arrival_time: new Date(moment().add(1, 'hours')),
                    rating: 8.4,
                    eco: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
            },
            {
                    airline: 'American',
                    depart_airport: 'Los Angeles (LAX)',
                    arrival_airport: 'Chicago (ORD)',
                    price: 429.44,
                    flight_number: "16645",
                    depart_time: new Date(moment()),
                    arrival_time: new Date(moment().add(1, 'hours')),
                    rating: 7.4,
                    eco: false,
                    createdAt: new Date(),
                    updatedAt: new Date()
           },
    
        {
          airline: 'United',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'Chicago (ORD)',
          price: 445.37,
          flight_number: "19945",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.2,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'Chicago (ORD)',
          price: 420.34,
          flight_number: "16645",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
        //to DFW             
       {
                        airline: 'Delta',
                        depart_airport: 'Los Angeles (LAX)',
                        arrival_airport: 'Dallas (DFW',
                        price: 331.77,
                        flight_number: "23945",
                        depart_time: new Date(moment()),
                        arrival_time: new Date(moment().add(4, 'hours')),
                        rating: 9.4,
                        eco: true,
                        createdAt: new Date(),
                        updatedAt: new Date()
       },
                               
        {
          airline: 'Jetblue',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'Dallas (DFW',
          price: 321.68,
          flight_number: "24445",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(2, 'hours')),
          rating: 8.7,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
        {
          airline: 'United',
          depart_airport: 'Los Angeles (LAX)',
          arrival_airport: 'Dallas (DFW',
          price: 320.58,
          flight_number: "24477",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(2, 'hours')),
          rating: 8.7,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
    
    
        //leaving San Francisco (SFO)
                     //to New York (JFK)  
        {
          airline: 'United',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'New York (JFK)',
          price: 530.94,
          flight_number: "12385",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'New York (JFK)',
          price: 630.24,
          flight_number: "44385",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'New York (JFK)',
          price: 532.92,
          flight_number: "12300",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.2,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
            //to New York (LGA)
        {
              airline: 'United',
              depart_airport: 'San Francisco (SFO)',
              arrival_airport: 'New York (LGA)',
              price: 530.94,
              flight_number: "12385",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 8.3,
              eco: true,
              createdAt: new Date(),
              updatedAt: new Date()
        },
        {
              airline: 'Jetblue',
              depart_airport: 'San Francisco (SFO)',
              arrival_airport: 'New York (LGA)',
              price: 630.24,
              flight_number: "44365",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 7.4,
              eco: true,
              createdAt: new Date(),
              updatedAt: new Date()
        },
        {
              airline: 'American',
              depart_airport: 'San Francisco (SFO)',
              arrival_airport: 'New York (LGA)',
              price: 532.92,
              flight_number: "12300",
              depart_time: new Date(moment()),
              arrival_time: new Date(moment().add(4, 'hours')),
              rating: 9.2,
              eco: false,
              createdAt: new Date(),
              updatedAt: new Date()
        },      
    
          //to Chicago (ORD)
        {
          airline: 'United',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Chicago (ORD)',
          price: 350.34,
          flight_number: "13345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Delta',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Chicago (ORD)',
          price: 320.24,
          flight_number: "22345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Chicago (ORD)',
          price: 310.14,
          flight_number: "24445",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
        //to Dallas (DFW)
    
        {
          airline: 'United',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Dallas (DFW)',
          price: 353.54,
          flight_number: "13245",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.7,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Delta',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Dallas (DFW)',
          price: 322.24,
          flight_number: "44345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.2,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Dallas (DFW)',
          price: 328.84,
          flight_number: "48845",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.8,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
         //to Los Angeles (LAX) 
        {
          airline: 'American',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 332.92,
          flight_number: "32395",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(1, 'hours')),
          rating: 6.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 312.32,
          flight_number: "55395",
         depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(1, 'hours')),
          rating: 8.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'San Francisco (SFO)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 333.44,
          flight_number: "57785",
         depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(1, 'hours')),
          rating: 8.5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
        //leaving Dallas (DFW)
        //to ORD
        {
          airline: 'Delta',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Chicago (ORD)',
          price: 310.84,
          flight_number: "23345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.5,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Chicago (ORD)',
          price: 380.17,
          flight_number: "19333",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.6,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Chicago (ORD)',
          price: 420.34,
          flight_number: "22345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Chicago (ORD)',
          price: 320.34,
          flight_number: "19345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(2, 'hours')),
          rating: 7.7,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Chicago (ORD)',
          price: 320.34,
          flight_number: "22245",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(2, 'hours')),
          rating: 7.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         
        //to JFK
        {
          airline: 'Delta',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'New York (JFK)',
          price: 320.34,
          flight_number: "19345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
       
        {
          airline: 'American',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'New York (JFK)',
          price: 310.44,
          flight_number: "33345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.8,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
        //to LGA  
        {
          airline: 'Jetblue',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'New York (LGA)',
          price: 320.34,
          flight_number: "22245",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 7.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },   
        {
          airline: 'United',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'New York (LGA)',
          price: 330.54,
          flight_number: "23148",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 8.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'New York (LGA)',
          price: 335.54,
          flight_number: "23177",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 7.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
        //to SFO
        {
          airline: 'American',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'San Francisco (SFO)',
          price: 335.54,
          flight_number: "23177",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 7.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Jetblue',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'San Francisco (SFO)',
          price: 335.66,
          flight_number: "44447",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 8.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Delta',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'San Francisco (SFO)',
          price: 328.86,
          flight_number: "11447",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 8.8,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //to LAX
        {
          airline: 'Delta',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 328.86,
          flight_number: "11447",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 8.8,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Dallas (DFW)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 318.99,
          flight_number: "17647",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(3, 'hours')),
          rating: 8.3,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
      //leaving from Chicago (ORD)
       //to JFK
        {
          airline: 'Jetblue',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (JFK)',
          price: 421.84,
          flight_number: "13345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (JFK)',
          price: 411.04,
          flight_number: "13985",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.4,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'United',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (JFK)',
          price: 383.43,
          flight_number: "42345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
        //to LGA    
        {
          airline: 'American',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (LGA)',
          price: 143.99,
          flight_number: "14749",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(2, 'hours')),
          rating: 8.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Southwest',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (LGA)',
          price: 133.99,
          flight_number: "42749",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(2, 'hours')),
          rating: 7.7,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
    
        //to SFO
        {
          airline: 'United',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'San Francisco (SFO)',
          price: 333.33,
          flight_number: "72348",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.2,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'San Francisco (SFO)',
          price: 344.34,
          flight_number: "76548",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (LGA)',
          price: 333.33,
          flight_number: "55349",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    
    //to LAX
        {
          airline: 'Jetblue',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'Los Angeles (LAX)',
          price: 239.33,
          flight_number: "44345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'New York (LGA)',
          price: 739.32,
          flight_number: "64345",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 8.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
     //to DFW
        {
          airline: 'United',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'Dallas (DFW)',
          price: 139.32,
          flight_number: "74745",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'American',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'Dallas (DFW)',
          price: 139.32,
          flight_number: "15745",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 7.3,
          eco: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          airline: 'Delta',
          depart_airport: 'Chicago (ORD)',
          arrival_airport: 'Dallas (DFW)',
          price: 130.19,
          flight_number: "43360",
          depart_time: new Date(moment()),
          arrival_time: new Date(moment().add(4, 'hours')),
          rating: 9.4,
          eco: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      
  
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ArrivingFlights', null, {});
  }
};
