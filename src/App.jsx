import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]); // guarda los productos

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    margin: 0,
    padding: "2rem"
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "10px"
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1>ElectronicBit</h1>
        <p>🛒 Carrito: {cartItems.length}</p>
      </header>

      <ProductList onAddToCart={handleAddToCart} />
      <Cart items={cartItems} />
    </div>
  );
}
