import React, { useState } from 'react';
import { useTasks } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; 



const App: React.FC = () => {
  const { tasks, toggleComplete, deleteTask } = useTasks();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  // Function to handle filter changes
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value as 'all' | 'completed' | 'incomplete');
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    const matchesSearchQuery = task.text.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === 'completed') return task.isCompleted && matchesSearchQuery;
    if (filter === 'incomplete') return !task.isCompleted && matchesSearchQuery;
    return matchesSearchQuery; // 'all'
  });

  return (
    <div className="app">
      <h1>Today</h1>
  
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
  
      <div className="filter-options" style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="radio"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
  
        <label style={{ marginLeft: '1rem' }}>
          <input
            type="radio"
            value="completed"
            checked={filter === 'completed'}
            onChange={handleFilterChange}
          />
          Completed
        </label>
  
        <label style={{ marginLeft: '1rem' }}>
          <input
            type="radio"
            value="incomplete"
            checked={filter === 'incomplete'}
            onChange={handleFilterChange}
          />
          Incomplete
        </label>
      </div>
  
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <TaskForm />
    </div>
  );
  

};

export default App;
