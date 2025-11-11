import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

// 🧠 Simulamos base de datos local
const productsData = [
    {
        id: 1,
        name: "Auriculares Bluetooth",
        price: 15999,
        description: "Auriculares inalámbricos con micrófono y cancelación de ruido.",
        category: "audio",
        image: "https://via.placeholder.com/200x150?text=Auriculares",
    },
    {
        id: 2,
        name: "Teclado Mecánico RGB",
        price: 22999,
        description: "Teclado gamer con retroiluminación y switches azules.",
        category: "perifericos",
        image: "https://via.placeholder.com/200x150?text=Teclado",
    },
    {
        id: 3,
        name: "Mouse Inalámbrico",
        price: 8999,
        description: "Mouse ergonómico con sensor óptico y 5 botones programables.",
        category: "perifericos",
        image: "https://via.placeholder.com/200x150?text=Mouse",
    },
    {
        id: 4,
        name: "Parlante Portátil",
        price: 12999,
        description: "Parlante Bluetooth resistente al agua con sonido 360°.",
        category: "audio",
        image: "https://via.placeholder.com/200x150?text=Parlante",
    },
];

// 🔹 Simula llamada a API
function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData);
        }, 1500);
    });
}

export default function ItemListContainer({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Llamado simulado a “API”
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h3 style={{ textAlign: "center" }}>Cargando productos...</h3>;
    }

    return <ItemList products={products} onAddToCart={onAddToCart} />;
}
