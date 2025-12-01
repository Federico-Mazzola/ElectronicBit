import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer({ onAddToCart }) {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Mock de productos (con campo category)
        const mockProducts = [
            {
                id: 1,
                name: "Teclado Mecánico RGB",
                description: "Teclado mecánico retroiluminado ideal para gamers.",
                price: 75000,
                image: "https://via.placeholder.com/200x150?text=Teclado",
                category: "accesorios",
            },
            {
                id: 2,
                name: "Mouse Gamer Inalámbrico",
                description: "Alta precisión y batería de larga duración.",
                price: 50000,
                image: "https://via.placeholder.com/200x150?text=Mouse",
                category: "accesorios",
            },
            {
                id: 3,
                name: "Auriculares Inalámbricos",
                description: "Sonido envolvente y cancelación de ruido.",
                price: 85000,
                image: "https://via.placeholder.com/200x150?text=Auriculares",
                category: "accesorios",
            },
            {
                id: 4,
                name: "Parlante Bluetooth",
                description: "Potente sonido y conexión rápida.",
                price: 60000,
                image: "https://via.placeholder.com/200x150?text=Parlante",
                category: "accesorios",
            },
            {
                id: 5,
                name: "Celular X Pro",
                description: "Pantalla AMOLED, 128GB, cámara triple.",
                price: 250000,
                image: "https://via.placeholder.com/200x150?text=Celular",
                category: "celulares",
            },
            {
                id: 6,
                name: "Notebook Ultra 14\"",
                description: "Intel i7, 16GB RAM, SSD 512GB.",
                price: 450000,
                image: "https://via.placeholder.com/200x150?text=Notebook",
                category: "notebooks",
            },
        ];

        // Simulamos fetch con delay
        const getProducts = new Promise((resolve) => {
            setTimeout(() => resolve(mockProducts), 800);
        });

        getProducts.then((data) => {
            let result = data;

            if (categoryId) {
                result = data.filter(
                    (prod) =>
                        prod.category &&
                        prod.category.toString().toLowerCase() === categoryId.toString().toLowerCase()
                );
            }

            setProducts(result);
            setLoading(false);
        });
    }, [categoryId]);

    if (loading) return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;

    if (!products || products.length === 0) {
        return (
            <h2 style={{ textAlign: "center" }}>
                {categoryId ? `No hay productos en la categoría "${categoryId}".` : "No hay productos disponibles."}
            </h2>
        );
    }

    return <ItemList products={products} onAddToCart={onAddToCart} />;
}
