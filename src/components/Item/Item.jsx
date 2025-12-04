import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./Item.css";

export default function Item({ id, name, price, image }) {
    const { addToCart } = useCart();
    const product = { id, name, price, image };

    return (
        <div className="item-card">
            <Link to={`/item/${id}`}>
                <img src={image} alt={name} className="item-image" />
            </Link>

            <h3 className="item-title">{name}</h3>

            <p className="item-price">${price.toLocaleString("es-AR")}</p>

            <div className="item-buttons">
                <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product, 1)}
                >
                    Agregar al carrito
                </button>

                <Link to={`/item/${id}`} className="view-detail-btn">
                    Ver detalle
                </Link>
            </div>
        </div>
    );
}
