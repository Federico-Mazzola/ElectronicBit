import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ onAddToCart }) {
    const products = [
        {
            id: 1,
            name: "Auriculares Bluetooth",
            price: 15999,
            description: "Auriculares inalámbricos con micrófono y cancelación de ruido.",
            image: "https://via.placeholder.com/200x150?text=Auriculares",
        },
        {
            id: 2,
            name: "Teclado Mecánico RGB",
            price: 22999,
            description: "Teclado gamer con retroiluminación y switches azules.",
            image: "https://via.placeholder.com/200x150?text=Teclado",
        },
        {
            id: 3,
            name: "Mouse Inalámbrico",
            price: 8999,
            description: "Mouse ergonómico con sensor óptico y 5 botones programables.",
            image: "https://via.placeholder.com/200x150?text=Mouse",
        },
    ];

    const listStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "1rem",
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Nuestros Productos</h2>
            <div style={listStyle}>
                {products.map((prod) => (
                    <ProductCard key={prod.id} {...prod} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
}
