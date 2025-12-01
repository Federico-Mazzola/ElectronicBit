import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

// CartContext
import { useCart } from "./context/CartContext";

// UploadProducts temporal (solo para subir productos a Firestore)
import UploadProducts from "./firebase/UploadProducts";

export default function App() {
  // Estado global del carrito
  const { totalItems } = useCart();

  return (
    <>
      {/* Navbar recibe la cantidad de items del carrito */}
      <NavBar cartCount={totalItems()} />

      {/* Rutas */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Categorías */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {/* Detalle de producto */}
        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

        {/* Carrito */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Ruta temporal para subir productos a Firestore */}
        <Route
          path="/upload"
          element={<UploadProducts />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center" }}>
              Página no encontrada 😢
            </h2>
          }
        />
      </Routes>
    </>
  );
}
