import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import { useCart } from "./context/CartContext.jsx";

export default function App() {
  const { totalItems } = useCart();

  return (
    <>
      {/* NavBar siempre arriba */}
      <NavBar cartCount={totalItems()} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Categorías */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Detalle */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>
          }
        />
      </Routes>
    </>
  );
}
