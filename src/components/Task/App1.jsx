import React, { useState } from 'react';
import Task from './Task';

function App1() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editSelectedTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-600 mb-10 mt-10">
      <h1 className="text-2xl text-white font-bold mb-4">Gestionnaire de tâches</h1>
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full flex-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
        />
        {editTask ? (
          <button
            onClick={() => editSelectedTask(editTask.id, { ...editTask, text: newTask })}
            className="mt-2  bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          >
            Modifier
          </button>
        ) : (
          <button
            onClick={addTask}
            className="mt-2 flex-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          >
            Ajouter
          </button>
        )}
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={(taskId, updatedTask) => {
              setNewTask(updatedTask.text);
              setEditTask(updatedTask);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App1;
