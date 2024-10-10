
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/task';

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    toggleComplete: (id: string) => void;
    filter: 'all' | 'completed' | 'incomplete';
    setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

    const addTask = (task: Task) => {
        setTasks(prev => [...prev, task]);
    };

    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const toggleComplete = (id: string) => {
        setTasks(prev => 
            prev.map(task =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const value = { tasks, addTask, deleteTask, toggleComplete, filter, setFilter };

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};
