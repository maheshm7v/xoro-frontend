import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';

const URL = 'https://xoro-story.onrender.com/api/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await axios.get(URL);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add or update task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editTaskId) {
      await axios.put(`${URL}/${editTaskId}`, { title, description });
      setEditTaskId(null);
    } else {
      await axios.post(URL, { title, description });
    }
    setTitle('');
    setDescription('');
    fetchTasks();
  };

  // Edit a task
  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditTaskId(task._id);
  };

  // Delete a task
  const handleDelete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Manager</h1>

        <TaskForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
          editTaskId={editTaskId}
        />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <TaskList tasks={filteredTasks} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
