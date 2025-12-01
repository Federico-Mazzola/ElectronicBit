import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

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

  return (
    <BrowserRouter>
      {/* 🔹 NavBar separado */}
      <NavBar cartCount={cartItems.length} />

      {/* 🔹 Mensaje de confirmación */}
      {successMessage && (
        <p style={{ textAlign: "center", color: "green" }}>
          {successMessage}
        </p>
      )}

      {/* 🔹 Rutas */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<ItemListContainer onAddToCart={handleAddToCart} />}
        />

        {/* Categorías */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer onAddToCart={handleAddToCart} />}
        />

        {/* Detalle del producto */}
        <Route
          path="/item/:id"
          element={<ItemDetailContainer onAddToCart={handleAddToCart} />}
        />

        {/* Carrito */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onClearCart={handleClearCart} />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
}
