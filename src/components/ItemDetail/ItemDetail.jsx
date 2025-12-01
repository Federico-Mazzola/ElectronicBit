import React, { useState } from "react";
import "./ItemDetail.css";

export default function ItemDetail({ name, description, price, image, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="detail-container">
            <img src={image} alt={name} className="detail-image" />

            <h2 className="detail-title">{name}</h2>
            <p className="detail-description">{description}</p>
            <p className="detail-price"><strong>${price}</strong></p>

            <div className="detail-quantity">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button
                className="detail-add-btn"
                onClick={() => onAddToCart({ name, price, quantity })}
            >
                Agregar al carrito
            </button>
        </div>
    );
}
