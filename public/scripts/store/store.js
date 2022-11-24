import { createStore } from '../libs/redux.min.js';
import { devTools } from '../libs/devTools.js';
import rootReducer from './rootReducer.js';

const store = createStore(
  rootReducer,
  devTools({
    trace: true,
    traceLimit: 20,
  })
);

export default store;
