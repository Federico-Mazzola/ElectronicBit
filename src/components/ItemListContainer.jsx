import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList.jsx"; // Ruta correcta

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Categorías válidas en tu app
    const validCategories = ["celulares", "accesorios", "netbooks", "monitor", "tablets"];

    useEffect(() => {
        setLoading(true);

        const itemsRef = collection(db, "products");

        // Solo filtramos si categoryId es válido
        const isValidCategory = categoryId && validCategories.includes(categoryId.toLowerCase());

        const q = isValidCategory
            ? query(itemsRef, where("category", "==", categoryId.toLowerCase()))
            : itemsRef;

        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        name: data.name || "Producto sin nombre",
                        price: data.price ?? 0,
                        image:
                            data.image ||
                            "https://via.placeholder.com/260x160?text=Sin+imagen",
                        description: data.description || "No hay descripción disponible",
                        category: data.category || "sin-categoria",
                    };
                });

                // Filtrar solo categorías válidas aunque venga todo el collection
                const filteredProducts = isValidCategory
                    ? productsData.filter((p) =>
                        validCategories.includes(p.category.toLowerCase())
                    )
                    : productsData;

                setProducts(filteredProducts);
            })
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading)
        return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;

    if (products.length === 0)
        return (
            <h2 style={{ textAlign: "center" }}>
                {categoryId && !validCategories.includes(categoryId.toLowerCase())
                    ? `Categoría "${categoryId}" no encontrada.`
                    : "No hay productos disponibles."}
            </h2>
        );

    return <ItemList products={products} />;
}
