import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import { useCart } from "./context/CartContext.jsx";
import UploadProducts9 from "./firebase/UploadProducts9.jsx";


export default function App() {
  const { totalItems } = useCart();

  return (
    <>
      {/* Agrego un LINK para poder entrar a /upload */}
      <div style={{ background: "#111", padding: "10px" }}>
        <Link to="/upload" style={{ color: "yellow", marginLeft: "20px" }}>
          SUBIR PRODUCTOS
        </Link>
      </div>

      <NavBar cartCount={totalItems()} />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/upload9" element={<UploadProducts9 />} />


        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>Página no encontrada 😢</h2>}
        />
      </Routes>
    </>
  );
}
