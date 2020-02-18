'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItineraryFlight = sequelize.define('ItineraryFlight', {
    itineraryId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER
  }, {});
  ItineraryFlight.associate = function(models) {
    
    ItineraryFlight.hasMany(models.Flight, {
      foreignKey: 'flightId',
      onDelete: 'CASCADE'
    });  
    ItineraryFlight.hasMany(models.Itinerary, {
      foreignKey: 'itineraryId',
      onDelete: 'CASCADE'
    }); 
  };
  return ItineraryFlight;
};