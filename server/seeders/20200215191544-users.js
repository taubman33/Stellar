'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Mike Michaelson',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Johnny Johnson',
      hashed_password: 'password',
  
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'David Davidson',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Robbie Robertson',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Tommy Tomson',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Frank Frankson',
      hashed_password: 'password',
        createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};