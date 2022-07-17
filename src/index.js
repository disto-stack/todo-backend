const express = require('express');
const app = express();

const cors = require('cors');

const sequelize = require('./database/config');
sequelize.sync().then(() => {
  console.log('Db running');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Server running');
});
