import React from "react";

export default function Cart({ cartItems = [], onClearCart }) {
    return (
        <div style={{ padding: "1.2rem" }}>
            <h2>Tu carrito</h2>

            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, i) => (
                            <li key={i}>
                                {item.name} — {item.quantity} x ${item.price}
                            </li>
                        ))}
                    </ul>

                    <button onClick={onClearCart}>Vaciar carrito</button>
                </>
            )}
        </div>
    );
}
