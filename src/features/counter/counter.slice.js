import { createSlice, createSelector } from '@reduxjs/toolkit';

/* -------------------------------------------------------------------------- */
/* Counter Slice                                                              */
/* -------------------------------------------------------------------------- */

const counterSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return (state += 1);
    },
    decrement(state, action) {
      return (state -= 1);
    },
    incrementByAmount(state, action) {
      return (state += action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCount = createSelector(
  (state) => state.count,
  (count) => count
);
