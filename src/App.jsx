import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      // Buscar si el producto ya está en el carrito
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // Si ya existe, aumentar cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, agregarlo con quantity = 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    // Mostrar mensaje temporal
    setSuccessMessage(`${product.name} agregado al carrito ✅`);
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    padding: "2rem",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "10px",
    marginBottom: "1rem",
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
        <p>🛒 Carrito: {cartItems.reduce((acc, i) => acc + i.quantity, 0)}</p>
      </header>

      {successMessage && <div style={successStyle}>{successMessage}</div>}

      <ProductList onAddToCart={handleAddToCart} />
      <Cart items={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
}
