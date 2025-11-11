import React from "react";

export default function Cart({ items, onRemove }) {
    const cartStyle = {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "700px",
        margin: "2rem auto",
    };

    const itemStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        padding: "0.5rem 0",
    };

    const btnStyle = {
        backgroundColor: "#ff4d4f",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "0.4rem 0.6rem",
        cursor: "pointer",
    };

    const total = items.reduce(
        (acc, it) => acc + it.price * it.quantity,
        0
    );

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
                                    <strong>{item.name}</strong> <br />
                                    <small>{item.description}</small>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: ${item.price}</p>
                                    <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
                                    <button style={btnStyle} onClick={() => onRemove(item.id)}>
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div
                        style={{
                            marginTop: "1rem",
                            textAlign: "right",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                        }}
                    >
                        Total: ${total}
                    </div>
                </>
            )}
        </div>
    );
}
