import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, name, price, image }) {
    if (!id || !name) {
        // Producto inválido
        return null;
    }

    return (
        <div className="item-card">
            <img
                src={image || "https://via.placeholder.com/260x160?text=Sin+imagen"}
                alt={name}
                className="item-image"
            />

            <h3 className="item-title">{name}</h3>

            <p className="item-price">
                ${price?.toLocaleString("es-AR") ?? "0"}
            </p>

            <Link to={`/item/${id}`} className="item-detail-btn">
                Ver detalle
            </Link>
        </div>
    );
}
