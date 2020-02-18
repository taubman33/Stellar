'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Charles Mingus',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Miles Davis',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'John Coltrane',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      name: 'Thelonious Monk',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      name: 'Paul Chambers',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Tommy Flannigan',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Wayne Shorter',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Wes Montgomery',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Sonny Rollins',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};