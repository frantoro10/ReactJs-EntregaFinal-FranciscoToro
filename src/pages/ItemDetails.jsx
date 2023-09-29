import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
// firebase
import {doc,getDoc,getFirestore} from 'firebase/firestore';
// import axios from 'axios'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

// function getProductById(id) {
//     return axios.get(`https://dummyjson.com/products/${id}`)
// }

const ItemDetails = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productItem = doc(db, "products" , productId)
        getDoc(productItem).then((snapshot) => {setProduct({id: snapshot.id, ...snapshot.data()})});

    }, [productId])

    

    return <ItemDetailContainer productData={product} />
}
export default ItemDetails