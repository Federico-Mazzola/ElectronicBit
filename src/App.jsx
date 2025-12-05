// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/checkout/CheckOut.jsx";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Categorías */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Detalle */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>
              Página no encontrada 😢
            </h2>
          }
        />
      </Routes>
    </>
  );
}
