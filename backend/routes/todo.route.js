const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth, createTodo);
router.get("/", auth, getTodos);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;
