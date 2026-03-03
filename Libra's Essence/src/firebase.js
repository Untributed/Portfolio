import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = {
    apiKey: "AIzaSyA4L-rSMfcAL1OdyyDXN1X_g3DY1JGmzDo",
    authDomain: "libras-essence-f2749.firebaseapp.com",
    projectId: "libras-essence-f2749",
    storageBucket: "libras-essence-f2749.firebasestorage.app",
    messagingSenderId: "374622446846",
    appId: "1:374622446846:web:8625767c5ca493cdb931af",
    measurementId: "G-1BY9LXQHJ3"
};

const app = initializeApp(firebaseApp);

export const storage = getStorage(app);
export const db = getFirestore(app);