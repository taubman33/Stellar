'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define('Itinerary', {
    userId: DataTypes.INTEGER,
    number_adults: DataTypes.INTEGER,
    number_children: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    itineraryFlightId:{
      type: DataTypes.INTEGER,
    references: {
      model: 'ItineraryFlight',
      key: 'id',
      as: 'itineraryFlightId'
    }}
  }, {});
  Itinerary.associate = function(models) {
    Itinerary.hasOne(models.Flight, {
      through: 'ItineraryFlight',
      as: 'flights',
      foreignKey: 'itineraryId',
      otherKey: 'flightId',
      onDelete: 'CASCADE'
    });  };
  return Itinerary;
};