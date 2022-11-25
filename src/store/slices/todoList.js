import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        ...action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, toggleTodo } = slice.actions;

export default slice.reducer;

/* select function ---------------------------------------------------------- */

export const selectTodoList = createSelector(
  (state) => state.todoList,
  (todoList) => todoList
);

export const selectTodoIds = createSelector(selectTodoList, (todoList) =>
  todoList.map((todo) => todo.id)
);

export const selectCompletedTodos = createSelector(selectTodoList, (todoList) =>
  todoList.filter((todo) => todo.completed)
);
