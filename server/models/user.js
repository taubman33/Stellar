'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Itinerary, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};