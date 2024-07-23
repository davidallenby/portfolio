import { getFirestore } from "@firebase/firestore";
import { FirebaseOptions, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config: FirebaseOptions = {
  apiKey: "AIzaSyC1S7H407wozzXxryleORoKhFfKs6BRNSM",
  authDomain: "davidallenby-portfolio.firebaseapp.com",
  projectId: "davidallenby-portfolio",
  storageBucket: "davidallenby-portfolio.appspot.com",
  messagingSenderId: "894212620761",
  appId: "1:894212620761:web:9d9dd6f314c291462b59c8",
  measurementId: "G-MQY3VRX12R"
};

// Initialize Firebase
export const app =
  getApps().length === 0 ? initializeApp(config) : getApps()[0];
export const auth = getAuth(app);
// Export firestore
export const db = getFirestore(app);