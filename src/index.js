import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider } from './contexts/counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
