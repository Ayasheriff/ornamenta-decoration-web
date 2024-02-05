import axios from "axios";
import { createContext, useState } from "react";

export const AddToCartContext = createContext();

function AddToCartProvider({ children }) {
  const [addToCart, setAddToCart] = useState([]);
  async function addToCartFetchData(data) {
    const res = await axios.post("http://localhost:8000/cart", data);
    console.log("res::", res);
    setAddToCart((prevCart) => [...prevCart, res.data]);

  }
  function removeFromCart(itemId) {
    // Assuming each item in the cart has a unique 'id'
    setAddToCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }
  return (
    <AddToCartContext.Provider value={{ addToCartFetchData ,removeFromCart,addToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
}
export default AddToCartProvider;
