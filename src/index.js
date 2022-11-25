import 'styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'store/store';
import App from './App';

const container = createRoot(document.getElementById('root'));

container.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
