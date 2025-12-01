import React, { useState } from "react";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";

export default function ItemDetail({ name, description, price, image }) {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const handleAdd = () => {
        addItem(
            { id: crypto.randomUUID(), name, price, image }, // ID real vendrá de Firebase luego
            quantity
        );
    };

    return (
        <div className="detail-container">
            <img src={image} alt={name} className="detail-image" />

            <h2 className="detail-title">{name}</h2>
            <p className="detail-description">{description}</p>
            <p className="detail-price">${price}</p>

            <div className="detail-quantity">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button className="detail-add-btn" onClick={handleAdd}>
                Agregar al carrito
            </button>
        </div>
    );
}
