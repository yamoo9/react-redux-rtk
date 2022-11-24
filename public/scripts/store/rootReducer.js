import { combineReducers } from '../likeRedux/index.js';
import { reducer as counterReducer } from './features/counter/index.js';

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;
