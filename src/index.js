import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import 'styles/global.css';
import store from 'store';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Toaster position="top-center" />
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </Router>
  </StrictMode>
);
