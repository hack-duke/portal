import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdFL7GtRf2S3OLTqzyJ50185Lj4zPe54I",
    authDomain: "hackdukeuni.firebaseapp.com",
    projectId: "hackdukeuni",
    storageBucket: "hackdukeuni.appspot.com",
    messagingSenderId: "702145534475",
    appId: "1:702145534475:web:809541c868217993bac50e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
