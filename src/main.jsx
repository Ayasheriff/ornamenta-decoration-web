import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.style.scss";
import AddToCartProvider from "./context/AddToCartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddToCartProvider>
      <App />
    </AddToCartProvider>
  </React.StrictMode>
);
