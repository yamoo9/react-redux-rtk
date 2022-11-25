import { createReducer } from '@reduxjs/toolkit';
import { addTodo, toggleTodo } from './actions';

const initialState = [];

export const reducer = createReducer(initialState, {
  [addTodo.type]: (state, action) => {
    state.push({
      ...action.payload,
      completed: false,
    });
  },
  [toggleTodo.type]: (state, action) => {
    const todo = state.find((todo) => todo.id === action.payload);
    todo.completed = !todo.completed;
  },
});
