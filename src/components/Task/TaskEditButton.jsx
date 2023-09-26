import React from 'react';

function TaskEditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Modifier
    </button>
  );
}

export default TaskEditButton;
