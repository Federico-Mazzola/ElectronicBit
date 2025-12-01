import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

export default function ItemDetailContainer({ onAddToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const mockProducts = [
        {
            id: 1,
            name: "Teclado Mecánico RGB",
            description: "Teclado mecánico retroiluminado ideal para gamers.",
            price: 75000,
            image: "https://via.placeholder.com/200x150",
            category: "accesorios",
        },
        {
            id: 2,
            name: "Mouse Gamer Inalámbrico",
            description: "Alta precisión y batería de larga duración.",
            price: 50000,
            image: "https://via.placeholder.com/200x150",
            category: "accesorios",
        },
        {
            id: 3,
            name: "Auriculares Inalámbricos",
            description: "Sonido envolvente y cancelación de ruido.",
            price: 85000,
            image: "https://via.placeholder.com/200x150",
            category: "accesorios",
        },
        {
            id: 5,
            name: "Celular X Pro",
            description: "Pantalla AMOLED, 128GB, cámara triple.",
            price: 250000,
            image: "https://via.placeholder.com/200x150",
            category: "celulares",
        },
        {
            id: 6,
            name: "Notebook Ultra 14\"",
            description: "Intel i7, 16GB RAM, SSD 512GB.",
            price: 450000,
            image: "https://via.placeholder.com/200x150",
            category: "notebooks",
        },
    ];

    useEffect(() => {
        setLoading(true);
        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                const found = mockProducts.find((p) => p.id === parseInt(id));
                resolve(found);
            }, 900);
        });

        getProduct.then((res) => {
            setProduct(res);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <h2 style={{ textAlign: "center" }}>Cargando producto...</h2>;
    if (!product) return <h2 style={{ textAlign: "center" }}>Producto no encontrado 😢</h2>;

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
