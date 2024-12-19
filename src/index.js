import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new client API
import './App.css';
import App from './App';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
