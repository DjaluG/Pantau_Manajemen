'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Works extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Works.belongsTo(models.Divisi, { foreignKey: "divisiID" });
      Works.belongsTo(models.Posisi, { foreignKey: "posisiID" });
    }
  }
  Works.init({
    plan: DataTypes.STRING,
    divisiID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Divisi", 
        key: "id",
      },
    },
    posisiID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Posisi", 
        key: "id",
      },
    },
    category: {
      type: DataTypes.ENUM("Routine", "Insidential"),
    },
    indicator: DataTypes.STRING,
    status:  {
      type: DataTypes.ENUM("Progress", "Finish", "Unfinished"),
    },
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Works',
  });
  return Works;
};