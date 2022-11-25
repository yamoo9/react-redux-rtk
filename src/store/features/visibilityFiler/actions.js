import { createAction } from '@reduxjs/toolkit';

export const showAll = createAction('filter/all');
export const showActived = createAction('filter/actived');
export const showCompleted = createAction('filter/completed');

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
