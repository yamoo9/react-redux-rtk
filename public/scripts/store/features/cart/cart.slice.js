import initialCartItems from './initialCartItems.js';

/* -------------------------------------------------------------------------- */
/* Action Types                                                               */
/* -------------------------------------------------------------------------- */

export const INCREASE = 'cart/increase';
export const DECREASE = 'cart/decrease';
export const REMOVE = 'cart/remove';
export const CLEAR_CART = 'cart/clearCart';
export const GET_CART_ITEMS = 'cart/getCartItems';
export const GET_CART_TOTAL = 'cart/getCartTotal';

/* -------------------------------------------------------------------------- */
/* Intial State                                                               */
/* -------------------------------------------------------------------------- */

export const initialCart = {
  items: initialCartItems,
  totalAmount: 0,
  totalCount: 0,
};

/* -------------------------------------------------------------------------- */
/* Reducer                                                                    */
/* -------------------------------------------------------------------------- */

export default function reducer(state = initialCart, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    case DECREASE:
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          .filter((item) => item.amount !== 0),
      };
    case REMOVE:
      return state + action.payload;
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        items: cartItems,
      };
    case GET_CART_TOTAL:
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );

      return {
        ...state,
        totalAmount: parseInt(totalAmount, 10),
        totalCount,
      };
    default:
      return state;
  }
}

/* -------------------------------------------------------------------------- */
/* Action Creators                                                            */
/* -------------------------------------------------------------------------- */

export const increase = (id) => ({ type: INCREASE, payload: id });
export const decrease = (id) => ({ type: DECREASE, payload: id });
export const remove = (id) => ({ type: REMOVE, payload: id });
export const clearCart = () => ({ type: CLEAR_CART });
export const getCartItems = () => ({ type: GET_CART_ITEMS });
export const getCartTotal = () => ({ type: GET_CART_TOTAL });
