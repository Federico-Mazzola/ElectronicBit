// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

// 1) Crear contexto
const CartContext = createContext();

// 2) Hook para usar el contexto (más cómodo)
export const useCart = () => useContext(CartContext);

// 3) Provider que envolverá toda la app
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // 🔄 Cargar carrito desde localStorage
    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            try {
                setCart(JSON.parse(saved));
            } catch (e) {
                console.error("Error leyendo localStorage:", e);
            }
        }
    }, []);

    // 💾 Guardar carrito en localStorage cuando cambia
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // ➕ Añadir producto al carrito
    const addToCart = (product, quantity = 1) => {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === product.id);

            if (exist) {
                // Si ya existe, sumo la cantidad
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            // Si no existe, lo agrego
            return [...prev, { ...product, quantity }];
        });
    };

    // ❌ Eliminar un producto
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // 🧹 Vaciar carrito
    const clearCart = () => setCart([]);

    // 🔢 Cantidad total de productos
    const totalItems = () =>
        cart.reduce((acc, item) => acc + item.quantity, 0);

    // 💰 Total del precio
    const totalPrice = () =>
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
