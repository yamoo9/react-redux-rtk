import { createReducer } from '@reduxjs/toolkit';
import { showAll, showActived, showCompleted } from './actions';

const initialState = showAll.type;

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showAll.type, (state, action) => action.type)
    .addCase(showActived.type, (state, action) => action.type)
    .addCase(showCompleted.type, (state, action) => action.type)
    .addDefaultCase((state, action) => showAll.type);
});
