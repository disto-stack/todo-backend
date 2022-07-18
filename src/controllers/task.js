const Task = require('../models/Task');

/**
 * Función para obtener todas las tareas guardadas en la base de datos
 */
const getTasks = async (req, res) => {
  const tasks = await Task.findAll();

  if (!tasks) {
    return res.status(500).json({
      ok: false,
    });
  }

  return res.status(200).json({
    ok: true,
    tasks,
  });
};

/**
 * Función para obtener una tarea, dado el is
 */
const getTaskById = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({
    where: { id },
  });

  if (!task) {
    return res.status(404).json({
      ok: false,
      message: 'task not found',
    });
  }

  return res.status(200).json({
    ok: true,
    task,
  });
};

/**
 * Función para crear una nueva tarea en la base de datos
 */
const createTask = async (req, res) => {
  try {
    await Task.create({
      ...req.body,
    });

    return res.status(200).json({
      ok: true,
      message: 'Task created',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Error creating task',
    });
  }
};

/**
 * Función para actualizar una tarea con cierto id, en la base de datos
 */
const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.update({ ...req.body }, { where: { id } });
    return res.status(200).json({
      ok: true,
      message: 'Task updated',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: 'Error updating task',
      error,
    });
  }
};

/**
 * Función para eliminar una tarea con cierto id, en la base de datos
 */
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.destroy({ where: { id } });
    return res.status(204).json({
      ok: true,
      message: 'Task deleted',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Error deleting task',
    });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
