import React from "react";
import ProductCard from "./ProductCard"; // o Item.jsx si luego lo creamos
import "./ItemList.css"; // importamos los estilos

export default function ItemList({ products, onAddToCart }) {
    return (
        <div className="itemlist-container">
            <h2 className="itemlist-title">Nuestros Productos</h2>

            <div className="itemlist-grid">
                {products.map((prod) => (
                    <ProductCard
                        key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        price={prod.price}
                        description={prod.description}
                        image={prod.image}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}
