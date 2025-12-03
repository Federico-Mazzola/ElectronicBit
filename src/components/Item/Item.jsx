import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, name, price, image }) {
    return (
        <div className="item-card">
            <img src={image} alt={name} className="item-image" />

            <h3 className="item-title">{name}</h3>

            <p className="item-price">${price.toLocaleString("es-AR")}</p>

            <Link to={`/item/${id}`} className="item-detail-btn">
                Ver detalle
            </Link>
        </div>
    );
}
