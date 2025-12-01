import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ id, name, description, price, image, onAddToCart }) {
    return (
        <div className="product-card">
            <Link to={`/item/${id}`} className="product-link">
                <img src={image} alt={name} className="product-image" />
            </Link>

            <div className="product-info">
                <h3 className="product-title">{name}</h3>

                <p className="product-description">
                    {description.length > 60 ? description.substring(0, 60) + "..." : description}
                </p>

                <p className="product-price"><strong>${price}</strong></p>

                <button
                    className="product-btn"
                    onClick={() => onAddToCart({ name, price, quantity: 1 })}
                >
                    Agregar al carrito
                </button>

                <Link to={`/item/${id}`} className="details-btn">
                    Ver detalles
                </Link>
            </div>
        </div>
    );
}
