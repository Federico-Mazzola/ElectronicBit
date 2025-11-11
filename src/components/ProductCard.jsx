import React, { useState } from "react";

export default function ProductCard({ name, price, description, image, onAddToCart }) {
    const [count, setCount] = useState(1);

    // 🔹 Estilos
    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1rem",
        width: "220px",
        margin: "15px",
        textAlign: "center",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        transition: "transform 0.2s",
    };

    const imgStyle = {
        width: "100%",
        borderRadius: "8px",
        marginBottom: "0.5rem",
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
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        fontSize: "1.2rem",
    };

    const counterText = {
        fontWeight: "bold",
        fontSize: "1.1rem",
    };

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAdd = () => {
        onAddToCart({ name, price, description, image, quantity: count });
        setCount(1);
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <h3 style={titleStyle}>{name}</h3>
            <p>{description}</p>
            <p style={priceStyle}>${price}</p>

            <div style={counterContainer}>
                <button onClick={handleDecrease} style={counterButton}>−</button>
                <span style={counterText}>{count}</span>
                <button onClick={handleIncrease} style={counterButton}>+</button>
            </div>

            <button style={btnStyle} onClick={handleAdd}>
                Agregar al carrito
            </button>
        </div>
    );
}
