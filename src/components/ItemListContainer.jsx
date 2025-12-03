import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";

import ItemList from "./ItemList/ItemList";

export default function ItemListContainer({ onAddToCart }) {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const productsRef = collection(db, "products");

        const q = categoryId
            ? query(productsRef, where("category", "==", categoryId))
            : productsRef;

        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productsData);
            })
            .catch((error) => {
                console.error("Error obteniendo productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading)
        return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;

    if (!products || products.length === 0) {
        return (
            <h2 style={{ textAlign: "center" }}>
                {categoryId
                    ? `No hay productos en la categoría "${categoryId}".`
                    : "No hay productos disponibles."}
            </h2>
        );
    }

    return <ItemList products={products} onAddToCart={onAddToCart} />;
}
