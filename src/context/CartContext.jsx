import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Cargar carrito desde localStorage
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

    // Guardar carrito en localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Añadir producto al carrito
    const addToCart = (product, quantity = 1) => {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === product.id);
            if (exist) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    // Eliminar producto
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // Vaciar carrito
    const clearCart = () => setCart([]);

    // Aumentar cantidad de un producto
    const increaseQuantity = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Disminuir cantidad de un producto
    const decreaseQuantity = (id) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Cantidad total de productos
    const totalItems = () =>
        cart.reduce((acc, item) => acc + item.quantity, 0);

    // Total del precio
    const totalPrice = () =>
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseQuantity,
                decreaseQuantity,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
