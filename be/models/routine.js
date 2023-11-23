'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Routine.belongsTo(models.Divisi, { foreignKey: "divisiID" });
      Routine.belongsTo(models.Posisi, { foreignKey: "posisiID" });
      Routine.belongsTo(models.Works, { foreignKey: "worksID" });
    }
  }
  Routine.init({
    description: DataTypes.STRING,
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
    worksID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Works", 
        key: "id",
      },
    },
    category: {
      type: DataTypes.ENUM("Routine", "Regulation", "Challenge", "Request", "Deadline"),
    },
    status:  {
      type: DataTypes.ENUM("Progress", "Finish", "Unfinished"),
    },
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Routine',
  });
  return Routine;
};