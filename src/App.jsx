import React from "react";

export default function App() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>ElectronicBit</h1>
      <p>ElectronicBit — Coderhouse 💻</p>
    </div>
  );
}
