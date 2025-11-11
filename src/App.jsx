import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // 🔹 Recuperar carrito desde localStorage al cargar
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // 🔹 Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔹 Agregar producto al carrito
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

  // 🔹 Estilos del menú
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #ddd",
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito ({cartItems.length})</Link>
      </nav>

      {successMessage && (
        <p style={{ textAlign: "center", color: "green" }}>{successMessage}</p>
      )}

      <Routes>
        {/* 📦 Catálogo principal */}
        <Route
          path="/"
          element={<ItemListContainer onAddToCart={handleAddToCart} />}
        />

        {/* 🧾 Detalle del producto */}
        <Route
          path="/product/:id"
          element={<ItemDetailContainer onAddToCart={handleAddToCart} />}
        />

        {/* 🚫 Página no encontrada */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
