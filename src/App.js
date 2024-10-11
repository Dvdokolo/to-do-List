import { useState, useEffect } from 'react';

import './App.css'; // Optional for adding your custom styles

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Add task
  const addTask = () => {
    if (input.trim()) {
      const newTask = { id: Date.now(), text: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput(''); // Clear input after adding
    }
  };

  // choose between pending and completed
  const toggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete 
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
       <h1>To-Do List</h1>
      
      {/* Task input section */}
      <div className="task-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-task-btn">Add Task</button>
      </div>

      {/* Task list section */}
      <div className="task-list-container">
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <input type="checkbox" checked={task.completed} onChange={() => toggleStatus(task.id)}/>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
