/**
 * Esta REST Api está hecha en NodeJs con express framework, la palicación está
 * organizada bajo un patrón MVC
 */

const express = require('express');
const app = express();

const cors = require('cors');

// Se inicializa y se corre la base de datos en sqlite
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

// Middlewares para configurar cors y parsear correctamente el body de la request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas o endpoints de la api
app.get('/api/task', getTasks);
app.post('/api/task', createTask);
app.put('/api/task/:id', updateTask);
app.delete('/api/task/:id', deleteTask);

// Pone en funcionamoento el servidor, en este caso, es en el puerto 3000
app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Server running on http://localhost:3000');
});
