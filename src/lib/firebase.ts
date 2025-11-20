import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDn0P-Bn4dvtIXjXY5PLKnE-5VbxUz0XqU",
  authDomain: "thehouseofblackness-5c558.firebaseapp.com",
  projectId: "thehouseofblackness-5c558",
  storageBucket: "thehouseofblackness-5c558.firebasestorage.app",
  messagingSenderId: "1039260650032",
  appId: "1:1039260650032:web:45d72024a1a5c96c9abbf5",
  measurementId: "G-7DLM859F9T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
