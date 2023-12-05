'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Divisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Divisi.hasMany(models.Position, { foreignKey: 'posisiID' });
      Divisi.hasMany(models.Works, {foreignKey: 'worksID'});
      Divisi.hasMany(models.Routine, {foreignKey: 'routineID'});
    }
  }
  Divisi.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Divisi',
  });
  return Divisi;
};