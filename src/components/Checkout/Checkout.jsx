// src/components/Checkout/Checkout.jsx
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useCart } from "../../context/CartContext.jsx";
import "./Checkout.css";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            buyer,
            items: cart,
            total: totalPrice(),
            date: serverTimestamp(),
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);

            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.log("Error al crear la orden:", error);
        }
    };

    if (orderId) {
        return (
            <div className="checkout-success-container">
                <h2>¡Compra realizada con éxito! 🎉</h2>
                <p>Tu código de orden es:</p>
                <span className="order-id">{orderId}</span>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            <form className="checkout-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    name="name"
                    value={buyer.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={buyer.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Teléfono"
                    name="phone"
                    value={buyer.phone}
                    onChange={handleChange}
                    required
                />

                <button className="checkout-btn" type="submit">
                    Finalizar compra
                </button>
            </form>

            <div className="checkout-summary">
                <h3>Resumen</h3>
                {cart.map((item) => (
                    <p key={item.id}>
                        {item.title} x {item.quantity} — <strong>${item.price}</strong>
                    </p>
                ))}
                <h3>Total: ${totalPrice()}</h3>
            </div>
        </div>
    );
};

export default Checkout;
