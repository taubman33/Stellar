'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItineraryFlight = sequelize.define('ItineraryFlight', {
    itinerary_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER
  }, {});
  ItineraryFlight.associate = function(models) {
    
    Itinerary.hasMany(models.Flight, {
      foreignKey: 'flightId'
    });  
  };
  return ItineraryFlight;
};