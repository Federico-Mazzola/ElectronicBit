// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaMXzGwHajs8Yuc343zba3JXpkLIXhqWg",
    authDomain: "electronicbit-a4cd9.firebaseapp.com",
    projectId: "electronicbit-a4cd9",
    storageBucket: "electronicbit-a4cd9.firebasestorage.app",
    messagingSenderId: "587269447250",
    appId: "1:587269447250:web:02062c0b2037ec7d87898b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);
