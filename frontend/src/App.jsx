import { useEffect, useState } from "react";
import "./App.css";

const API_URL = 
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
        }),
      });

      const newTask = await response.json();

      setTasks([...tasks, newTask]);
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Toggle task completion
  const toggleTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
      });

      const updatedTask = await response.json();

      setTasks(
        tasks.map((task) =>
          task.id === id ? updatedTask : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="app">
      <div className="task-container">
        <header>
          <h1>☁️ Cloud Task Manager</h1>
          <p>React.js • Node.js • AWS</p>
        </header>

        <div className="stats">
          <div>
            <span>Total</span>
            <strong>{tasks.length}</strong>
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </div>

          <div>
            <span>Remaining</span>
            <strong>{tasks.length - completedTasks}</strong>
          </div>
        </div>

        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <button type="submit">
            Add Task
          </button>
        </form>

        <div className="task-list">
          {loading ? (
            <p className="loading">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="loading">No tasks yet. Add one!</p>
          ) : (
            tasks.map((task) => (
              <div
                className={`task ${task.completed ? "completed" : ""}`}
                key={task.id}
              >
                <div
                  className="task-title"
                  onClick={() => toggleTask(task.id)}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    onClick={(event) => event.stopPropagation()}
                  />

                  <span>{task.title}</span>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;