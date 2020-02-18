'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Itineraries', [{
      user_id: '1',
      number_adults: 2,
      number_children: 0,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      user_id: '2',
      number_adults: 1,
      number_children: 2,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      user_id: '3',
      number_adults: 2,
      number_children: 2,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      user_id: '4',
      number_adults: 4,
      number_children: 6,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      user_id: '5',
      number_adults: 1,
      number_children: 0,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Itineraries', null, {});
  }
};
