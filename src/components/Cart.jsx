import React from "react";

export default function Cart({ cartItems, onClearCart }) {
    const containerStyle = {
        padding: "2rem",
        textAlign: "center",
    };

    const tableStyle = {
        width: "80%",
        margin: "0 auto",
        borderCollapse: "collapse",
    };

    const thTdStyle = {
        border: "1px solid #ddd",
        padding: "0.75rem",
    };

    const totalStyle = {
        marginTop: "1.5rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
    };

    const buttonStyle = {
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "1rem",
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div style={containerStyle}>
                <h2>Tu carrito está vacío 🛒</h2>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <h2>Carrito de compras</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thTdStyle}>Producto</th>
                        <th style={thTdStyle}>Precio</th>
                        <th style={thTdStyle}>Cantidad</th>
                        <th style={thTdStyle}>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.name}>
                            <td style={thTdStyle}>{item.name}</td>
                            <td style={thTdStyle}>${item.price}</td>
                            <td style={thTdStyle}>{item.quantity}</td>
                            <td style={thTdStyle}>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p style={totalStyle}>Total: ${total}</p>

            <button style={buttonStyle} onClick={onClearCart}>
                Vaciar carrito
            </button>
        </div>
    );
}

