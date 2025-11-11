import React from "react";

export default function Cart({ items }) {
    const cartStyle = {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        margin: "2rem auto",
    };

    const itemStyle = {
        borderBottom: "1px solid #ddd",
        padding: "0.5rem 0",
    };

    const emptyStyle = {
        textAlign: "center",
        color: "#888",
        fontStyle: "italic",
    };

    return (
        <div style={cartStyle}>
            <h3>🛍️ Tu Carrito</h3>
            {items.length === 0 ? (
                <p style={emptyStyle}>Todavía no agregaste productos</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {items.map((item, i) => (
                        <li key={i} style={itemStyle}>
                            <strong>{item.name}</strong> — ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
