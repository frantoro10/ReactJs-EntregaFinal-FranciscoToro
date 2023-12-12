
// Librerias - React
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Components
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductsContext";
import MainRouter from "./routes/MainRouter";
import MainLayout from "./layout/MainLayout";
// Styles
import styles from "./styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <ProductProvider>
        <CartProvider>
          <MainLayout>
            <MainRouter />
          </MainLayout>
        </CartProvider>
      </ProductProvider>
      <ToastContainer />
    </div>
  );
};

export default App;