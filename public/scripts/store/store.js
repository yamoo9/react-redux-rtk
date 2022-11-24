import { createStore } from '../libs/redux.min.js';
import rootReducer from './rootReducer.js';

const store = createStore(rootReducer);

export default store;
