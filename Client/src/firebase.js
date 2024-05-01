// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "godoc-7e549.firebaseapp.com",
  projectId: "godoc-7e549",
  storageBucket: "godoc-7e549.appspot.com",
  messagingSenderId: "1189104972",
  appId: "1:1189104972:web:720044bdecd18bb58813e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);