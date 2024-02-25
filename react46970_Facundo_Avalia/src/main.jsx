import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt674G3r5asxnUlBz6PLXj0mso3ImzG1Y",
  authDomain: "react49970-avalia.firebaseapp.com",
  projectId: "react49970-avalia",
  storageBucket: "react49970-avalia.appspot.com",
  messagingSenderId: "735755619583",
  appId: "1:735755619583:web:0d283354e40460d63850ca"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
