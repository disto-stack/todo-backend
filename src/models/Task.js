const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Task = sequelize.define('task', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  author: DataTypes.TEXT,
  state: DataTypes.ENUM('pending', 'completed'),
});

module.exports = Task;
