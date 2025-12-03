import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

import { useCart } from "./context/CartContext";

// 👉 Import corregido con la extensión .jsx
import UploadProducts from "./firebase/UploadProducts.jsx";

export default function App() {
  const { totalItems } = useCart();

  return (
    <>
      <NavBar cartCount={totalItems()} />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />

        {/* Ruta temporal para cargar productos */}
        <Route path="/upload" element={<UploadProducts />} />

        <Route path="*" element={<h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>} />
      </Routes>
    </>
  );
}
