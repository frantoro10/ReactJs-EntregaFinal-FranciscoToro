import React, { useState, useEffect } from 'react'
// firebase
import {collection,getDocs,getFirestore} from 'firebase/firestore';
// axios
// import axios from "axios"
// componentes
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

// function getProducts() {
//   return axios.get("https://dummyjson.com/products")
// }

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
    .catch((error) => console.log(error))
    .then(() => setLoading(false))
  }, [])

  return loading ? <div>Loading...</div> : <ItemListContainer productsData={products}/>

}

export default Home