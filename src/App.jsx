import React from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    margin: 0,
    padding: "2rem"
  };

  return (
    <div style={appStyle}>
      <h1 style={{ textAlign: "center", color: "#333" }}>ElectronicBit</h1>
      <ProductList />
    </div>
  );
}
