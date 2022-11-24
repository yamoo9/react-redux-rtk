import { createStore } from '../likeRedux/index.js';
import rootReducer from './rootReducer.js';

const store = createStore(rootReducer);

export default store;
