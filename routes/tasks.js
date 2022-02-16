const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  removeTask,
} = require("../controllers/TaskController");

router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/:id").get(getTaskById).patch(updateTask).delete(removeTask);

module.exports = router;
