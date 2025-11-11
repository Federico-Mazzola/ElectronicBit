import React from "react";

export default function ProductCard({ name, price, description, image, onAdd }) {
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

    const imgStyle = { width: "100%", borderRadius: "8px" };
    const titleStyle = { fontSize: "1.1rem", margin: "0.5rem 0" };
    const priceStyle = { fontWeight: "bold", color: "#2b7a0b" };

    const buttonStyle = {
        backgroundColor: "#2b7a0b",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        marginTop: "0.5rem"
    };

    const handleAdd = () => {
        onAdd(); // ejecuta la función enviada desde el padre
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <h3 style={titleStyle}>{name}</h3>
            <p>{description}</p>
            <p style={priceStyle}>${price}</p>
            <button style={buttonStyle} onClick={handleAdd}>
                Agregar al carrito
            </button>
        </div>
    );
}
