const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const taskById = await Task.findById(req.params.id);
    if (!taskById) {
      return res
        .status(404)
        .json({ message: `No task with id: ${req.params.id}` });
    }
    res.status(201).json({ taskById });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const idParam = req.params.id;

    const task = await Task.findOneAndUpdate({ _id: idParam }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const removeTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No task with id: ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  removeTask,
};
