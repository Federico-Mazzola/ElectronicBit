import React, { useState } from "react";

export default function ItemDetail({ name, description, price, image, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
    };

    const imgStyle = {
        width: "300px",
        borderRadius: "10px",
        marginBottom: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    };

    const buttonContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "1rem",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        fontSize: "1rem",
    };

    const qtyButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#ddd",
        color: "#000",
        width: "2rem",
        height: "2rem",
    };

    return (
        <div style={containerStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p><strong>${price}</strong></p>

            {/* Contador simple de cantidad */}
            <div style={buttonContainerStyle}>
                <button
                    style={qtyButtonStyle}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                    −
                </button>
                <span>{quantity}</span>
                <button style={qtyButtonStyle} onClick={() => setQuantity((q) => q + 1)}>
                    +
                </button>
            </div>

            {/* Botón para agregar al carrito */}
            <button
                style={{ ...buttonStyle, marginTop: "1rem" }}
                onClick={() => onAddToCart({ name, price, quantity })}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

