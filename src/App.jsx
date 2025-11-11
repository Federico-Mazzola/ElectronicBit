// src/App.jsx
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // mensaje temporal

  // Agrega producto (si ya existe por id de catálogo, lo permite; si querés evitar duplicados, deberías comprobar...)
  const handleAddToCart = (product) => {
    // crear copia con id único para cada instancia agregada (si el product.id es único por catálogo, podrías usarlo)
    const item = { ...product, id: Date.now() + Math.floor(Math.random() * 1000) };
    setCartItems(prev => [...prev, item]);

    // Mensaje de éxito temporal (2s)
    setSuccessMessage(`${product.name} agregado al carrito ✅`);
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  // Eliminar por id único
  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
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
    borderRadius: "10px",
    marginBottom: "1rem"
  };

  const successStyle = {
    maxWidth: "600px",
    margin: "0.75rem auto",
    padding: "0.6rem 1rem",
    backgroundColor: "#e6ffed",
    color: "#1f7a2a",
    border: "1px solid #c7f0d0",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1>ElectronicBit</h1>
        <p>🛒 Carrito: {cartItems.length}</p>
      </header>

      {/* Mensaje de éxito temporal */}
      {successMessage && <div style={successStyle}>{successMessage}</div>}

      <ProductList onAddToCart={handleAddToCart} />
      <Cart items={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
}
