'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItineraryFlight = sequelize.define('ItineraryFlight', {
    itineraryId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER
  }, {});
  ItineraryFlight.associate = function(models) {
    
    ItineraryFlight.belongsToOne(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });  
    ItineraryFlight.hasMany(models.Flight, {
      foreignKey: 'flightId',
      onDelete: 'CASCADE'
    });  
    ItineraryFlight.hasOne(models.Itinerary, {
      foreignKey: 'itineraryId',
      onDelete: 'CASCADE'
    }); 
  };
  return ItineraryFlight;
};