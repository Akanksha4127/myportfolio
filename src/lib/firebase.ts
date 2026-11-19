import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration 
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyBZCe-pO9NZu6KaZCFAhrg2DVniv9GJk8M",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "myportfolio-42db5.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "myportfolio-42db5",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "myportfolio-42db5.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "744528551940",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:744528551940:web:db7a46473b137754ad5551",
  measurementId: "G-CEGEDZ0GL4",

 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app;
