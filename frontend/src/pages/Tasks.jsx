import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://scaling-umbrella-g4wj69j5g66q2pww7-3000.app.github.dev/api/tasks";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL, config);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      setMessage("Unable to load tasks");
    }
  };

  useEffect(() => {
    if (!token) {
      setMessage("Please login first");
      return;
    }

    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      await axios.post(
        API_URL,
        {
          title: title
        },
        config
      );

      setTitle("");
      setMessage("Task added successfully");
      fetchTasks();
    } catch (error) {
      console.error(error);
      setMessage("Failed to add task");
    }
  };

  const toggleTask = async (task) => {
    try {
      await axios.put(
        `${API_URL}/${task._id}`,
        {
          title: task.title,
          completed: !task.completed
        },
        config
      );

      fetchTasks();
    } catch (error) {
      console.error(error);
      setMessage("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, config);

      setMessage("Task deleted successfully");
      fetchTasks();
    } catch (error) {
      console.error(error);
      setMessage("Failed to delete task");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>

      {message && <p>{message}</p>}

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <br />

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={() => setFilter("completed")}>Completed</button>

      <h2>Tasks</h2>

      {filteredTasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        filteredTasks.map((task) => (
          <div key={task._id}>
            <p>
              {task.title} —{" "}
              {task.completed ? "Completed" : "Pending"}
            </p>

            <button onClick={() => toggleTask(task)}>
              {task.completed ? "Mark Pending" : "Complete"}
            </button>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Tasks;
