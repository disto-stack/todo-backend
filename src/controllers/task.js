const Task = require('../models/Task');

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

const updateTask = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

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
  createTask,
  updateTask,
  deleteTask,
};
