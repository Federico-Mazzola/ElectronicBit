// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaMXzGwHajs8Yuc343zba3JXpkLIXhqWg",
    authDomain: "electronicbit-a4cd9.firebaseapp.com",
    projectId: "electronicbit-a4cd9",
    storageBucket: "electronicbit-a4cd9.appspot.com", // si Firebase te dio .app, está OK; si falla probá .app -> .appspot.com
    messagingSenderId: "587269447250",
    appId: "1:587269447250:web:02062c0b2037ec7d87898b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
