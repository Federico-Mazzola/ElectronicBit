import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, description, image, onAddToCart }) {
    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1rem",
        margin: "1rem",
        width: "220px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
    };

    const imgStyle = {
        width: "100%",
        borderRadius: "8px",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "0.5rem",
    };

    const linkStyle = {
        display: "inline-block",
        marginTop: "0.5rem",
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>${price}</strong></p>

            {/* Botón para agregar al carrito */}
            <button
                style={buttonStyle}
                onClick={() => onAddToCart({ id, name, price, quantity: 1 })}
            >
                Agregar al carrito
            </button>

            {/* Enlace al detalle del producto */}
            <br />
            <Link to={`/product/${id}`} style={linkStyle}>
                Ver detalle
            </Link>
        </div>
    );
}
