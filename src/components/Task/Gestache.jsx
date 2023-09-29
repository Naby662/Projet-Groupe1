import React, { useState } from 'react';
import Task from './Task';
import { Link } from 'react-router-dom';
function Gestache() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // const editSelectedTask = (taskId, updatedTask) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === taskId ? updatedTask : task
  //   );
  //   setTasks(updatedTasks);
  //   setEditTask(null);
  // };

  // const deleteTask = (taskId) => {
  //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  // };

  return (
    <div className="w-full mx-auto p-4  bg-slate-600 mb-10 mt-10">
      <h1 className="text-2xl text-white font-bold mb-4">Liste  de tâches</h1>
      <div className="mb-4 flex gap-4">
         <input
          type="text"
          placeholder="Ajouter une tâche"
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
          <Link
            onClick={addTask}
            className="w-1/4  flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          >
            Ajouter
          </Link>
        )}
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            // onDelete={deleteTask}
            // onEdit={(taskId, updatedTask) => {
            //   setNewTask(updatedTask.text);
            //   setEditTask(updatedTask);
            // }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gestache;
