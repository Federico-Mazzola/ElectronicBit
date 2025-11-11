import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, description, image, onAddToCart }) {
    const [count, setCount] = useState(1);

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAdd = () => {
        onAddToCart({ id, name, price, description, image, quantity: count });
        setCount(1);
    };

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

    const btnStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "0.5rem 0.8rem",
        cursor: "pointer",
        marginTop: "0.5rem",
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={{ color: "#2b7a0b", fontWeight: "bold" }}>${price}</p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <button onClick={handleDecrease}>−</button>
                <span>{count}</span>
                <button onClick={handleIncrease}>+</button>
            </div>

            <button style={btnStyle} onClick={handleAdd}>Agregar al carrito</button>
            <br />
            <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                <button style={{ ...btnStyle, backgroundColor: "#555" }}>Ver Detalle</button>
            </Link>
        </div>
    );
}
