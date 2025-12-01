// src/firebase/UploadProducts.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config.js";

const products = [
    { name: "iPhone 14", price: 1200, category: "celulares", description: "El último iPhone", image: "https://dummyimage.com/400x300/000/fff.png&text=iPhone+14" },
    { name: "Notebook Lenovo ThinkPad", price: 900, category: "notebooks", description: "Laptop para trabajo", image: "https://dummyimage.com/400x300/000/fff.png&text=ThinkPad" },
    { name: "Auriculares Sony WH-1000XM4", price: 350, category: "accesorios", description: "Cancelación de ruido", image: "https://dummyimage.com/400x300/000/fff.png&text=Sony+XM4" }
];

export default function UploadProducts() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("UploadProducts montado");
    }, []);

    const handleUpload = async () => {
        setLoading(true);
        try {
            for (const p of products) {
                const docRef = await addDoc(collection(db, "products"), p);
                console.log("Producto agregado:", p.name, "id:", docRef.id);
            }
            alert("Productos cargados correctamente en Firestore ✅");
        } catch (err) {
            console.error("Error al subir productos:", err);
            alert("Error al subir productos — revisá consola.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <h1>Cargar productos a Firestore (temporal)</h1>
            <p>Haz click para subir los productos de prueba a tu Firestore</p>
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Subiendo..." : "Subir productos"}
            </button>
        </div>
    );
}