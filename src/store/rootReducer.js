import { combineReducers } from 'redux';
import counterReducer from 'features/counter/counter.slice';
import cartReducer from 'features/cart/cart.slice';

export const rootReducer = combineReducers({
  count: counterReducer,
  cart: cartReducer,
});
