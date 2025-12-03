// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList.jsx";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";

export default function ItemListContainer() {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const itemsRef = collection(db, "products");

        // Si hay categoría → consulta filtrada
        const q = categoryId
            ? query(itemsRef, where("category", "==", categoryId.toLowerCase()))
            : itemsRef;

        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsData);
            })
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading)
        return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;

    if (products.length === 0)
        return (
            <h2 style={{ textAlign: "center" }}>
                {categoryId
                    ? `No hay productos en la categoría "${categoryId}".`
                    : "No hay productos disponibles."}
            </h2>
        );

    return <ItemList products={products} />;
}
