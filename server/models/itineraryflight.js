'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItineraryFlight = sequelize.define('ItineraryFlight', {
    itinerary_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER
  }, {});
  ItineraryFlight.associate = function(models) {
    // associations can be defined here
  };
  return ItineraryFlight;
};