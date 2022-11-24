import { combineReducers } from '../libs/redux.min.js';
import counterReducer from './features/counter/counter.slice.js';
import cartReducer from './features/cart/cart.slice.js';

const rootReducer = combineReducers({
  count: counterReducer,
  cart: cartReducer,
});

export default rootReducer;
