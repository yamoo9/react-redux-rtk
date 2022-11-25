import initialCartItems from './initialCartItems';
import { createSlice, createSelector } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: initialCartItems,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    increase(state, action) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    },
    decrease(state, action) {
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          .filter((item) => item.amount !== 0),
      };
    },
    remove(state, action) {
      return state + action.payload;
    },
    clearCart(state, action) {
      return {
        ...state,
        items: [],
      };
    },
    getCartItems(state, action) {
      return {
        ...state,
        items: initialCartItems,
      };
    },
    getCartTotal(state, action) {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );

      return {
        ...state,
        totalAmount: parseInt(totalAmount, 10),
        totalCount,
      };
    },
  },
});

export const {
  increase,
  decrease,
  remove,
  clearCart,
  getCartItems,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectItems = createSelector(
  (state) => state.items,
  (items) => items
);

export const selectTotalAmount = createSelector(
  (state) => state.totalAmount,
  (totalAmount) => totalAmount
);

export const selectTotalCount = createSelector(
  (state) => state.totalCount,
  (totalCount) => totalCount
);
