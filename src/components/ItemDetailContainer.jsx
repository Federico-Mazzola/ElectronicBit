// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Referencia al documento en Firestore
        const docRef = doc(db, "products", id);

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                } else {
                    console.warn("Producto no encontrado");
                }
            })
            .catch((error) => {
                console.error("Error obteniendo el producto:", error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <h2 style={{ textAlign: "center" }}>Cargando producto...</h2>;

    if (!product)
        return (
            <h2 style={{ textAlign: "center" }}>
                Producto no encontrado 😢
            </h2>
        );

    return <ItemDetail product={product} />;
}
