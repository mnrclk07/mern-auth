// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6777a.firebaseapp.com",
  projectId: "mern-auth-6777a",
  storageBucket: "mern-auth-6777a.appspot.com",
  messagingSenderId: "827126318180",
  appId: "1:827126318180:web:3b08ee61219def24570b71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);