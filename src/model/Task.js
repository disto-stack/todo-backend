const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Task = sequelize.define('task', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  creator: DataTypes.TEXT,
  state: DataTypes.ENUM('pending', 'completed'),
});

module.exports = Task;
