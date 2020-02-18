'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItineraryFlight = sequelize.define('ItineraryFlight', {
    itinerary_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER
  }, {});
  ItineraryFlight.associate = function(models) {
    
    ItineraryFlight.hasMany(models.Flight, {
      foreignKey: 'flightId',
      onDelete: 'CASCADE'
    });  
    ItineraryFlight.hasMany(models.Itinerary, {
      foreignKey: 'itineraeryId',
      onDelete: 'CASCADE'
    }); 
  };
  return ItineraryFlight;
};