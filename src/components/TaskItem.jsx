// components/TaskItem.js
import React from "react";

const TaskItem = ({ task, handleEdit, handleDelete }) => {
  return (
    <li className="bg-gray-50 px-4 py-3 rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <p className="text-gray-500">{task.description}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => handleEdit(task)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
