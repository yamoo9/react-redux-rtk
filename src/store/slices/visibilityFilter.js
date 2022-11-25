import { createSelector, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'visibilityFilter',
  initialState: '',
  reducers: {
    showAll(state, action) {
      return action.type;
    },
    showActived(state, action) {
      return action.type;
    },
    showCompleted(state, action) {
      return action.type;
    },
  },
});

export const { showAll, showActived, showCompleted } = slice.actions;

export const setVisibilityFilter = (filter) => {
  switch (filter) {
    default:
    case showAll.type:
      return showAll();
    case showActived.type:
      return showActived();
    case showCompleted.type:
      return showCompleted();
  }
};

export default slice.reducer;

/* select function ---------------------------------------------------------- */

export const selectVisibilityFilter = createSelector(
  (state) => state.visibilityFilter,
  (visibilityFilter) => visibilityFilter
);
