'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Divisi, { foreignKey: "divisiID" });
      User.belongsTo(models.Posisi, { foreignKey: "posisiID" });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    divisiID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Divisi", // Nama model division
        key: "id",
      },
    },
    posisiID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Posisi", // Nama model position
          key: "id",
        },
      },
    role: {
      type: DataTypes.ENUM("Staff", "Kepsek", "Guru"),
      defaultValue: "Guru",
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};