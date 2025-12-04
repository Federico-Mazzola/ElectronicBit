import React from "react";
import { useCart } from "../context/CartContext.jsx";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
    const { addToCart } = useCart(); // ✅ Usamos el contexto directamente

    if (!product) {
        return <h2 style={{ textAlign: "center" }}>Producto no encontrado 😢</h2>;
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <img
                    src={product.image}
                    alt={product.name}
                    className="item-detail-image"
                />

                <div className="item-detail-info">
                    <h2>{product.name}</h2>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price.toLocaleString("es-AR")}</p>

                    <button
                        className="add-button"
                        onClick={() =>
                            addToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                quantity: 1,
                                image: product.image,
                            })
                        }
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
