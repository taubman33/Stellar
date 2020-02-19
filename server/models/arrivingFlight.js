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
    eco: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
       references: {
        model: 'User',
        key: 'id',
        as: 'userId'

      }
    }


  }, {});
  ArrivingFlight.associate = function(models) {
   ArrivingFlight.belongsToMany(models.User, {
    foreignKey: 'userId',
      onDelete: 'CASCADE'
    });  
  };
  return ArrivingFlight;
};
