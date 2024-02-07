// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart, decreaseItemQuantity, increaseItemQuantity, removeFromCart } from "../../redux/actions";

const Cart = () => {
// const [state, setState]= useState({});
// console.log(setState);
// const dispatch =useDispatch();
  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* <ul>
        {state.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} 
            <button onClick={() => dispatch(increaseItemQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addToCart({ id: 1, name: 'Item', quantity: 1 }))}>Add Item</button> */}
    </div>
  );
};

export default Cart;
