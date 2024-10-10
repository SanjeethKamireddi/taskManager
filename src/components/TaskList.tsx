import React from 'react';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
          <div>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task.id)}
            />
            {task.text}
          </div>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
