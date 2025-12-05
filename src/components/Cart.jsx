import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
    const {
        cart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
    } = useCart();

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
                        <p>Subtotal: ${product.price * product.quantity}</p>

                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <button onClick={() => decreaseQuantity(product.id)} style={{ padding: "4px 10px", cursor: "pointer" }}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => increaseQuantity(product.id)} style={{ padding: "4px 10px", cursor: "pointer" }}>+</button>
                        </div>
                    </div>

                    <button
                        onClick={() => removeFromCart(product.id)}
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

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <button
                    onClick={clearCart}
                    style={{
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

                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <button
                        style={{
                            background: "#00bcd4",
                            color: "white",
                            border: "none",
                            padding: "10px 16px",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Finalizar compra
                    </button>
                </Link>
            </div>
        </div>
    );
}
