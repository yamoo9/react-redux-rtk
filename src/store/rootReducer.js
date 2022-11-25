import { combineReducers } from 'redux';
import counterReducer from 'features/counter/counter.slice';
import cartReducer from 'features/cart/cart.slice';
import postsReducer from 'features/posts/posts.slice';

export const rootReducer = combineReducers({
  count: counterReducer,
  cart: cartReducer,
  posts: postsReducer,
});
