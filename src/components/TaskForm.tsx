import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText) return;
    addTask({ id: Date.now().toString(), text: taskText, isCompleted: false });
    setTaskText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit" className = "add-task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
