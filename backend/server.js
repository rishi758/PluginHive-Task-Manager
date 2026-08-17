const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Temporary task storage
let tasks = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Build Node.js API",
    completed: true,
  },
];

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Cloud Task Manager API is running!",
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "Cloud Task Manager API",
  });
});

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// POST a new task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Task title is required",
    });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// UPDATE task completion status
app.put("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.completed = !task.completed;

  res.json(task);
});

// DELETE a task
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const taskExists = tasks.some((task) => task.id === taskId);

  if (!taskExists) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  tasks = tasks.filter((task) => task.id !== taskId);

  res.json({
    message: "Task deleted successfully",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});