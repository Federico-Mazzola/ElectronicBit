import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

const products = [
    {
        name: "iPhone 14",
        price: 1200,
        category: "celulares",
        description: "El último iPhone con chip A15 Bionic.",
        image: "https://dummyimage.com/400x300/000/fff.png&text=iPhone+14"
    },
    {
        name: "Notebook Lenovo ThinkPad",
        price: 900,
        category: "notebooks",
        description: "Laptop ideal para trabajo y estudio.",
        image: "https://dummyimage.com/400x300/000/fff.png&text=ThinkPad"
    },
    {
        name: "Auriculares Sony WH-1000XM4",
        price: 350,
        category: "accesorios",
        description: "Cancelación activa de ruido premium.",
        image: "https://dummyimage.com/400x300/000/fff.png&text=Sony+XM4"
    }
];

export default function UploadProducts() {
    const upload = async () => {
        try {
            for (let p of products) {
                await addDoc(collection(db, "products"), p);
                console.log("Producto agregado:", p.name);
            }
            alert("Productos cargados correctamente!");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Cargar productos a Firestore</h1>
            <button onClick={upload}>Subir productos</button>
        </div>
    );
}
