import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeItem, clearCart, totalPrice } = useCart();

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center" }}>Tu carrito está vacío 🛒</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Carrito de compras</h1>

            {cart.map((product) => (
                <div
                    key={product.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        borderBottom: "1px solid #ccc",
                        padding: "10px 0",
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "80px", borderRadius: "6px" }}
                    />

                    <div style={{ flex: 1 }}>
                        <h3>{product.name}</h3>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Subtotal: ${product.price * product.quantity}</p>
                    </div>

                    <button
                        onClick={() => removeItem(product.id)}
                        style={{
                            background: "#e53935",
                            color: "white",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            ))}

            <h2>Total: ${totalPrice()}</h2>

            <button
                onClick={clearCart}
                style={{
                    marginTop: "20px",
                    background: "#111",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                Vaciar carrito
            </button>
        </div>
    );
}
