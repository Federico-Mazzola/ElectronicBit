import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ItemDetail({ onAddToCart }) {
    const { id } = useParams();

    // Simulamos los datos del producto (en un caso real vendrían de una API)
    const products = [
        { id: "1", name: "Auriculares Bluetooth", price: 15999, description: "Auriculares inalámbricos premium.", image: "https://via.placeholder.com/300x200?text=Auriculares" },
        { id: "2", name: "Teclado Mecánico RGB", price: 22999, description: "Teclado gamer con retroiluminación RGB.", image: "https://via.placeholder.com/300x200?text=Teclado" },
        { id: "3", name: "Mouse Inalámbrico", price: 8999, description: "Mouse ergonómico de alta precisión.", image: "https://via.placeholder.com/300x200?text=Mouse" },
    ];

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const handleAdd = () => {
        onAddToCart({ ...product, quantity: 1 });
    };

    const containerStyle = {
        textAlign: "center",
        padding: "2rem",
    };

    const imgStyle = {
        width: "300px",
        borderRadius: "10px",
    };

    const btnStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "0.6rem 1rem",
        cursor: "pointer",
        margin: "1rem",
    };

    return (
        <div style={containerStyle}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={imgStyle} />
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button style={btnStyle} onClick={handleAdd}>Agregar al carrito</button>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button style={{ ...btnStyle, backgroundColor: "#555" }}>Volver</button>
            </Link>
        </div>
    );
}
