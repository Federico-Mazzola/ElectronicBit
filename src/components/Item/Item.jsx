import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, name, price, image, addToCart }) {
    const product = { id, name, price, image };

    return (
        <div className="item-card">
            <img src={image} alt={name} className="item-image" />

            <h3 className="item-title">{name}</h3>
            <p className="item-price">${price?.toLocaleString("es-AR")}</p>

            <div className="item-actions">
                <Link to={`/item/${id}`} className="item-detail-btn">
                    Ver detalle
                </Link>

                <button
                    className="item-add-btn"
                    onClick={() => addToCart(product, 1)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
