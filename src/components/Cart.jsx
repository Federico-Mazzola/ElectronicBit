// src/components/Cart.jsx
import React from "react";

export default function Cart({ items, onRemove }) {
    const cartStyle = {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "2rem auto",
    };

    const itemStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        padding: "0.5rem 0",
    };

    const nameStyle = { fontWeight: "600" };
    const priceStyle = { color: "#2b7a0b", fontWeight: "700" };

    const btnStyle = {
        backgroundColor: "#ff4d4f",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "0.4rem 0.6rem",
        cursor: "pointer",
    };

    // Total: suma de precios
    const total = items.reduce((acc, it) => acc + Number(it.price), 0);

    return (
        <div style={cartStyle}>
            <h3>🛍️ Tu Carrito</h3>

            {items.length === 0 ? (
                <p style={{ textAlign: "center", color: "#888", fontStyle: "italic" }}>
                    Todavía no agregaste productos
                </p>
            ) : (
                <>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {items.map((item) => (
                            <li key={item.id} style={itemStyle}>
                                <div>
                                    <div style={nameStyle}>{item.name}</div>
                                    <div style={{ fontSize: "0.85rem", color: "#666" }}>{item.description}</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                                    <div style={priceStyle}>${item.price}</div>
                                    <button style={btnStyle} onClick={() => onRemove(item.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div style={{ marginTop: "1rem", textAlign: "right", fontWeight: "700" }}>
                        Total: ${total}
                    </div>
                </>
            )}
        </div>
    );
}
