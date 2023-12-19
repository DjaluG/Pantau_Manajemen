'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Posisi.belongsTo(models.Divisi, { foreignKey: 'divisiID' });
  Posisi.hasMany(models.Works, { foreignKey: 'posisiID' });
  Posisi.hasMany(models.Routine, { foreignKey: 'posisiID' });
}

  }
  Posisi.init({
    name: DataTypes.STRING,
    divisiID:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Divisi', // Nama model division
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Posisi',
  });
  return Posisi;
};