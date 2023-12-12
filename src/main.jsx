import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// firebase
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBmRDXjMPAR8VeNDvSRBuiRyyLM9X-rOlg",
  authDomain: "react-ecommerce-793d0.firebaseapp.com",
  projectId: "react-ecommerce-793d0",
  storageBucket: "react-ecommerce-793d0.appspot.com",
  messagingSenderId: "361843426269",
  appId: "1:361843426269:web:75a4269319f8b376666c34"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
