import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY } from './actions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
