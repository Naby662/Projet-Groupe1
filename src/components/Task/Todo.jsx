import React from 'react';
import { Link } from 'react-router-dom';

function Todo({ task, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 my-2 cursor-pointer rounded-lg shadow-md">
      <div>
        <Link >
        <input
          type="checkbox"
          checked={task?.completed}
          onChange={() => onEdit(task.id, { ...task, completed: !task.completed })}
          className="mr-2"
        />
        </Link>
        {task.text}
      </div>
       <div className='flex gap-3'>
        <button
          onClick={() => onDelete(task.id)}
          className="mt-2  bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Supprimer
        </button>
        <button
          onClick={() => onEdit(task.id, task)}
          className="mt-2  bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Modifier
        </button>
      </div>
      
    </div>

  );
}

export default Todo;





