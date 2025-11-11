import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // 🧩 1. Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // 💾 2. Guardar carrito cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ➕ Agregar producto (manteniendo cantidades)
  const handleAddToCart = (product) => {
  setCartItems((prev) => {
    const existing = prev.find((item) => item.name === product.name);

    if (existing) {
      // Si ya existe, sumamos la cantidad
      return prev.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      return [...prev, product];
    }
  });

  setSuccessMessage(`${product.name} agregado al carrito ✅`);
  setTimeout(() => setSuccessMessage(""), 2000);
};

  // ❌ Eliminar producto
  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🎨 Estilos
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
