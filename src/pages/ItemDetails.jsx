import React, {useState, useEffect, useContext} from 'react'
import {ProductsContext} from "../context/ProductsContext"
import { useParams } from 'react-router-dom'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import ProductDescription from "../components/ItemDetailContainer/ProductDescription"
import ProductGallery from "../components/ItemDetailContainer/ProductGallery"
import ProductCarouselDetail from "../components/ProductCarousel/ProductCarouselDetail"
// Mismo styles que "ItemDetailContainer"
import styles from "../components/ItemDetailContainer/ItemDetailContainer.module.scss"


const ItemDetails = () => {
  const {productId} = useParams();
  const {products} = useContext(ProductsContext);
  const [productSimilar, setProductSimilar] = useState([]);

 useEffect(() => {
  const currentProduct = products.find(item => item.id === productId)

  const productosSimilares = products.filter((item) => (item.category === currentProduct.category))
  setProductSimilar(productosSimilares);
  console.log(productSimilar)
  }, [productId, products])

  return (
    <div id={styles.detailsMainBox}>
      <div className={styles.detailsBox}>
        <ItemDetailContainer/>
        <ProductGallery />
      </div>
        <ProductDescription productId={productId}/>
        <div>
          <h2>Productos similares:</h2>
        <ProductCarouselDetail products={productSimilar} className={styles.carousel} />
        </div>
    </div>
  )
}

export default ItemDetails

// import { useParams} from 'react-router-dom'
// import { useState, useEffect } from 'react'
// // firebase
// import {doc,getDoc,getFirestore} from 'firebase/firestore';
// // import axios from 'axios'
// import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

// // function getProductById(id) {
// //     return axios.get(`https://dummyjson.com/products/${id}`)
// // }

// const ItemDetails = () => {
//     const [product, setProduct] = useState({});
//     const { productId } = useParams();

//     useEffect(() => {
//         const db = getFirestore();
//         const productItem = doc(db, "products" , productId)
//         getDoc(productItem).then((snapshot) => {setProduct({id: snapshot.id, ...snapshot.data()})});

//     }, [productId])

    

//     return <ItemDetailContainer productData={product} />
