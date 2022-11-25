import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todoList/add', (doit) => ({
  payload: {
    id: uuid(),
    doit,
  },
}));

export const toggleTodo = createAction('todoList/toggle');
