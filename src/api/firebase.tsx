import { FirebaseOptions, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config: FirebaseOptions = {
  apiKey: "AIzaSyDjoJKq8b-PHmrD6alQT7b5yDWcFArouq4",
  authDomain: "my-portfolio-site-6fafa.firebaseapp.com",
  projectId: "my-portfolio-site-6fafa",
  storageBucket: "my-portfolio-site-6fafa.appspot.com",
  messagingSenderId: "777946271005",
  appId: "1:777946271005:web:7f944606b2d0cbf150a5f4",
  measurementId: "G-HGPV01GSL8"

};

// Initialize Firebase
export const app =
  getApps().length === 0 ? initializeApp(config) : getApps()[0];

export const auth = getAuth(app)