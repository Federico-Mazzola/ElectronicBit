import React, { useState } from "react";

export default function ProductCard({ name, price, description, image, onAddToCart }) {
    const [count, setCount] = useState(1);

    // 🔹 Estilos inline
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "1rem",
        width: "220px",
        margin: "10px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
    };

    const imgStyle = {
        width: "100%",
        borderRadius: "8px",
    };

    const titleStyle = {
        fontSize: "1.1rem",
        margin: "0.5rem 0",
    };

    const priceStyle = {
        fontWeight: "bold",
        color: "#2b7a0b",
    };

    const btnStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "0.5rem 0.8rem",
        cursor: "pointer",
        marginTop: "0.5rem",
    };

    const counterContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "0.5rem",
    };

    const counterButton = {
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "30px",
        height: "30px",
        cursor: "pointer",
    };

    // 🔸 Funciones
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAdd = () => {
        onAddToCart({ name, price, description, image, quantity: count });
        setCount(1); // reset contador
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <h3 style={titleStyle}>{name}</h3>
            <p>{description}</p>
            <p style={priceStyle}>${price}</p>

            <div style={counterContainer}>
                <button onClick={handleDecrease} style={counterButton}>−</button>
                <span>{count}</span>
                <button onClick={handleIncrease} style={counterButton}>+</button>
            </div>

            <button style={btnStyle} onClick={handleAdd}>
                Agregar al carrito
            </button>
        </div>
    );
}
