import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔹 Simulamos un "fetch" con Promise
    useEffect(() => {
        const mockProducts = [
            {
                id: 1,
                name: "Teclado Mecánico RGB",
                description: "Teclado mecánico retroiluminado ideal para gamers.",
                price: 75000,
                image: "https://via.placeholder.com/200x150?text=Teclado",
            },
            {
                id: 2,
                name: "Mouse Gamer Inalámbrico",
                description: "Alta precisión y batería de larga duración.",
                price: 50000,
                image: "https://via.placeholder.com/200x150?text=Mouse",
            },
            {
                id: 3,
                name: "Auriculares Inalámbricos",
                description: "Sonido envolvente y cancelación de ruido.",
                price: 85000,
                image: "https://via.placeholder.com/200x150?text=Auriculares",
            },
            {
                id: 4,
                name: "Parlante Bluetooth",
                description: "Potente sonido y conexión rápida.",
                price: 60000,
                image: "https://via.placeholder.com/200x150?text=Parlante",
            },
        ];

        // Promesa simulada (retardo de 1s)
        const getProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProducts);
            }, 1000);
        });

        getProducts.then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;
    }

    return <ItemList products={products} onAddToCart={onAddToCart} />;
}
