// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔴 PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyB75URNN0gZDFQ0uw0qmdTCJvkcJ11ABjI",
    authDomain: "dani-planis.firebaseapp.com",
    projectId: "dani-planis",
    storageBucket: "dani-planis.firebasestorage.app",
    messagingSenderId: "1068558000996",
    appId: "1:1068558000996:web:b2a0c48fb534f29b345071"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);