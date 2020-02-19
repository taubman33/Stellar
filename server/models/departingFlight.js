'use strict';
module.exports = (sequelize, DataTypes) => {
  const DepartingFlight = sequelize.define('DepartingFlight', {
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
  DepartingFlight.associate = function(models) {
   DepartingFlight.hasMany(models.User, {
    foreignKey: 'departingFlightId',
      onDelete: 'CASCADE'
    });  
  };
  return DepartingFlight;
};


