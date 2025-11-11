import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
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

  const navStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
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
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/cart" style={linkStyle}>Carrito 🛒 ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</Link>
        </nav>
      </header>

      {successMessage && <div style={successStyle}>{successMessage}</div>}

      <Routes>
        <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ItemDetail onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart items={cartItems} onRemove={handleRemoveFromCart} />} />
      </Routes>
    </div>
  );
}
