import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from 'features/counter/counter.slice';
import cartReducer from 'features/cart/cart.slice';
import postsReducer from 'features/posts/posts.slice';

const store = configureStore({
  reducer: {
    count: counterReducer,
    cart: cartReducer,
    posts: postsReducer,
  },
  devTools: true,
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
