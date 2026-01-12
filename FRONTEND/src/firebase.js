// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD5pwGCgHYLEoxHrpDyIs7vM16yzFKJ_Q",
  authDomain: "tution-site-1e8e1.firebaseapp.com",
  projectId: "tution-site-1e8e1",
  storageBucket: "tution-site-1e8e1.firebasestorage.app",
  messagingSenderId: "96927388158",
  appId: "1:96927388158:web:997b59372c7cce5cdd70af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);