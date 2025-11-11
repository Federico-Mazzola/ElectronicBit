import React from "react";
import ProductCard from "./ProductCard";

export default function ItemList({ products, onAddToCart }) {
    const listStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "1rem",
    };

    const titleStyle = {
        textAlign: "center",
        marginTop: "1rem",
    };

    return (
        <div>
            <h2 style={titleStyle}>Nuestros Productos</h2>
            <div style={listStyle}>
                {products.map((prod) => (
                    <ProductCard
                        key={prod.id}
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
