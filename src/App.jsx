
// Librerias - React
import React from "react";
//Components
import { CartProvider } from "./context/CartContext";
import MainRouter from "./routes/MainRouter";
import MainLayout from "./layout/MainLayout";
// Styles
import styles from "./App.module.scss";


const App = () => {

  return (
    <CartProvider>
      <MainLayout>
        <MainRouter/>
      </MainLayout>
    </CartProvider>

  );
};

export default App;
