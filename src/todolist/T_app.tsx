import React, { useState } from "react";
import TodoInput from "./todolist"; // Adjust the import path as necessary
import "./style.css"; // Assuming you have a styles.css for basic styling

interface Task {
  id: number;
  text: string;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    if (task.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      text: task,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">React To-Do List</h1>

      <TodoInput onAdd={addTask} />

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}