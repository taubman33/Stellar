'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define('Itinerary', {
    user_id: DataTypes.STRING,
    number_adults: DataTypes.INTEGER,
    number_children: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  Itinerary.associate = function(models) {
    // associations can be defined here
  };
  return Itinerary;
};