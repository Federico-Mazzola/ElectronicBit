import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ onAddToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔹 Simula una base de datos de productos
    const mockProducts = [
        {
            id: 1,
            name: "Teclado Mecánico RGB",
            description: "Teclado mecánico retroiluminado ideal para gamers.",
            price: 75000,
            image: "https://via.placeholder.com/200x150",
        },
        {
            id: 2,
            name: "Mouse Gamer Inalámbrico",
            description: "Alta precisión y batería de larga duración.",
            price: 50000,
            image: "https://via.placeholder.com/200x150",
        },
        {
            id: 3,
            name: "Auriculares Inalámbricos",
            description: "Sonido envolvente y cancelación de ruido.",
            price: 85000,
            image: "https://via.placeholder.com/200x150",
        },
    ];

    // 🔹 Simulamos una promesa para obtener los datos
    useEffect(() => {
        setLoading(true);

        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                const foundProduct = mockProducts.find(
                    (prod) => prod.id === parseInt(id)
                );
                resolve(foundProduct);
            }, 1000); // 1 segundo de delay
        });

        getProduct.then((res) => {
            setProduct(res);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <h2 style={{ textAlign: "center" }}>Cargando producto...</h2>;
    if (!product)
        return <h2 style={{ textAlign: "center" }}>Producto no encontrado 😢</h2>;

    return (
        <ItemDetail
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            onAddToCart={onAddToCart}
        />
    );
}
