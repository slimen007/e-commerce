
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDTKiOCgvdd_OYIbEX0jde9E86lQIjP9r0",
  authDomain: "r-commerce-59a46.firebaseapp.com",
  databaseURL: "https://r-commerce-59a46-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "r-commerce-59a46",
  storageBucket: "r-commerce-59a46.appspot.com",
  messagingSenderId: "928261823024",
  appId: "1:928261823024:web:d3ac51792e0548f48f2bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth =getAuth(app);

export default auth;