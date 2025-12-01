import { db } from "./config.js";
import { collection, addDoc } from "firebase/firestore";

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

async function seed() {
    try {
        for (let product of products) {
            await addDoc(collection(db, "products"), product);
            console.log("✔ Producto agregado:", product.name);
        }
        console.log("🎉 Todos los productos se cargaron correctamente.");
    } catch (error) {
        console.error("❌ Error al cargar productos:", error);
    }
}

seed();
