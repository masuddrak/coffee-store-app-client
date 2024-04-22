// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjxlNSFKwIjLcH4nMPOA6CPben8pSwDoo",
  authDomain: "coffee-store-app-8833b.firebaseapp.com",
  projectId: "coffee-store-app-8833b",
  storageBucket: "coffee-store-app-8833b.appspot.com",
  messagingSenderId: "581420555996",
  appId: "1:581420555996:web:eb06179b4188c0a0349e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth