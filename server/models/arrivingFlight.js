'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArrivingFlight = sequelize.define('ArrivingFlight', {
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
  ArrivingFlight.associate = function(models) {
   ArrivingFlight.hasMany(models.User, {
      foreignKey: 'arrivingFlightId',
      onDelete: 'CASCADE'
    });  
  };
  return ArrivingFlight;
};
