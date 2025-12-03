import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <Link to={`/item/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-img" />
            </Link>

            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toLocaleString()}</p>

                <Link to={`/item/${product.id}`} className="btn-detail">
                    Ver detalle
                </Link>
            </div>
        </div>
    );
}
