// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTxwoJ3tZeouUIoOSVmc2DX0L6jGPgVIE",
  authDomain: "coffee-store-8fc65.firebaseapp.com",
  projectId: "coffee-store-8fc65",
  storageBucket: "coffee-store-8fc65.firebasestorage.app",
  messagingSenderId: "777186670593",
  appId: "1:777186670593:web:9589b1af2178234c09a800",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
