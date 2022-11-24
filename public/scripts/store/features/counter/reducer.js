import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './actionTypes.js';

export const initialCount = 0;

export const reducer = (state = initialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_BY_AMOUNT:
      return state + action.payload;
    default:
      return state;
  }
};
