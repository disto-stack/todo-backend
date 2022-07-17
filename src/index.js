const express = require('express');
const app = express();

const cors = require('cors');

const sequelize = require('./database/config');
sequelize.sync().then(() => {
  console.log('Db running');
});

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('./controllers/task');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/task', getTasks);
app.post('/api/task', createTask);
app.put('/api/task/:id', updateTask);
app.delete('/api/task/:id', deleteTask);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Server running on http://localhost:3000');
});
