export const saveTasksToLocalStorage = (tasks: any) => {
    try {
      const serializedTasks = JSON.stringify(tasks);
      localStorage.setItem('tasks', serializedTasks);
    } catch (err) {
      console.error('Could not save tasks to localStorage', err);
    }
  };
  
  // Load tasks from localStorage
  export const loadTasksFromLocalStorage = () => {
    try {
      const serializedTasks = localStorage.getItem('tasks');
      if (serializedTasks === null) {
        return [];
      }
      return JSON.parse(serializedTasks);
    } catch (err) {
      console.error('Could not load tasks from localStorage', err);
      return [];
    }
  };
  
  // Clear tasks from localStorage (optional, in case you want to implement a clear feature)
  export const clearTasksFromLocalStorage = () => {
    try {
      localStorage.removeItem('tasks');
    } catch (err) {
      console.error('Could not clear tasks from localStorage', err);
    }
  };
  