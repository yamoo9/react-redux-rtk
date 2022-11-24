/* -------------------------------------------------------------------------- */
/* Action Types                                                               */
/* -------------------------------------------------------------------------- */

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';
const INCREMENT_BY_AMOUNT = 'counter/increment_by_amount';

/* -------------------------------------------------------------------------- */
/* Intial State                                                               */
/* -------------------------------------------------------------------------- */

export const initialCount = 0;

/* -------------------------------------------------------------------------- */
/* Reducer                                                                    */
/* -------------------------------------------------------------------------- */

export default function reducer(state = initialCount, action) {
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
}

/* -------------------------------------------------------------------------- */
/* Action Creators                                                            */
/* -------------------------------------------------------------------------- */

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});
