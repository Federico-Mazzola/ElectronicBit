// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail/ItemDetail.jsx";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";

export default function ItemDetailContainer() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productRef = doc(db, "products", id);

        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                } else {
                    setProduct(null);
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return <h2 style={{ textAlign: "center" }}>Cargando producto...</h2>;

    if (!product)
        return (
            <h2 style={{ textAlign: "center" }}>
                El producto no existe o fue eliminado.
            </h2>
        );

    return <ItemDetail product={product} />;
}
