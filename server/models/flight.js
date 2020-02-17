'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flights = sequelize.define('Flights', {
    airline: DataTypes.STRING,
    depart_airport: DataTypes.STRING,
    arrival_airport: DataTypes.STRING,
    price: DataTypes.FLOAT,
    flight_number: DataTypes.STRING,
    depart_time: DataTypes.DATE,
    arrival_time: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    eco: DataTypes.BOOLEAN
  }, {});
  Flights.associate = function(models) {
    Itinerary.hasMany(models.Flight, {
      foreignKey: 'flightId'
    });  
  };
  return Flights;
};


