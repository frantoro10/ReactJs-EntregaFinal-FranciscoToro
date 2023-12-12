import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);

        // Agrega un console.log para verificar el contenido de 'products'
        console.log('Productos cargados desde Firebase:', productsData);

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading, setLoading,filterProducts, setFilterProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};



// import React, { useState, useEffect } from 'react'
// // firebase
// import {collection,getDocs,getFirestore} from 'firebase/firestore';
// // axios
// // import axios from "axios"
// // componentes
// import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

// // function getProducts() {
// //   return axios.get("https://dummyjson.com/products")
// // }

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const db = getFirestore();
//     const productsCollection = collection(db, "products");

//     getDocs(productsCollection).then((snapshot) => {
//       setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
//     })
//     .catch((error) => console.log(error))
//     .then(() => setLoading(false))
//   }, [])

//   return loading ? <div>Loading...</div> : <ItemListContainer productsData={products}/>
  

// }

// export default Home