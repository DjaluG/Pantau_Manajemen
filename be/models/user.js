'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('sequelize-bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Posisi, { foreignKey: "posisiID" });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set(value) {
        const hashedPassword = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hashedPassword);
      },
    },
    username: DataTypes.STRING,
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
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};