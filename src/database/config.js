/**
 * La base de datos utilizada es sqlite3 y se accederá a ella por medio del
 * ORM Sequelize
 *
 * Abajo se nota la configuración según la documentación oficial de sequelize
 * (https://sequelize.org/docs/v6/)
 */

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/tasks.sqlite',
});

module.exports = sequelize;
