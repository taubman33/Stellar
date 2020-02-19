'use strict';
module.exports = (sequelize, DataTypes) => {
  const DepartingFlight = sequelize.define('DeparingFlight', {
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
  DepartingFlight.associate = function(models) {
   DepartingFlight.belongsToMany(models.User, {
    foreignKey: 'userId',
      onDelete: 'CASCADE'
    });  
  };
  return DepartingFlight;
};


