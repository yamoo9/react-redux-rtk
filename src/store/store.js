import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
