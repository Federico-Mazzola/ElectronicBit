import React from "react";
import "./ItemDetail.css";

export default function ItemDetail({ product, onAddToCart }) {
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

                    <p className="price">${product.price.toLocaleString()}</p>

                    <button
                        className="add-button"
                        onClick={() =>
                            onAddToCart({
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
