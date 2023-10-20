
// Librerias - React
import React from "react";
//Components
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductsContext";
import MainRouter from "./routes/MainRouter";
import MainLayout from "./layout/MainLayout";
// Styles
import styles from "./App.module.scss";


const App = () => {

  return (
    <ProductProvider>
    <CartProvider>
      <MainLayout>
        <MainRouter/>
      </MainLayout>
    </CartProvider>
    </ProductProvider>

  );
};

export default App;
