import React, { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  // 🧠 Estado global del carrito
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
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
        <p>🛒 Carrito: {cartCount}</p>
      </header>

      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}
