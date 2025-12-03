import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./config.js";
import { productsData } from "./productsData.js";

export default function UploadProducts9() {
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        setLoading(true);
        try {
            for (const product of productsData) {
                await setDoc(doc(db, "products", product.id), product);
                console.log("Producto subido:", product.name);
            }

            alert("✔ Todos los productos fueron subidos correctamente");
        } catch (err) {
            console.error(err);
            alert("❌ Error subiendo productos");
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: 24 }}>
            <h1>Cargar 9 productos reales</h1>
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Subiendo..." : "Subir 9 productos"}
            </button>
        </div>
    );
}
