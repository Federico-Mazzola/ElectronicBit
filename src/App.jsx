import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

// CartContext
import { useCart } from "./context/CartContext";

export default function App() {
  // Estado global del carrito
  const { cart, totalItems } = useCart();

  return (
    <>
      {/* NavBar recibe la cantidad desde el contexto */}
      <NavBar cartCount={totalItems()} />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

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
