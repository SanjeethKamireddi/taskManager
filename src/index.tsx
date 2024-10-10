import ReactDOM from 'react-dom/client';
import { TaskProvider } from './context/TaskContext';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <TaskProvider>
            <App />
        </TaskProvider>
    );
} else {
    console.error("Root element not found");
}

