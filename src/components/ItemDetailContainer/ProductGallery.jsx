import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { ProductsContext } from '../../context/ProductsContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ImageGallery from 'react-image-gallery'
import styles from './ItemDetailContainer.module.scss'
import 'react-image-gallery/styles/scss/image-gallery.scss';



const ProductGallery = () => {
    const [product, setProduct] = useState({})
    const [key, setKey] = useState(0);
    const { productId } = useParams();

    useEffect(() => {
        const loadProduct = async () => {
            const db = getFirestore();
            const productItem = doc(db, "products", productId);

            try {
                const snapshot = await getDoc(productItem);
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                    setKey(prevKey => prevKey + 1);
                } else {
                    <p>producto no encontrado</p>
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        loadProduct();

    }, [productId]);

    const isValidProduct = product && product.img
    const images = isValidProduct ? [
        {
            original: product.img,
            thumbnail: product.img,
            originalHeight: "600px",
            originalWidth: "600px",

        },
        {
            original: product.img,
            thumbnail: product.img,
            originalHeight: "600px",
            originalWidth: "600px",

        },
        {
            original: product.img,
            thumbnail: product.img,
            originalHeight: "600px",
            originalWidth: "600px",

        },
    ]
        : [];

    return (
        <div>

            <ImageGallery key={key} items={images} thumbnailPosition='left' />
        </div>
    )
}

export default ProductGallery

// Mi manera de hacerlo que funciono | Arriba agregando condicionales con ayuda de gpt.

// useEffect(() => {
//     const db = getFirestore()
//     const productItem = doc(db,"products", productId)
//     getDoc(productItem).then((snapshot) => {setProduct({id: snapshot.id, ...snapshot.data()})})
// }, [productId])

// const images = [
//     {
//       original: product.img,
//       thumbnail:product.img,
//     },
//     {
//       original: product.img,
//       thumbnail:product.img,
//     },
//     {
//       original: product.img,
//       thumbnail:product.img,
//     },
//   ];