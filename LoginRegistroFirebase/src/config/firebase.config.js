// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHedvBUMNSJQulVNAj8BQnLufTeWyy4Ks",
  authDomain: "loginregistro-e3b56.firebaseapp.com",
  projectId: "loginregistro-e3b56",
  storageBucket: "loginregistro-e3b56.appspot.com",
  messagingSenderId: "1076610226563",
  appId: "1:1076610226563:web:a24ca8e6d162eb5fcd3eb6",
  measurementId: "G-2Q2BKNTG9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
