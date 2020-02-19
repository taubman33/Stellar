'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('Flight', {
    airline: DataTypes.STRING,
    depart_airport: DataTypes.STRING,
    arrival_airport: DataTypes.STRING,
    price: DataTypes.FLOAT,
    flight_number: DataTypes.STRING,
    depart_time: DataTypes.DATE,
    arrival_time: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    eco: DataTypes.BOOLEAN,
    
    itineraryFlightId:{
      type: DataTypes.INTEGER,
    references: {
      model: 'ItineraryFlight',
      key: 'id',
      as: 'itineraryFlightId'
    }}
  }, {});
  Flight.associate = function(models) {
   Flight.belongsToOne(models.Itinerary, {
    through: 'ItineraryFlight',  
    as: 'itineraries',
    foreignKey: 'flightId',
    otherKey: 'itineraryId',
      onDelete: 'CASCADE'
    });  
  };
  return Flight;
};


