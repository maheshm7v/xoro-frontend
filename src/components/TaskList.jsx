// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
