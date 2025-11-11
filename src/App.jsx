import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"; // 👈 sin BrowserRouter
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

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

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #ddd",
  };

  return (
    <>
      <nav style={navStyle}>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito ({cartItems.length})</Link>
      </nav>

      {successMessage && (
        <p style={{ textAlign: "center", color: "green" }}>{successMessage}</p>
      )}

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
          element={<h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>}
        />
      </Routes>
    </>
  );
}


