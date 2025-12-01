import { createContext, useContext, useState } from "react";

// Crear contexto
const CartContext = createContext();

// Hook para consumir el contexto más fácilmente
export const useCart = () => useContext(CartContext);

// Provider que envuelve toda la app
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto
    const addItem = (item, quantity) => {
        const exists = cart.find((p) => p.id === item.id);

        if (exists) {
            setCart(
                cart.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Remover un producto
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Total de items
    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    // Total en precio
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
