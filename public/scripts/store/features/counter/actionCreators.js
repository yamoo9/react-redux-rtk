import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './actionTypes.js';

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});
