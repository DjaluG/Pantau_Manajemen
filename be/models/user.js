'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // Define One-to-One relationship with Position
      user.hasOne(models.position, { foreignKey: 'userId' });
      
      // Define One-to-One relationship with Division
      user.hasOne(models.division, { foreignKey: 'userId' });
    }
  }
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};