import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeItem, clearCart, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div style={{ padding: "1.5rem" }}>
                <h2>Tu carrito está vacío 😢</h2>
                <p>Agregá productos desde la tienda.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: "1.5rem" }}>
            <h2>Tu carrito</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            padding: "0.8rem",
                            borderBottom: "1px solid #ddd",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <strong>{item.name}</strong>
                            <br />
                            {item.quantity} × ${item.price}
                        </div>

                        <button
                            onClick={() => removeItem(item.id)}
                            style={{
                                background: "#d32f2f",
                                color: "#fff",
                                border: "none",
                                padding: "0.4rem 0.7rem",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Total: ${totalPrice()}</h3>

            <button
                onClick={clearCart}
                style={{
                    background: "#555",
                    color: "#fff",
                    padding: "0.7rem 1rem",
                    border: "none",
                    borderRadius: "6px",
                    marginTop: "1rem",
                    cursor: "pointer",
                }}
            >
                Vaciar carrito
            </button>
        </div>
    );
}
