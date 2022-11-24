import 'styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from 'store/store';
import App from './App';

const container = createRoot(document.getElementById('root'));

function render() {
  container.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

render();
store.subscribe(render);
