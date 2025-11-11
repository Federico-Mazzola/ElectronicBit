import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

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

  // 🔹 Vaciar carrito
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // 🔹 Estilos del navbar
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.8rem 2rem",
    backgroundColor: "#111",
    color: "#fff",
    borderBottom: "2px solid #222",
  };

  const logoStyle = {
    fontSize: "1.6rem",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const cartStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <nav style={navStyle}>
        {/* 🔹 Logo ElectronicBit */}
        <Link to="/" style={logoStyle}>
          <span style={{ color: "#fff" }}>Electronic</span>
          <span style={{ color: "#00bcd4" }}>Bit</span>
        </Link>

        {/* 🔹 Carrito con ícono y contador */}
        <Link to="/cart" style={cartStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
            alt="Carrito"
            style={{ width: "25px", height: "25px", filter: "invert(100%)" }}
          />
          <span style={{ fontSize: "1rem" }}>({cartItems.length})</span>
        </Link>
      </nav>

      {/* 🔹 Mensaje de confirmación */}
      {successMessage && (
        <p style={{ textAlign: "center", color: "green" }}>{successMessage}</p>
      )}

      {/* 🔹 Rutas */}
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ItemDetailContainer onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onClearCart={handleClearCart} />}
        />
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>
          }
        />
      </Routes>
    </div>
  );
}

//final