const validateTodo = require("../types/todo.types");
const Todo = require("../models/todo.model");

async function createTodo(req, res) {
  const { title, description, status } = req.body;
  if (!title || !description || !status) {
    return res.status(400).json({
      message: "Todo fields is missing",
    });
  }
  const isTodoValidate = validateTodo.safeParse({ title, description, status });
  if (!isTodoValidate.success) {
    return res.status(403).json({
      message: "Input validation failed for todo fields",
    });
  }
  const newTodo = await Todo.create({
    title,
    description,
    status,
  });
  await newTodo.save();
  return res.status(200).json({
    message: "Todo created successfully",
    newTodo: newTodo,
  });
}

async function getTodos(req, res) {
  const todos = await Todo.find({});
  return res.status(200).json({
    message: "All todo list fetched",
    todos: todos,
  });
}

async function updateTodo(req, res) {
  const updatedtodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json({
    message: "Updated successfully",
    updatedtodo: updatedtodo,
  });
}

async function deleteTodo(req, res) {
  const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: "Todo deleted successfully",
  });
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
