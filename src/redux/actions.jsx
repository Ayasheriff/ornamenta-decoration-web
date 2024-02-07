export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY';
export const DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const increaseItemQuantity = (itemId) => ({
  type: INCREASE_ITEM_QUANTITY,
  payload: itemId,
});

export const decreaseItemQuantity = (itemId) => ({
  type: DECREASE_ITEM_QUANTITY,
  payload: itemId,
});
