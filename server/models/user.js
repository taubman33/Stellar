'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    number_adults: DataTypes.INTEGER,
    number_children: DataTypes.INTEGER,
    departingFlightId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'DepartingFlight',
        key: 'id',
        as: 'departingFlightId'

      }
    },
    arrivingFlightId: {
      type: DataTypes.INTEGER,
      references: {
      model: 'ArrivingFlight',
      key: 'id',
      as: 'arrivingFlightId'

    }
  },

  }, {});

  User.associate = function(models) {
    User.belongsTo(models.DepartingFlight, {
      foreignKey: 'departingFlightId',
      onDelete: 'CASCADE'
    });
    User.belongsTo(models.ArrivingFlight, {
      foreignKey: 'arrivingFlightId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};

   