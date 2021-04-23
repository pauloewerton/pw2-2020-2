const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://pauloewerton@localhost:5432/express')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false,
    len: [6, 255]
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false,
    len: [6, 255]
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    allowEmpty: false,
    len: [6, 1024]
  }
});

sequelize.sync();

module.exports = User;
